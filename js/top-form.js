  $(document).ready(function() {
	
	 $(".top-form").validate({
     rules: {
    phone: { required: true},
    password: { required: true},  
     },
     messages: {

     },
     errorPlacement: function(error, element) {

     },
     submitHandler: function(form) {
      var forma =$(form);
          
          $.ajax({
            type: 'POST',
            url: 'sendmessage.php',
            data: forma.serialize(),
            success: function(data) {$('.top-form ').find('input').val('');
              if(data == "true") {
                $.fancybox.close()
                $.fancybox({
                      href: '#senks'
                  });
           setTimeout("$.fancybox.close()", 300000);
              }
            }
          });
     },
     success: function() {
       
     },
     highlight: function(element, errorClass) {
      $(element).addClass('error');
     },
     unhighlight: function(element, errorClass, validClass) {
      $(element).removeClass('error');
     }
    });

  });