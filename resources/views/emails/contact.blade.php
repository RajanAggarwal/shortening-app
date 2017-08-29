<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet"> 
<title>Registration successfully</title>
<style>
html {
  height: 100%;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  position: relative;
  margin: 0;
  padding-bottom: 6rem;
  min-height: 100%;
  font-family: 'Open Sans', sans-serif;
}

.es-wrapper .header{
	padding: 20px 0;
	background: #7994a4;
}

.es-wrapper .content{
	padding: 80px 0;
}

.es-wrapper .content h1{
	font-weight: 300;
}

.es-wrapper .content a{
	color: #898989;
	text-decoration: none;
	padding-bottom: 2px;
	border-bottom: thin dotted;
}

.es-wrapper .container{
	max-width: 980px;
	margin: auto;
	padding: 0 20px;
}

.es-wrapper .footer {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background: #7994a4;
  text-align: center;
  color: #fff;
  font-size: small;
}
</style>
</head>

<body>

<div class="es-wrapper">
	<div class="header">
		<div class="container"><a href="{{URL::to('')}}"><img src="{{ URL::asset('images/logo.png') }}" alt="Logo" width="298" height="78"></a></div>
	</div>
	<div class="content">
		<div class="container">
			<h1>Your account is now active!</h1>
			<p>Thank you for registering. Your information has been saved to our database.<br />Please go back to the <a href="{{URL::to('')}}">Homepage</a>. </p>
		</div>
	</div>
	<div class="footer">Copyrights @ Same Day Twin 2017</div>
</div>


	
</body>
</html>
	
