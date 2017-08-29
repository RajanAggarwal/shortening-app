
<!-- Javascript -->
<script src="{{ URL::asset('js/localtimezone.js') }}"></script>
<script src="{{ URL::asset('js/datepicker.js') }}"></script>
<script src="{{ URL::asset('js/combodate.js') }}"></script>
<script src="{{ URL::asset('js/validationmin.js') }}"></script>
<script src="https://cdn.jsdelivr.net/jquery.validation/1.15.0/additional-methods.min.js"></script>
<script src="{{ URL::asset('bootstrap/js/bootstrap.min.js') }}"></script>
<script src="{{ URL::asset('js/equalheight.js') }}"></script>
<script src="{{ URL::asset('js/toaster.js') }}"></script>
<script src="{{ URL::asset('js/scripts.js') }}"></script>
<script src="{{ URL::asset('js/jquery.cropit.js') }}"></script>
<script src="{{ URL::asset('js/datatable.min.js') }}"></script>
 <script src="{{ URL::asset('js/jquery-ui.js') }}"></script>
<script src="{{ URL::asset('js/dragdrop.js') }}"></script>
<!--<script src="{{ URL::asset('js/jquery.emojipicker.js') }}"></script>
<script src="{{ URL::asset('js/jquery.emojis.js') }}"></script>-->
<script src="{{ URL::asset('js/emojionearea.min.js') }}"></script>
<script src="{{ URL::asset('js/select-field-month.js') }}"></script>
<script src="{{ URL::asset('js/cookie.js') }}"></script>

<!--[if lt IE 10]>
     <script src="{{ URL::asset('js/placeholder.js') }}"></script>
<![endif]-->
 @if(Auth::check() && Auth::user()->role != 'admin') 
 <script src="{{ URL::asset('js/chat.js') }}"></script>
 @endif
 <script type="text/javascript">
	 var locale_get_default = "<?php echo Config::get('languages')[App::getLocale()]; ?>";
  var loc = "http://"+window.location.hostname+window.location.pathname;
   jQuery('.top-nav li').find('a').each(function() {
     jQuery(this).toggleClass('active', jQuery(this).attr('href') == loc);
  });
     
 
  
</script>
<style tylie="text/css">
a.disabled {
    text-decoration: none;
    color: black;
    cursor: default;
}
#mytwins-paginate,#mytwins-paginate-pagination{
    dislilay: none;
}
</style>

<script src="{{ URL::asset('js/jquery.mCustomScrollbar.concat.min.js') }}"></script>
<script src="{{ URL::asset('js/jquery.paginate.min.js') }}"></script>

<script src="{{ URL::asset('js/main.js') }}"></script>

<script>
    $(window).scroll(function() {
       $("body").removeClass("viewport-bottom");
       if($(window).scrollTop() + $(window).height() > ($(document).height() - 100) ) {
           //you are at bottom
           $("body").addClass("viewport-bottom");
       }
    });

    //session expire ajax redirect
    $(document).ajaxError(function (event, jqxhr, settings, exception) {
        if (jqxhr.status === 401) {
			toastr.error('Session expired please login again!');
			setTimeout(function(){
			   window.location.href = '<?php echo url('/')?>/signin';
			},500);
               
        }
    });
</script>
