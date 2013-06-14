//Most Simple Addon of year award goes to!
var contextMenu = require("context-menu");
var clipboard = require("clipboard");

exports.main = function() { 
  var copyPlainText = contextMenu.Item({ 
    label: "Copy - Plain Text", 
    // Show this item when a selection exists. 
    context: contextMenu.SelectionContext(), 
    // When this item is clicked, post a message to the item with the selected text
    contentScript: 'self.on("click", function () {' +
                   '  var text = window.getSelection().toString();' +
                   '  self.postMessage(text);' +
                   '});', 
    //set the clipboard to what is in the message
    onMessage: function(text) { 
        clipboard.set(text);  
    }
  }); 
}  
//the end!