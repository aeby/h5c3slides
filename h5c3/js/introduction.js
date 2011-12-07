$(function() {
	// Deck initialization
	$.deck('.slide');
	
	SyntaxHighlighter.all();
	
	$(window).bind('message', function(e){
		$.deck('go', e.originalEvent.data);
	});
	
	$(window).bind('keypress', function(e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		var loc = document.location.href;
        if(code === 112){ // p
        	var presentation = window.open(loc);
        	presentation.focus();
        	$(document).bind('deck.change', function(event, from, to) {
        		presentation.postMessage(to - 1, loc);        	
        	});        
        }
	});
});
