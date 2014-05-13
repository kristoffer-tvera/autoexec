$(document).ready(function(){

    $('#downloadButton').click(function(e){

        $.generateFile({
            filename	: 'autoexec.cfg',
            content		: $('textarea').val(),
            script		: 'download.php'
        });

        e.preventDefault();
    });

    $('#updateButton').click(function(e){

       document.cfg.output.value = 'bababooey';

        e.preventDefault();
    });
    
    $('#testButton').click(function(e){

    	var value = $('#rate').val();
    	alert(value);

    	
    	
         e.preventDefault();
     });
     

});