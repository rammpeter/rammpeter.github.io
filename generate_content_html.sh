# Generate content page

if [ -d Panorama_Gem ]; then
  (
    # Refresh existing git repository
    cd Panorama_Gem
    git pull
  )
else
  git clone https://github.com/rammpeter/Panorama_Gem
fi

./generate_content_html.rb



