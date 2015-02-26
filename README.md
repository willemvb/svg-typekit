# Svg-typekit
Quick Jquery plugin to use Adobe Typekit web fonts on a HTML page in an SVG image on this same page.


## Instructions
1. Use Adobe Typekit fonts on your webpage
2. Include Jquery and svg-typekit.js on this page
3. Use a data-attribute to apply the Typekit fonts to an SVG: ```<img src="file.svg" data-svg-typekit>```
4. Image-tag will be replaced by an ```<object>``` that can be scaled easily
5. Typekit stylesheet will be injected in this object
6. Use the same font family names (eg. Effra), weights in the SVG source as you would in your CSS.
   ```...<text font-family="effra, sans-serif" font-weight="300" >Text</text>...```
