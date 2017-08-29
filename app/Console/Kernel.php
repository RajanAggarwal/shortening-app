<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;


class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
		'App\Console\Commands\CustomCommand',
		'App\Console\Commands\SendTwinmail',
	];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    /*protected function schedule(Schedule $schedule)
    {
        // $schedule->command('inspire')
        //          ->hourly();
        
        $schedule->command('Sendmail')->everyMinute();
    }*/
	
	protected function schedule(Schedule $schedule)
    {
          //$schedule->command('custom:command')->everyMinute();
	
       /*  $schedule->call(function () {
            DB::table('test_users')->delete();
        })->everyMinute(); */
		 //$schedule->call('App\Http\Controllers\Frontend\UserprofileController@sendSDTEmailNotification')->everyMinute();
		//$schedule->command('sendmail:twinmail')->everyFiveMinutes();
		//$schedule->command('sendmail:twinmail')->everyMinute();
		$schedule->command('sendmail:twinmail')->weekly();
		
    }
	
    /**
     * Register the Closure based commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        require base_path('routes/console.php');
    }
}
