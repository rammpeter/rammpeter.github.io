# Build and deploy artefacts

echo "AsciiDoc -> html"
./generate_adoc_html.sh

echo "Generate panorama_content.html"
./generate_content_html.rb

echo "Generate dragnet SQLs"
./generate_dragnet_html.rb

git status
