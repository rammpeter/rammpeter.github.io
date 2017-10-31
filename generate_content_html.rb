#!/usr/bin/ruby

$LOAD_PATH << '../Panorama_Gem/app/helpers'

require 'menu_extension_helper.rb'
require 'menu_helper.rb'

class Generator
  include MenuHelper

  # Fake-Implementierungen für Voraussetzungen dragnet_helper

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
    0
  end
  def sql_select_all(args)
    []
  end
  def sql_select_all(args)
    []
  end

  module MenuHelper::EngineConfig
    class Hugo
      def panorama_sampler_master_password
        true
      end
    end

    def self.config
      Hugo.new
    end
  end

  def generate
    def print_menu_entry(menu_entry, level)
      ioutput = "<tr><td><b>"
      for i in 0..level*20
        ioutput << "&nbsp;"
      end
      ioutput << "#{menu_entry[:caption]}</b>"
      ioutput << "</td><td></td></tr>\n"

      menu_entry[:content].each do |m|
        ioutput << "#{print_menu_entry(m, level + 1) }" if m[:class] == "menu"

        if m[:class] == "item"
          ioutput << "<tr><td><b>"
          for i in 0..(level+1)*20
            ioutput << "&nbsp;"
          end
          ioutput << "#{m[:caption]}</b></td><td>#{m[:hint]}</td></tr>\n"
        end
       end
       ioutput
    end

    menu_entries = "<html><head><title>Panorama: functions by top level menu entries</title></head><body  style='background-color: #ccccff;
                              color: #333;
                              font-family: sans-serif;
                              margin: 0;
                              padding:  5px;
                        '>\n"
    menu_entries << "<h1  style='margin: 10px; padding: 15px; color:white; background-color: blue; '>Panorama: function overview by top level menu entries</h1>\n"
    menu_entries << "Generated from source code: #{Time.now}<br/><br/><br/>\n"
    menu_entries << "<table>\n"
    menu_content.each do |m|
      menu_entries << print_menu_entry(m, 0)
    end
    menu_entries << "</table>\n"
    menu_entries << "</body></html>"

    filename = "panorama_content.html"
    File.open(filename, 'w') do|file|
      file.write(menu_entries)
    end
    system("git add #{filename}")

  rescue Exception => e
    puts("Exception beim Schreiben in #{filename}: #{e.message}")
    raise
  end
end # class

puts 'Generierung der HTML-Seiten aus MenuHelper'

Generator.new.generate




