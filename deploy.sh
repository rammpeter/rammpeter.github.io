# Build and deploy artefacts

echo "AsciiDoc -> html"
asciidoctor Oracle_performance_analysis_with_Panorama.adoc

echo "Generate panorama_content.html"
./generate_content_html.rb

echo "Generate dragnet SQLs"
./generate_dragnet_html.rb

git status
