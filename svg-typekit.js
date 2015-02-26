// Load stylesheet from TypeKit in a document
// Look for img[src=*.svg] with data-svg-typekit attribute.
// Replace it with an <object> (so SVG can be responsive) and inject the stylesheet in this SVG.
// Be sure to use the same font family names in the SVG

(function ($) {
    $.fn.svgTypekit = function () {

        var typeKitHref = getTypeKitStyleSheetUrl();
        var images = this;

        if (images.size() && typeKitHref) {

            //replace img[src=*.svg] with inline object[data=*.svg] for font support
            images.each(function () {

                //img to replace
                var img = $(this);
                var imgSrc = $(this).attr('src');

                //assure there is a .svg src
                if (imgSrc.search('.svg') > 0) {

                    //make object tag with image src
                    var svg = $('<object class="svg" type="image/svg+xml">').attr('data', imgSrc);
                    var svgDomElement = svg[0];

                    //replace img tag with object
                    img.replaceWith(svg);

                    //there is no load event for object so we loop until svg is available
                    var svgObjectLoaded = setInterval(function () {
                        //root element has to be svg
                        if (checkForSvgTag(svgDomElement)) {
                            clearTimeout(svgObjectLoaded);
                            styleSvgObjectWithTypeKit(svgDomElement, typeKitHref);
                        }
                    }, 50);
                }
            });
        }

        /* Internal functions */

        //Grab typekit css from html page
        function getTypeKitStyleSheetUrl() {
            var typeKitHref = $('head').find('link[href*="typekit.net"]');
            if (typeKitHref.size()) {
                return typeKitHref.attr('href');
            }
            return false;
        }

        //Apply stylesheet to svg Object
        function styleSvgObjectWithTypeKit(svgObject, href) {
            var svgDoc = svgObject.contentDocument;
            var svgTag = svgDoc.documentElement;
            svgTag.insertBefore(createSvgStyleSheetLink(href), svgTag.firstChild);
        }

        //Create SVG stylesheet tag
        function createSvgStyleSheetLink(href) {
            var link = $('<link/>')
                .attr("href", href)
                .attr("type", "text/css")
                .attr("rel", "stylesheet");
            return link[0];
        }

        //Check for SVG tag
        function checkForSvgTag(svgObject) {
            return svgObject.contentDocument.documentElement.tagName.toLowerCase() == 'svg' ? true : false;
        }

    };
}(jQuery));


//Initiate the plugin
$(document).ready(function(){
    $('[data-svg-typekit]').svgTypekit();
});





