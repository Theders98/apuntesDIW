$(document).ready(function () {
    $(".button--important").draggable({ revert: true })
    $(".bubble").droppable({
        revert: true,
        drop: function (event, ui) {
            $(".bubble__text").html(ui.draggable.parents(".panel").children(".panel__header").html())

            if ($(".bubble__img").hasClass("bubble__img--animation")) {
                $(".bubble__img").removeClass("bubble__img--animation")
                setTimeout(function () {
                    $(".bubble__img").addClass("bubble__img--animation")
                }, 100);

            } else {

                $(".bubble__img").addClass("bubble__img--animation")
            }

        }
    })
})