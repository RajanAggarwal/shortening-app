<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Http\Models\User;
use App\Http\Models\Twins;
use App\Http\Models\Profile;
use Image;
use View;
use Config;
use Illuminate\Support\Facades\DB;
use DateTime;
use URL;
class SendTwinmail extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sendmail:twinmail';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send twin notification'; 

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $users=User::where([['role', '=', null]])->get();
		if($users){
			$finalArray=array();
			$countArray=array();
			foreach($users as $user){
				$dob=$user->profile['dob'];
				$userId=$user->id;
				$userEmail=$user->email;
				$sameprofiles=Profile::where([['dob','=',$dob],['user_id','<>',$userId]])->get();
				$friendCount=0;
				foreach ($sameprofiles as $profile) {
					$twins=\DB::select(\DB::raw("SELECT t.* FROM twins t WHERE t.user_id=$userId and t.twin_id=$profile->user_id UNION SELECT t.* FROM twins t WHERE t.twin_id=$userId and t.user_id=$profile->user_id"));
					
					if(count($twins)==0){
						$finalArray[$userId][]=$profile->user_id;
						//$countArray[$userId]=count($finalArray[$userId]);
						$friendCount++;
					}
				}
				
				if($friendCount>0){
				
					//$to = 'dkhati.impinge@gmail.com';
					$to = $userEmail;
					$message = '
					
									
					<html xmlns="http://www.w3.org/1999/xhtml">
								<head>
								<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
								<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet"> 
								<title>SameDayTwin Notification</title>
								</head>

								<body>
								<div style="width: 100%; height: 100%; text-align: center; padding: 100px 0; background-image: url("http://samedaytwin.com/public/images/emailtemplatebanner.png"); background-size: cover;">
									<div style="width: 600px; margin: 0 auto; z-index: 999; background: #fff; border-radius: 4px; overflow: hidden;">
										<div style="text-align: center; padding: 20px 0 15px; background: #262048;">
											<a href="http://samedaytwin.com/"><img src="http://samedaytwin.com/public/images/logo.png" alt="Logo" width="250" height="" style=""></a>
										</div>
										<div style="padding: 40px; font-family: \'Open Sans\', sans-serif; color: #333; font-size: 16px;">
											This is to notify you that there are '.$friendCount.' new same day users on the site now.
											You can visit the site and can connect to them.
										</div>
										<div style="padding: 10px 0;font-size: small; background: #262048; color: #8076bb; text-align: center; font-family: \'Open Sans\', sans-serif;">Copyrights @ Same Day Twin 2017</div>
									</div>
								</div>
								</body>
								</html>';
					
					$subject = "Checkout more sameday twins!!";
				 	$header = "From:<info@samedaytwin.com> \r\n";
					$header .= "MIME-Version: 1.0\r\n";
					$header .= "Content-type: text/html\r\n";
				 
					$retval = mail ($to,$subject,$message,$header);
				 
					/*  if( $retval == true ) {
						echo 'mail sent';				
					}else {
						echo 'mail not sent';	
					}   */
				}
			}	
		}
    }
	public function fire()
    {
        
    }
}
