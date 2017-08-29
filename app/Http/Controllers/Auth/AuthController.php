<?php
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input; // using controller class
use Illuminate\Support\Facades\Validator; // using controller class
use Illuminate\Support\Facades\Auth; // using controller class
use Illuminate\Support\Facades\Redirect; // using controller class
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Hash;
use App\User;
use App\Http\Models\Profile;
use App\Http\Models\Country;
use View;
use Socialize;
use Socialite;
use Image;
class AuthController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Registration & Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users, as well as the
    | authentication of existing users. By default, this controller uses
    | a simple trait to add these behaviors. Why don't you explore it?
    |
    */



    protected $redirectPath = '/userprofile';

    protected $loginPath = '/';

    /**
     * Create a new authentication controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'getLogout']);
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|confirmed|min:6',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return User
     */
    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);
    }

    public function authenticate($credentials)
    {   
        $authenticate = ( Auth::attempt($credentials) ) ? true : false;

        return $authenticate;
    }

    /**
     * [getLogin description]
     * @return \Illuminate\Http\Response Html document
     */
    public function getLogin() {
        return view('auth.login');
    }

    /**
     * Handle an ajax login request to the application
     * 
     * @param \Illuminate\Http\Request $request
     * @param \Illuminate\Http\Response
     */ 
    public function postLogin(Request $request)
    {
        $this->validate($request, [
            'username' => 'required', 'password' => 'required',
        ]);// Returns response with validation errors if any, and 422 Status Code (Unprocessable Entity)

        $credentials = $request->only('username', 'password');

        if ($this->authenticate($credentials))
        {
            return response(array('msg' => 'Login Successfull'), 200) // 200 Status Code: Standard response for successful HTTP request
              ->header('Content-Type', 'application/json');
        }

        return response(array('msg' => $this->getFailedLoginMessage()), 401) // 400 Status Code: Forbidden, needs authentication
          ->header('Content-Type', 'application/json');

    }

    /**
     * Logs user out of app
     * @return \Illuminate\Http\Response 
     */
    public function getLogout() {
        Auth::logout();
    }

    /**
     * Returns registration form view
     * @return \Illuminate\Http\Response
     */
    public function getRegister() {
        return view('auth.register');
    }

    /**
     * Registers users
     * @return \Illuminate\Http\Response
     */
    public function postRegister() {
        return response('Registration Succesful!', 200) 
              ->header('Content-Type', 'application/json');
    }
    
     /**
     * Redirect the user to the Twitter authentication page.
     *
     * @return Response
     */
    public function redirectToProviderTwitter()
    {
			
        return Socialite::driver('twitter')->redirect();
    }

    /**
     * Obtain the user information from Facebook.
     *
     * @return Response
     */
    public function handleProviderCallbackTwitter()
    {
			
        try {
			
          $user = Socialite::driver('twitter')->user();

        } catch (Exception $e) {
            return redirect('/signin');
        }

        $authUser = $this->findOrCreateUser($user);
        
        if($authUser)
        {
        
			Auth::login($authUser, true);

			return Redirect::to('/userprofile');
		}
		else
		{
			return Redirect::to('/profile');
		}
    }

   
    
     /**
     * Redirect the user to the Google authentication page.
     *
     * @return Response
     */
    public function redirectToProviderGoogle()
    {
			
        return Socialite::driver('google')->redirect();
    }

    /**
     * Obtain the user information from Facebook.
     *
     * @return Response
     */
    public function handleProviderCallbackGoogle()
    {
			
        try {
			
            $user = Socialite::driver('google')->stateless()->user();
        } catch (Exception $e) {
            return redirect('/signin');
        }

        $authUser = $this->findOrCreateUser($user);
        
        if($authUser)
        {
			
			Auth::login($authUser, true);

			return Redirect::to('/userprofile');
		}
		else
		{
			return Redirect::to('/profile');
		}
    }

   
    
    
    /**
     * Redirect the user to the Facebook authentication page.
     *
     * @return Response
     */
    public function redirectToProvider()
    {
			
        return Socialite::driver('facebook')->redirect();
    }

    /**
     * Obtain the user information from Facebook.
     *
     * @return Response
     */
    public function handleProviderCallback()
    {
			
        try {
			//die('hie');
            $user = Socialite::driver('facebook')->stateless()->user();
        } catch (Exception $e) {
            return redirect('/signin');
        }

        $authUser = $this->findOrCreateUser($user);
        if($authUser)
        {
        
			Auth::login($authUser, true);

			return Redirect::to('/userprofile');
		}
		else
		{
			return Redirect::to('/profile');
		}
    }

    /**
     * Return user if exists; create and return if doesn't
     *
     * @param $all
     * @return User
     */
    private function findOrCreateUser($providerUser)
    {
	
       $authUser = User::where('email', $providerUser->email)->first();
        if ($authUser){
            return $authUser;
         
        }

        else
        {
			Session::forget('email');
			Session::forget('password');
			Session::forget('firstname');
			Session::forget('lastname');
			Session::forget('profile_pic');
			$fullname=explode(" ",$providerUser->name);
			session(['email' => $providerUser->email]);
            if(count($fullname)==1){
			 session(['firstname' => $providerUser->name]);
			 session(['lastname' => '']);
            }else{
              session(['firstname' => $fullname[0]]);
             session(['lastname' => $fullname[1]]);  
            }
			session(['profile_pic' => $providerUser->avatar]);
			return false;
			
		}
			
        
     }
    
    
    



 }
