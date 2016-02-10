//Fancybox
  $(document).ready(function() {
    $(".pop-up").fancybox({
        closeBtn: false,
        // wrapCSS:'wrapPopup'    
    });
    $(".fb-close").click(function(){
      $.fancybox.close();
    });        
  }); 

//Slider calculator
  $(function() {
    $('#amount').change(function(){
      var val = $(this).val();
      $('#slider-range-max1').slider('value',val);
    });    
    $( "#slider-range-max1" ).slider({
      range: "max",
      value: 300,
      min: 0,
      max: 700,
      slide: function( event, ui ) {
        $( "#amount1" ).val(ui.value );
      }
    });
    $( "#amount1" ).val($( "#slider-range-max1" ).slider( "value" ) );

    $('#amount2').change(function(){
      var val = $(this).val();
      $('#slider-range-max2').slider('value',val);
    });    
    $( "#slider-range-max2" ).slider({
      range: "max",
      value: 3,
      min: 0,
      max: 10,
      slide: function( event, ui ) {
        $( "#amount2" ).val(ui.value );
      }
    });
    $( "#amount2" ).val($( "#slider-range-max2" ).slider( "value" ) );

  });

 
//Selectmenu

  $(function() {
    $( "#selectmenu1" ).selectmenu();
  });   

//Tabs

   $(document).ready(function() {
    $(function() {
      $( "#tabs1" ).tabs();
      $( "#tabs2" ).tabs();
      $( "#tabs3" ).tabs();
      $( "#tabs4" ).tabs();
    });      
  }); 
  