//Fancybox
  $(document).ready(function() {
    $(".pop-up").fancybox({
        closeBtn: false
    });  
    $(".fb-close").click(function(){
      $.fancybox.close();
    });        
  }); 

//Slider calculator
  $(function() {
    $('#amount1').change(function(){
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

    $('#amount3').change(function(){
      var val = $(this).val();
      $('#slider-range-max3').slider('value',val);
    });    
    $( "#slider-range-max3" ).slider({
      range: "max",
      value: 300,
      min: 0,
      max: 700,
      slide: function( event, ui ) {
        $( "#amount3" ).val(ui.value );
      }
    });
    $( "#amount3" ).val($( "#slider-range-max3" ).slider( "value" ) );

    $('#amount4').change(function(){
      var val = $(this).val();
      $('#slider-range-max4').slider('value',val);
    });    
    $( "#slider-range-max4" ).slider({
      range: "max",
      value: 3,
      min: 0,
      max: 10,
      slide: function( event, ui ) {
        $( "#amount4" ).val(ui.value );
      }
    });
    $( "#amount4" ).val($( "#slider-range-max4" ).slider( "value" ) );
  });

 
//Selectmenu

  $(function() {
    $( "#selectmenu1" ).selectmenu();
    $( "#selectmenu2" ).selectmenu();
    $( "#selectmenu3" ).selectmenu();
    $( "#selectmenu4" ).selectmenu();
    $( "#selectmenu5" ).selectmenu();
    $( "#selectmenu6" ).selectmenu();
    $( "#selectmenu7" ).selectmenu();
    $( "#selectmenu8" ).selectmenu();
    $( "#selectmenu9" ).selectmenu();
    $( "#selectmenu10" ).selectmenu();
  });   

//Tabs

   $(document).ready(function() {
    $(function() {
      $( "#tabs1" ).tabs();
      $( "#tabs2" ).tabs();
      $( "#tabs3" ).tabs();
      $( "#tabs4" ).tabs();
      $( "#tabs5" ).tabs();
      $( "#tabs6" ).tabs();
      $( "#tabs7" ).tabs();
      $( "#tabs8" ).tabs();
      $( "#tabs9" ).tabs();
      $( "#tabs10" ).tabs();
      $( "#tabs11" ).tabs({
        active:1
      });
      $( "#tabs12" ).tabs({
        active:2
      });
      $( "#tabs13" ).tabs();            
    });      
  }); 
  
//Datapicker

  $(function() {
      $.datepicker.setDefaults( $.datepicker.regional[ "ru" ] );
      $( "#datepicker" ).datepicker({
        dateFormat: 'dd/mm/yy'
      });
      $( "#datepicker1" ).datepicker({
        dateFormat: 'dd/mm/yy'
      });
      $( "#datepicker2" ).datepicker({
        dateFormat: 'dd/mm/yy'
      });
      $( "#datepicker3" ).datepicker({
        dateFormat: 'dd/mm/yy'
      });
      $( "#datepicker4" ).datepicker({
        dateFormat: 'dd/mm/yy'
      });
      $( "#datepicker5" ).datepicker({
        dateFormat: 'dd/mm/yy'
      });
      $( "#datepicker6" ).datepicker({
        dateFormat: 'dd/mm/yy'
      });
      $( "#datepicker7" ).datepicker({
        dateFormat: 'dd/mm/yy'
      });                     
  });

//Change forms
   $(document).ready(function() {
      $('.reg_pass .reg').on('click',function(){
        event.preventDefault();
        $('.forma').css('display','none');
        $('#registration').css('display','block');   
      });
      $('.reg_pass .parol').on('click',function(){
        event.preventDefault();
        $('.forma').css('display','none');
        $('#password').css('display','block');   
      });     
      $('.acces a').on('click',function(){
        event.preventDefault();
        $('.forma').css('display','none');
        $('#acces').css('display','block');   
      });      
  }); 
