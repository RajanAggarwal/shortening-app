 <!-- Navigation -->
    <div class="PinkBG">
        <div class="container">
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="top-links">
                <ul class="nav navbar-nav TopMenu">
                      @if(Auth::check() && Auth::user()->role != 'admin') 
						<li><a href="{{URL::to('logout')}}">{{trans('language.logout')}}</a></li>
                     @endif
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </div>
    @if (Route::getCurrentRoute()->uri() == '/')
    <header class="header home-header">
     @else
    <header class="header TransparentHeaderBG">
            @endif
                <div class="container">
                <div class="row">
                        <div class="navbar-header">
                          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                          </button>
                        </div>
                        <div class="collapse navbar-collapse main-nav" id="bs-example-navbar-collapse-1">
                        @if(Auth::check() && Auth::user()->role != 'admin') 
                        <ul id="MainNavigation" class="nav navbar-nav">
                        <li><a class="{{Route::getCurrentRoute()->getPath()=='dashboard' ?'active' :''}}" href="{{URL::to('')}}/dashboard"><i class="fa fa-gg"></i>Dashboard</a></li>
                            <li><a class="{{Route::getCurrentRoute()->getPath()=='createlink' ?'active' :''}}" href="{{URL::to('')}}/createlink"><i class="fa fa-gg"></i>Create Shorten Link</a></li>
                        </ul>
                        @else
                        <ul id="MainNavigation" class="nav navbar-nav">
                           <li><a class="{{Route::getCurrentRoute()->getPath()=='signin' ?'active' :''}}" href="{{URL::to('/signin')}}"><i class="fa fa-key"></i>{{trans('language.login')}}</a></li>
                            <li><a class="{{Route::getCurrentRoute()->getPath()=='signup' ?'active' :''}}" href="{{URL::to('/signup')}}"><i class="fa fa-user"></i>{{trans('language.register')}}</a></li>
                        </ul>    
                       @endif
                        </div>
                </div>
                </div>
 
    </header>
    <input type="hidden" name="baseurl" value="{{ url('/') }}" id="baseurl" />
    <input type="hidden" name="imageurl" value="{{ URL::asset('images')}}" id="imageurl" />
    
