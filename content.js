// Reveal elements with .hide class
var $elem = $(".hide");
console.log("Found " + $elem.length + " elements");
$elem.css({"background-color":"#ccff66"}).removeClass("hide")

// Unhide hidden inputs
var $hiddenInputs = $("[type=hidden]");
$hiddenInputs.attr("type","textbox").css({"background-color":"#cc9900"});

// Unhide all hidden items
// In some browsers :hidden includes head, title, script, etc...
// We also want to keep the error labels hidden as well
var hiddenElements = $( "body" ).find( ":hidden" ).not( "script" ).not(".error");
hiddenElements.css({"background-color":"yellow"}).show( 3000 );


// Disable form validations by injecting the following code in the page
var overrideValidationFnCode = 'Foundation.libs.abide.validate = function(){return true;}';
var script = document.createElement('script');
var code = document.createTextNode('(function() {' + overrideValidationFnCode + '})();');
script.appendChild(code);
(document.body || document.head).appendChild(script);