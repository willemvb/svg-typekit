# Svg-typekit
Jquery plugin to use Adobe Typekit web fonts on a HTML page in an SVG image on this same page.



## Instructions
1. Use Typekit fonts on your webpage
2. Include Jquery and svg-typekit.js on this page
3. Use a data-attribute to apply the Typekit fonts to an SVG.
```html
<img src="file.svg" data-svg-typekit>
```
4. Image-tag will be replaced by an <object> that can be scaled easily
5. Typekit stylesheet will be injected in this object
6. Use the same font family names, weights from your CSS in the SVG source.
