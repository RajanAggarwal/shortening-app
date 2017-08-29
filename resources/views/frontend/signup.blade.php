@extends('frontend.layouts.default') @section('content')
<section class="content-sec signup">
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-sm-12 content-col">
                <div class="user_form">
                    <div>
                        <h6>{{ trans('language.creataccounttext') }}</h6> @if(Session::has('error'))
                        <div class="alert alert-danger">
                            <h2>{{ Session::get('error') }}</h2> </div> @endif {{ Form::open(array('url' => 'signup','class'=>'login-form')) }}
                        <ul>
                            <!--<li>{{ Form::label('email', 'Email Address'),array('for' => 'userEmail','class'=>'sr-only') }}</li>-->
                            <li><i class="fa fa-user"></i> {{ Form::text('email', Input::old('email'), array('placeholder' => trans('language.usernameplaceholder'),'class'=>'form-username form-control','id'=>'form-username','required')) }}
                               <!--<span class="help-block">Your email address is also used to log in.</span>-->
                                <p class="errors">{{$errors->first('email')}}</p>
                            </li>
                            <!-- <li>{{ Form::label('password', 'Password'),array('for' => 'form-password','class'=>'sr-only') }}</li>-->
                            <li><i class="fa fa-lock"></i> {{ Form::password('password',array('placeholder' => trans('language.passwordplaceholder'),'class'=>'form-password form-control','id'=>'form-password','required')) }}
                                <!--<span class="help-block">Choose a password for your new account.</span>-->
                                <p class="errors">{{$errors->first('password')}}</p>
                            </li>
                            <!-- <li>{{ Form::label('repeatpassword', 'Repeat Password'),array('for' => 'form-repeatpassword','class'=>'sr-only') }}</li>-->
                            <li><i class="fa fa-lock"></i> {{ Form::password('password_confirmation',array('placeholder' => trans('language.rememberpasswordplaceholder'),'class'=>'form-repeatpassword form-control','id'=>'form-repeatpassword','required')) }}
                                <!--<span class="help-block">Type the password again. Passwords must match.</span>-->
                                <p class="errors">{{$errors->first('repeatpassword')}}</p>
                            </li>
                            <li>{{ Form::submit(trans('language.createmyaccountbutton'), array('class'=>'btn btn-success btn-icon')) }} </li>
                            <li><span>{{trans('language.alreadyhaveaccount')}}<a href="{{URL::to('/signin')}}"> {{trans('language.signinnowtext')}}</a></span></li>
                        </ul> {{ Form::close() }} </div>
                </div>
            </div>
        </div>
    </div>
</section> @stop
