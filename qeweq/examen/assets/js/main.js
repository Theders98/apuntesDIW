$(document).ready(function() {
    $("#contract-fiber").draggable({ revert: true })
    $("#contract-mobile").draggable({ revert: true })
    $('.bubble').droppable( {
	    drop: function (event, ui) {
            let button = ui.draggable
            let title = button.parents(".panel").children(".panel__title").text()

            $(".bubble__text").html(title)
            let bubbleImage = $(".bubble__image")
            if(bubbleImage.hasClass("bubble__image--animation")) { 
                bubbleImage.removeClass("bubble__image--animation")
                setTimeout(function(){ 
                    bubbleImage.addClass("bubble__image--animation") 
                }, 100);
            } else { 
                bubbleImage.addClass("bubble__image--animation") 
            }
	    }
	});
});