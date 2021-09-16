$("#someDiv").on('scroll', function () {
    var mainHeight = $(this).height();
    var mainTop = $(this).offset().top;
    $('tr', this).each(function () {

        var $this = $(this);
        var rowTop = $this.offset().top - mainTop;
        var rowHeight = $this.height();
        var rowBottom = rowTop + rowHeight;


        // the row is fully off the screen
        if (rowBottom < 0 || rowTop > mainHeight) {
            //$(this).css({
            //    opacity: 0
            //});
            return;
        }

        // the row is fully visible
        if (rowTop >= 0 && rowBottom <= mainHeight) {
            $this.css({
                opacity: 1
            });
            return;
        }

        // fade out, in ratio
        if (rowTop < 0) 
            $this.css({ opacity: rowBottom / rowHeight});
        else if (rowBottom > mainHeight) 
            $this.css({ opacity: (mainHeight - rowTop) / rowHeight});

    });
});