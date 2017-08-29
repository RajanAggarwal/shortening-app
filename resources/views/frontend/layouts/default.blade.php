<!Doctype html>
<html>
<head>
<script src="https://apis.google.com/js/platform.js" async defer></script>
@include('frontend.includes.head') 



</head>
<body>
<!-- FACEBOOK SHARE -->
<div id="fb-root"></div> 
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.8";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
</script>	
<!-- FACEBOOK SHARE END -->	
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-90237406-1', 'auto');
  ga('send', 'pageview');

</script>
	
	@include('frontend.includes.header')
		@yield('content')
	@include('frontend.includes.footer')
		
	
</body>
</html>
