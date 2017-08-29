<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;
use Illuminate\Console\Scheduling\Schedule;
use App\Http\Models\Profile;
use DB;
class Kernel extends HttpKernel
{
    /**
     * The application's global HTTP middleware stack.
     *
     * These middleware are run during every request to your application.
     *
     * @var array
     */
    protected $middleware = [
        \Illuminate\Foundation\Http\Middleware\CheckForMaintenanceMode::class,
    ];

    /**
     * The application's route middleware groups.
     *
     * @var array
     */
    protected $middlewareGroups = [
        'web' => [
            \App\Http\Middleware\EncryptCookies::class,
            \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
            \Illuminate\Session\Middleware\StartSession::class,
            \Illuminate\View\Middleware\ShareErrorsFromSession::class,
             \App\Http\Middleware\Language::class,
            \App\Http\Middleware\VerifyCsrfToken::class,
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ],

        'api' => [
            'throttle:60,1',
            'bindings',
        ],
    ];

    /**
     * The application's route middleware.
     *
     * These middleware may be assigned to groups or used individually.
     *
     * @var array
     */
    protected $routeMiddleware = [
        'auth' => \Illuminate\Auth\Middleware\Authenticate::class,
        'auth.basic' => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class,
        'bindings' => \Illuminate\Routing\Middleware\SubstituteBindings::class,
        'can' => \Illuminate\Auth\Middleware\Authorize::class,
        'guest' => \App\Http\Middleware\RedirectIfAuthenticated::class,
        'throttle' => \Illuminate\Routing\Middleware\ThrottleRequests::class,
         'admin' => 'App\Http\Middleware\AdminMiddleware',
         'frontend' => 'App\Http\Middleware\FrontendMiddleware',
         'token' => 'App\Http\Middleware\TokenMiddleware',
         'revalidate' => \App\Http\Middleware\RevalidateBackHistory::class,
         'timeout' => 'App\Http\Middleware\SessionTimeout',
    ];
    
    protected function schedule(Schedule $schedule)
    {
        /*$schedule->call(function () {
            $user = new Profile;
			$user->firstname = 'firstname';
			$user->lastname = 'lastname';
			$user->dob = 06/02/1991;
			$user->profile_pic = 'profile.jpg';
			$user->user_id = 300;
			$user->save();
        })->everyMinute(); 
        $schedule->call(function(){
						$to = "rohitchadha777@gmail.com";
						$subject = "This is Contact Form Enquiry";
					 
						$message = "<tr><td><b>Name: </b></td><td>Rohit</td></tr>";
						$message .= "<tr><td colspan='2'><b>Message: </b>my message</td></tr>";
						$header = "From:Contact Form Enquiry <'rohitchadha44@gmail.com'> \r\n";
						$header .= "MIME-Version: 1.0\r\n";
						$header .= "Content-type: text/html\r\n";
					 
						$retval = mail ($to,$subject,$message,$header);
					 
						if( $retval == true ) {
								Session::flash('Success','Email Send Successfully');
								//return Redirect::to('/contact');
								//return response('success','Email Sent Successfully');
								return true;
						}
						
		})->everyMinute();*/
		$schedule->command('Sendmail')->everyMinute();
        
        
        
    }
    
	

    
    
}
