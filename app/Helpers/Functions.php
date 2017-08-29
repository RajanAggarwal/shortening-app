<?php namespace App\Helpers;
use Illuminate\Support\Facades\Auth; 
use App\Http\Models\Twins;
use App\Http\Models\Profile;
use App\Http\Models\User;
use App\Http\Models\Usersmessages;
use App\Http\Models\Group;
use App\Http\Models\Groupmembers;

class Functions {

    /**
     getUnreadMessagesCount
     */
    public static function getUnreadMessagesCount()
	{
		$auth=Auth::user();
		$userid=$auth->id;
		$unreadCount=Usersmessages::where([['receiver_id', '=', $userid],['status','=',0]])->count();
		return $unreadCount;
	}

}