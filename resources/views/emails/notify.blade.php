<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet"> 
<title>SameDayTwin Notification</title>
</head>

<body>
<div style="width: 100%; height: 100%; text-align: center; padding: 100px 0; background-image: url('{{ URL::asset('images/emailtemplatebanner.png') }}'); background-size: cover;">
	<div style="width: 600px; margin: 0 auto; z-index: 999; background: #fff; border-radius: 4px; overflow: hidden;">
		<div style="text-align: center; padding: 20px 0 15px; background: #262048;">
			<a href="{{URL::to('')}}"><img src="{{ URL::asset('images/logo.png') }}" alt="Logo" width="250" height="" style=""></a>
		</div>
		<div style="padding: 40px; font-family: 'Open Sans', sans-serif; color: #333; font-size: 16px;">
			This is to notify you that there are {{$friendCount}} number of new same day users on the site now.
			You can visit the site and can connect to them.
		</div>
		<div style="padding: 10px 0;font-size: small; background: #262048; color: #8076bb; text-align: center; font-family: 'Open Sans', sans-serif;">Copyrights @ Same Day Twin 2017</div>
	</div>
</div>
</body>
</html>
	
