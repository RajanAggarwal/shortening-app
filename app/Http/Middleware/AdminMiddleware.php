<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth; // using controller class
use Illuminate\Support\Facades\Redirect; // using controller class
class AdminMiddleware
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
         if(Auth::check() && Auth::user()->role === 'admin') 
		{
			return $next($request);
		}
		else
		{
			  return Redirect::to('admin')->withErrors('You are not logged in');
		}
    }
}
