<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet"> 
<title>Registration successfully</title>
</head>

<body>
<div style="width: 100%; height: 100%; text-align: center; padding: 100px 0; background-image: url('{{ URL::asset('images/emailtemplatebanner.png') }}'); background-size: cover;">
	<div style="width: 600px; margin: 0 auto; z-index: 999; background: #fff; border-radius: 4px; overflow: hidden;">
		<div style="text-align: center; padding: 20px 0 15px; background: #262048;">
			<a href="{{URL::to('')}}"><img src="{{ URL::asset('images/logo.png') }}" alt="Logo" width="250" height="" style=""></a>
		</div>
		<div style="padding: 40px; font-family: 'Open Sans', sans-serif; color: #333"; font-size: 16px;">
			<h1 style="font-size: 30px; font-weight: 100; color: #0dbd0d;">Your account is now active!</h1>
			<p style="color: #666;">Welcome to SameDayTwin.com and thank you for registering. We are searching the World for your Same Day Twin and we will contact you when we find them.
			<br />Learn how to use the site by clicking on the link below.<br />
			<a href="https://www.youtube.com/watch?v=d2J_lYf9qY4" style="color: #624ea4; text-decoration: none;">Click here to Learn</a></p><br />
			<p style="color: #666;">Your information has been saved to our database.<br />Please go back to the <a href="{{URL::to('')}}" style="color: #624ea4; text-decoration: none;">Homepage</a>. </p>
		</div>
		<div style="padding: 10px 0;font-size: small; background: #262048; color: #8076bb; text-align: center; font-family: 'Open Sans', sans-serif;">Copyrights @ Same Day Twin 2017</div>
	</div>
</div>

<!-- 
<div class="es-wrapper">
	<div class="header">
		<div class="container"><a href="{{URL::to('')}}"><img src="{{ URL::asset('images/logo.png') }}" alt="Logo" width="298" height="78"></a></div>
	</div>
	<div class="content">
		<div class="container">
			<h1>Your account is now active!</h1>
			<p>Welcome to SameDayTwin.com and thank you for registering. We are searching the World for your Same Day Twin and we will contact you when we find them.
			<br />Learn how to use the site by clicking on the link below.<br />
			<a href="https://www.youtube.com/watch?v=d2J_lYf9qY4">Click here to Learn</a></p><br />
			<p>Your information has been saved to our database.<br />Please go back to the <a href="{{URL::to('')}}">Homepage</a>. </p>
		</div>
	</div>
	<div class="footer">Copyrights @ Same Day Twin 2017</div>
</div>
-->	
</body>
</html>
	
