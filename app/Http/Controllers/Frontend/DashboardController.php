<?php
namespace App\Http\Controllers\Frontend; //admin add
use App\Http\Controllers\Controller; // using controller class
use Illuminate\Support\Facades\Input; // using controller class
use Illuminate\Support\Facades\Validator; // using controller class
use Illuminate\Support\Facades\Auth; // using controller class
use Illuminate\Support\Facades\Redirect; // using controller class
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Guard;
use Illuminate\Support\Facades\Hash;
use App\Http\Models\User;
use App\Http\Models\Link;
use Illuminate\Http\Request;
use View;
use URL;
use DB;
class DashboardController extends Controller {
	
	public function __construct(){
		$this->middleware('auth');
	}

	//used for dashboard
	public function index(){
		$data['user']=User::find(Auth::user()->id);
		return view('frontend.dashboard')->with($data);
	}

	//used for create link and added to database
	public function createLink(Request $request){
		if($request->isMethod('post')){
			$data = Input::all();
			$link=Link::create([
				'customize' => $data['url']."/".$this->generateRandomString(),
				'long_url' => $data['long_url'],
				'user_id' => Auth::user()->id,
			]);
			$id=$link->id;
			session(['linkId' => $id]);
			return Redirect::to('createlink2');

		}
		return view('frontend.createlink');
	}

	//used for create link step2 and added to database
	public function createLinkStep2(Request $request){
		$id=Session::get('linkId');
		$link=Link::find($id);
		if($request->isMethod('post')){
			$data = Input::all();
			Link::where('id', '=', $id)->update([
				'title' => $data['title'],
				'tag' => $data['tag'],
				'id' => $id,
			]);
			Session::forget('linkId');
			Session::flash('success', 'Link added successfully!!');
			return Redirect::to('dashboard')->with('success', 'Link added successfully!!');
		}
		return view('frontend.createlink2',['link'=>$link]);
	}

	//used for delete link
	public function delete($id){
		Link::where('id', '=', $id)->delete();
		return Redirect::to('dashboard')->with('success', 'Link deleted successfully!!');
	}

	//used for generating random string
	private function generateRandomString($length = 7) {
	    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	    $charactersLength = strlen($characters);
	    $randomString = '';
	    for ($i = 0; $i < $length; $i++) {
	        $randomString .= $characters[rand(0, $charactersLength - 1)];
	    }
	    return $randomString;
	}


}
