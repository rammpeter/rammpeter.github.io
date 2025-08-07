#!/usr/bin/ruby

$LOAD_PATH << 'panorama/app/helpers'

require 'menu_extension_helper.rb'
require 'menu_helper.rb'

class Generator
  include MenuHelper

  # Fake-Implementierungen für Voraussetzungen menu_helper

  def t(a, args)
    args[:default]
  end

  def get_db_version 
    '11.2'
  end

  def sql_select_first_row(p1, p2=nil)
    nil
  end

  def sql_select_one(args)
    1
  end

  def sql_select_all(args)
    []
  end

  def sql_select_all(args)
    []
  end

  def admin_jwt_valid?
    true
  end

  def get_cached_panorama_object_sizes_exists
    true
  end

  # create fake content of module
  module MenuHelper::PanoramaSamplerStructureCheck
    def self.object_sizes_exists?
      true
    end

    def self.panorama_table_exists?(table_name)
      true
    end
  end

  module MenuHelper::PanoramaConnection
    def self.rac?
      true
    end
  end

  module MenuHelper::EngineConfig
    class Hugo
      def panorama_master_password
        true
      end
    end

    def self.config
      Hugo.new
    end
  end

  module MenuHelper::Panorama
    module Application
      # return an anonymous class object with method panorama_master_password
      def self.config
        anon_class = Class.new do
          def panorama_master_password
            true
          end
        end
        anon_class.new
      end
    end
  end

  def generate
    def print_menu_entry(menu_entry, level)
      ioutput = "<tr><td  style='white-space: nowrap;'><b>"
      for i in 0..level*20
        ioutput << "&nbsp;"
      end
      ioutput << "&gt;&nbsp;#{menu_entry[:caption]}</b>"
      ioutput << "</td><td></td></tr>\n"

      menu_entry[:content].each do |m|
        ioutput << "#{print_menu_entry(m, level + 1) }" if m[:class] == "menu"

        if m[:class] == "item"
          ioutput << "<tr><td style='white-space: nowrap;'>"
          for i in 0..(level+1)*20
            ioutput << "&nbsp;"
          end
          ioutput << "#{m[:caption]}</td><td>#{m[:hint]}</td></tr>\n"
        end
       end
       ioutput
    end

    menu_entries = "<html><head><title>Panorama: functions by top level menu entries</title></head><body  style='background-color: #ccccff;
                              color: #333;
                              font-family: sans-serif;
                              margin: 10px;
                              padding:  5px;
                        '>\n"
    menu_entries << "<h1  style='padding: 15px; color:white; background-color: blue; '>Panorama: function overview by top level menu entries</h1>\n"
    menu_entries << "<span style='font-size: smaller'>Generated from source code: #{Time.now}</span><br/><br/><br/>\n"
    menu_entries << "<table style='border-collapse: collapse; background-color: lightgray' border='1'>\n"
    menu_entries << "<tr style='background-color: gray'><th>Menu function</th><th>Description</th></tr>"
    menu_content.each do |m|
      menu_entries << print_menu_entry(m, 0)
    end
    menu_entries << "</table>\n"
    menu_entries << "</body></html>"

    filename = "panorama_content_generated.html"
    File.open(filename, 'w') do|file|
      file.write(menu_entries)
    end
    # not more needed for GitLpb pipeline
    # system("git add #{filename}")

  rescue Exception => e
    puts("Exception beim Schreiben in #{filename}: #{e.message}")
    raise
  end
end # class

puts 'Generierung der HTML-Seiten aus MenuHelper'

Generator.new.generate




