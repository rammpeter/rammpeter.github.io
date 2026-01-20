#!/usr/bin/ruby

$LOAD_PATH << 'panorama/app/helpers'
$LOAD_PATH << 'panorama/app/helpers/dragnet'

require 'active_session_history_helper.rb'

module Rails
  def self.logger
    Class.new do
      def info(msg)

      end
    end.new
  end

end

# Fake modules to resolve dependencies
module Dragnet
end

Dir.foreach("panorama/app/helpers/dragnet") do |fname|
  next if fname == '.' or fname == '..'
  require "dragnet/#{fname}"
end

require 'dragnet_helper.rb'

class ClientInfoStore
  def self.read_for_client_key(a,b,c)
    nil
  end
end

module DragnetHelper
  def get_decrypted_client_key
    nil
  end
end


module Panorama
  module Application
    # return an anonymous class object with method panorama_master_password
    def self.config
      anon_class = Class.new do
        def panorama_var_home
          '/'
        end
      end
      anon_class.new
    end
  end
end

module PanoramaConnection
  def self.system_parameter_table
    'GV$Parameter'
  end
  def autonomous_database?
    false
  end
end

class Generator
  include DragnetHelper

  @@target_dir = 'oracle_performance_tuning_generated'

  # Fake-Implementierungen für Voraussetzungen dragnet_helper
  def t(a, args)
    args[:default]
  end

  def system_schema_subselect
    "SELECT /*+ NO_MERGE */ UserName FROM All_Users WHERE Oracle_Maintained = 'Y'"
  end

  def system_userid_subselect
    "SELECT /*+ NO_MERGE */ User_ID FROM All_Users WHERE Oracle_Maintained = 'Y'"
  end

  def get_db_version
    '30.1'  # activate all
  end

  def get_dbid
    '&your_DBID'
  end

  def get_locale
    'en'
  end

  def sql_select_all(args)
    []
  end

  def read_from_client_info_store(_args)
    nil
  end

  def render_jstree_json
    def render_entry_json(global_id_prefix, inner_id, entry)
      if global_id_prefix
        my_id = "#{global_id_prefix}_#{inner_id}"
      else
        my_id = inner_id
      end

      result =
          "{
  \"id\": \"#{my_id}\",
  \"text\": \"#{inner_id+1}. #{entry[:name]}\",
  \"state\": { \"opened\": false }
"
      if entry[:entries]                                                        # Menu-Knoten
        result << ", \"children\": ["
        entry_id = 0
        entry[:entries].each do |e|
          result << render_entry_json(my_id, entry_id, e)
          entry_id = entry_id + 1
        end
        result[result.length-1] = ' '                                           # letztes Komma entfernen
        result << "]"
      else
        result << ", \"icon\":\"images/application-monitor.png\""
      end
      result << "},"
      result
    end

    jstree_json = '['                                                              # JSON-Buffer
    entry_id = 0
    dragnet_sql_list.each do |s|
      jstree_json << render_entry_json(nil, entry_id, s)
      entry_id = entry_id + 1
    end
    jstree_json[jstree_json.length-1] = ' '                                           # letztes Komma entfernen
    jstree_json << ']'
    jstree_json
  end


  def create_jstree_js
    dragnet_jstree = "
    function init_oracle_performance_tuning() {
      $('#jstree_div')
        // listen for event
        .on('changed.jstree', function (e, data) {
            show_dragnet_html(data.selected);
        })
        // create the instance
        .jstree({
          'core': {
            'multiple' : false,
            'data': #{render_jstree_json}
          }
        });
    }
    "

    filename = "#{@@target_dir}/dragnet_jstree.js"
    File.open(filename, 'w') do|file|
      file.write(dragnet_jstree)
    end
    system("git add #{filename}")

  rescue Exception => e
    puts("Exception beim Schreiben in #{filename}: #{e.message}")
    raise
  end

  def create_htmls
    def process_entry(global_id_prefix, inner_id, entry)
      if global_id_prefix
        my_id = "#{global_id_prefix}_#{inner_id}"
      else
        my_id = inner_id
      end

      if entry[:entries]                                                        # Menu-Knoten
        entry_id = 0
        entry[:entries].each do |e|
          process_entry(my_id, entry_id, e)
          entry_id = entry_id + 1
        end
      else
        html_content = "<h3>#{entry[:name]}</h3>\n"
        html_content << entry[:desc].gsub("\n", "<br/>\n")
        html_content << "<pre style='background-color: #FFFFCC;'>"
        sql = entry[:sql]
        if entry[:parameter]                                                    # Parameter ? ersetzen
          par = 0
          entry[:parameter].each do |p|
            par = par + 1
            sql.sub!('?', ":P#{par}")
          end
        end

        html_content << sql
        html_content << "</pre>"

        if entry[:parameter]
          par = 0
          entry[:parameter].each do |p|
            par = par + 1
            html_content << "<div>Parameter :P#{par}: #{p[:title]}</div>"

          end
        end

        filename = "#{@@target_dir}/#{my_id}.html"
        File.open(filename, 'w') do|file|
          file.write(html_content)
        end
        system("git add #{filename}")
      end
    end

    entry_id = 0
    dragnet_sql_list.each do |s|
      process_entry(nil, entry_id, s)
      entry_id = entry_id + 1
    end
  end # create_htmls


end # class

puts 'Generierung der HTML-Seiten aus dragnet-Helper'

Generator.new.create_jstree_js

Generator.new.create_htmls

#puts Generator.new.render_jstree_json



