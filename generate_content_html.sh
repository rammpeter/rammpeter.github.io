# Generate content page

if [ -d panorama ]; then
  (
    # Refresh existing git repository
    cd panorama
    git pull
  )
else
  git clone https://github.com/rammpeter/panorama
fi

ruby generate_content_html.rb



