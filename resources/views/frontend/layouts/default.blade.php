<!Doctype html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Your Same Day Twin, A Person who was born on the same day and same year as you.
 They Are Exactly Your Age. See what they look like, where they are, and what they're doing.">

<meta property="fb:app_id" 		  content="270076296753696" />
<meta Property='og:type'          content="article" />
<meta property="og:url"           content="http://samedaytwin.com" />
<meta property="og:title"         content="SameDayTwin" />
<meta property="og:description"   content="Your Same Day Twin, A Person who was born on the same day and same year as you. They Are Exactly Your Age. See what they look like, where they are, and what they're doing." />
<meta property="og:image"     content="http://samedaytwin.com/images/logo-for-sharing.png" />
<meta property="og:image:type" content="image/png" />
<meta property="og:image:url" content="http://samedaytwin.com/images/logo-for-sharing.png">

<!-- Schema.org markup for Google+ -->
<link rel="image_src" href="http://samedaytwin.com/images/logo-for-sharing.png"/>
<meta itemscope itemtype="http://schema.org/Article"/>
<meta itemprop="headline" content="http://SameDayTwin.com" />
<meta itemprop="description" content="Your Same Day Twin, A Person who was born on the same day and same year as you.
 They Are Exactly Your Age. See what they look like, where they are, and what they're doing." />
<meta itemprop="image" content="http://samedaytwin.com/images/logo-for-sharing.png">

<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="SameDayTwin" />
<meta name="twitter:description" content="Your Same Day Twin, A Person who was born on the same day and same year as you. They Are Exactly Your Age. See what they look like, where they are, and what they're doing." />
<meta name="twitter:image" content="http://samedaytwin.com/images/logo-for-sharing.png" />



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
