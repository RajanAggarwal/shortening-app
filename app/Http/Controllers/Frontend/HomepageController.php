<?php
namespace App\Http\Controllers\Frontend; //admin add

use App\Http\Controllers\Controller; // using controller class
use Illuminate\Support\Facades\Input; // using controller class
use Illuminate\Support\Facades\Validator; // using controller class
use Illuminate\Support\Facades\Auth; // using controller class
use Illuminate\Support\Facades\Redirect; // using controller class
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Hash;
use App\Http\Models\User;
use App\Http\Models\Link;
use View;
use DateTime;
use DB;
use URL;
use Illuminate\Http\Request;
class HomepageController extends Controller {
	
	public function index() {
		return Redirect::to('signin');
	}

	//used for signup form
	public function signup() {
		if(Auth::check() && Auth::user()->role != 'admin'){
			return Redirect::to('/dashboard');
		}else{
			return view('frontend.signup');
		}
	}

	//used for signin form
	public function signin() {
		if(isset($_SESSION)){
			session_destroy();
	     }	
		 if(Auth::check() && Auth::user()->role != 'admin')
		 {
			return Redirect::to('/dashboard');
		}else{
			return view('frontend.signin');
		}
	}

	//used for post data of sign in form
	public function dosignin()
	{
		$data = Input::all();
		// Applying validation rules.
		$rules = array(
			'email' => 'required|email',
			'password' => 'required|min:6',
		);
		$validator = Validator::make($data, $rules);
		if ($validator->fails()){
		  	// If validation falis redirect back to login.
		  	return Redirect::to('/signin')->withInput(Input::except('password'))->withErrors($validator);
		}
		else {
			$remember_me = Input::get('remember_me') ? true : false; 
		  	$userdata = array(
				'email' => Input::get('email'),
				'password' => Input::get('password'),
				'role'=>NULL,
			);
			   
			// doing login.
			if (Auth::validate($userdata)) {
				if (Auth::attempt($userdata, $remember_me)) {
					Session::flash('success', 'User Login Successfully!!'); 
					return Redirect::intended('/dashboard');
				}
			}
			else {
				// if any error send back with message.
				Session::flash('error', 'Invalid Username or Password!!'); 
				return Redirect::to('signin');
			}
		}
	}

	//used for adding hits and redirect to google page
	public function openLink($myslug,Request $request){
		$link=Link::where('customize','=',$request->url())->get();
		if($link->count()>0){
			Link::where('id', '=', $link[0]->id)->update([
				'hits' => $link[0]->hits+1,
			]);
			return Redirect::to($link[0]->long_url);
		}else{
			Session::flash('error', 'Invalid Url'); 
			return Redirect::to('dashboard');
		}
	}

	//used for post data of sign up form
	public function doSignUp()
	{
		$data = Input::all();
		$rules = array(
				'email' => 'required|email|unique:users',
				'password' => 'required|confirmed|min:6',
			);
			$validator = Validator::make($data, $rules);
			if ($validator->fails()){
				// If validation falis redirect back to login.
				return Redirect::to('/signup')->withInput()->withErrors($validator);
			}
			else
			{
				$user=User::create([
					'email' => $data['email'],
					'password' => bcrypt($data['password']),
				]);
				Session::flash('success', 'User Regitered  Successfully!!');
				return Redirect::to('signin')->with('success', 'User registered Successfully!!');
				
			}
			
			
	}

	//used for logout
	public function logout(){
		$auth=Auth::user();
		$userid=$auth->id;
		$dt = new DateTime;
		$currentDate= $dt->format('Y-m-d H:i:s');
		$update=array('status'=>'0','last_active'=>$currentDate);
		User::where('id', '=', $userid)->update($update);
		Auth::logout();
		Session::forget('searchDateData');
		return Redirect::to('/signin');
	}
	
	
}
