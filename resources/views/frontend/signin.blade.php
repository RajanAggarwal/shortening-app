@extends('frontend.layouts.default')
@section('content')
<section class="content-sec signin">
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-sm-8 content-col">
                <div class="user_form">
                    <div>
                        <h6>{{ trans('language.signin') }}</h6>
                        <!--<p>Enter your username and password to log on:</p>-->
                        @if(Session::has('error'))
                        <div class="alert alert-danger">
                          {{ Session::get('error') }}
                        </div>
                        @endif

                        @if(Session::has('success'))
                        <div class="alert alert-success">
                          {{ Session::get('success') }}
                        </div>
                        @endif
                        {{ Form::open(array('url' => 'signin','class'=>'login-form')) }}
                        <ul>
                            <!--<li>{{ Form::label('email', 'Email Address'),array('for' => 'form-username','class'=>'sr-only') }}</li>-->
                            <li><i class="fa fa-user"></i> 
                                {{ Form::text('email', Input::old('email'), array('placeholder' =>trans('language.usernameplaceholder'),'class'=>'form-username form-control','id'=>'form-username','required')) }}
                                <p class="errors">{{$errors->first('email')}}</p>
                            </li>
                            <!-- <li>{{ Form::label('password', 'Password'),array('for' => 'form-username','class'=>'sr-only') }}</li>-->
                            <li><i class="fa fa-lock"></i>
                                {{ Form::password('password',array('placeholder' => trans('language.passwordplaceholder'),'class'=>'form-password form-control','id'=>'form-password','required')) }}
					            <p class="errors">{{$errors->first('password')}}</p>
                            </li>
                            
                            <li><input type="hidden" name="isEmpty" value=""> <br> {{ Form::submit(trans('language.signinbutton'), array('class'=>'loginbutton btn')) }} </li>
                            <li><span>{{trans('language.noaccount')}}<a href="{{URL::to('/signup')}}"> {{trans('language.createone')}}</a></span></li>
                        </ul> {{ Form::close() }} </div>
                </div>
            </div>
        </div>
    </div>
</section>
@stop
