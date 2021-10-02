jQuery(document).ready(function () {
     
     $(".phoneNumber").mask("+380 (99) 999-99-99"); 
    
   
    jQuery('.btn').click( function() {
    	var form = jQuery(this).closest('form');
    	
    	if ( form.valid() ) {
    		var actUrl = form.attr('action');

    		jQuery.ajax({
    			url: actUrl,
    			type: 'post',
    			dataType: 'html',
    			data: form.serialize(),
    			success: function(data) {
    				form.html(data);
    				form.css('opacity','1');
                    alert("Form send");
    			},
    			error:	 function() {
    			     alert("Server error");
    			}
    		});
    	}
    });


});