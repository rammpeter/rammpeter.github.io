# Build and deploy artifacts


echo "Generate panorama_content.html"
./generate_content_html.sh

echo "Generate dragnet SQLs"
./generate_dragnet_html.rb

git status
