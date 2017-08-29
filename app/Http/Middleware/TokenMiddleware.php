<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth; // using controller class
use Illuminate\Support\Facades\Session; // using controller class
use Illuminate\Support\Facades\Redirect;
//use App\Http\Middleware\Request;
use Request;
use DB;

class TokenMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
		//die('here');
		$token = Request::header('token');
		$date = date_create();
		$current_timestamp = date_timestamp_get($date);
		/*$myfile = fopen('response.txt', "w") or die("Unable to open file!");
		$txt = Request::header('token');
		fwrite($myfile, $txt);
		fclose($myfile);*/
		
		
		
		
		/*$date = date_create();
		$timestamp =  date_timestamp_get($date) - 1200;
		$current_timestamp = date_timestamp_get($date); */
		/*$result = DB::table('session')->where([['user_id','=', Auth::id()],['token','=',$token]])->orderBy('id', 'desc')->first();
			date_timestamp_set($date,$result->last_modified); //db date
			echo "db date = ".date_format($date, 'U = Y-m-d H:i:s') . "\n";
			date_timestamp_set($date, $timestamp); //our  date
			echo "date - 1200  ".date_format($date, 'U = Y-m-d H:i:s') . "\n";
			die;
		*/
		
		$result = DB::table('session')->where([['token','=',$token]])->orderBy('id', 'desc')->first();
	
		if(count($result) > 0){  // if token is present in the database update its time and continue
			Auth::loginUsingId($result->user_id);
			$update=array('status'=>'0','last_modified'=>$current_timestamp);
			DB::table('session')->where('token', '=', $token)->update($update);			
			return $response = $next($request);
		}
		else{
			$response['message'] = "Authentication Failed/Invalid Token";
			$response['success'] = 0;
			return response($response);
		}	
    }
}
