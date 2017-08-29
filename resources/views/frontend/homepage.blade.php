@extends('frontend.layouts.default')
@section('content')
<!-- Jumbotron Header -->
<section class="home-banner">
    <div class="container">
            <div class="row">
                <div class="col-md-6">        
                    <div class="left">
                    <h1>{{trans('language.homepagetext')}}</h1>
                    <h4>{{trans('language.homepagetext-1')}}<br>{{trans('language.homepagetext-1-1')}}</h4>
                    <h1>{{trans('language.homepagetext-2')}}</h1>
                    <h5>{{trans('language.homepagetext-3')}}</h5>
                    </div>
                </div>
                <div class="col-md-6">  
                    <div class="right">
                        <section class="video-section">
                            <div class="video-header">
                                 <video class="videoheader" autoplay poster="{{ URL::asset('images/poster.png') }}">
                                    <source src="{{ URL::asset('video')}}/{{Config::get('languages')[App::getLocale()] }}/homepage.mp4" type="video/mp4">
                                </video> 
                            </div> 
                        </section> 
                    </div>
                </div>
			</div>
		</div>
</section>
<div class="clearfix"></div>
<div class="main-page-content">
    <div class="twins-slider-title">
        <div class="container">
            <h2>{{trans('language.homepageusertitle')}}</h2>
        </div>
    </div>    
    <section class="twins-slider-sec">
        <div class="container-fluid text-center">
                    <div class="twins-slider slider">
                        <!-- Start twins-col -->
                        <div>
                            <div class="twins-col">
                                <a class="img" href="#"> 
									<img itemprop="image" class="img-responsive" src="{{ URL::asset('images') }}/user1.png" alt="image1" />
                                </a>
                                <div class="text">
                                    <p>{{trans('language.homepageusertext1')}}</p>
                                </div>
                            </div>
                        </div>
                        <!-- End twins-col -->
                        <!-- Start twins-col -->
                        <div>
                            <div class="twins-col">
                                <a class="img" href="#"> 
									<img class="img-responsive" src="{{ URL::asset('images') }}/user2.png" alt="image2" />
                                </a>
                                <div class="text">
                                    <p>{{trans('language.homepageusertext2')}}</p>
                                </div>
                            </div>
                        </div>
                        <!-- End twins-col -->
                        <!-- Start twins-col -->
                        <div>
                            <div class="twins-col">
                                <a class="img" href="#"> 
									<img class="img-responsive" src="{{ URL::asset('images') }}/user3.png" alt="image3" />
                                </a>
                                <div class="text">
                                    <p>{{trans('language.homepageusertext3')}}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="twins-col">
                                <a class="img" href="#"> 
									<img class="img-responsive" src="{{ URL::asset('images') }}/user4.png" alt="image4" />
                                </a>
                                <div class="text">
                                    <p>{{trans('language.homepageusertext4')}}</p>
                                </div>
                            </div>
                        </div>                        
                        <!-- End twins-col -->
                        
                    </div>
                    </div>
            </section>
            <!-- <section class="find-twins">
                <div class="container text-center">
                    <h1>{{trans('language.homepagetext1')}}</h1>
                    <a class="btn btn-register " href="{{URL::to('/signup')}}"> <span aria-hidden="true" class="fa fa-user-plus"></span> {{trans('language.registernowtext')}}</a>
                </div>
            </section> -->
    <div class="app-sec">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="right">
                        <div class="offer-img"><img src="{{ URL::asset('images') }}/WIN_An_iPhone_or_Samsung.png" alt="Offer" /></div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="left">
                        <h2><span>{{trans('language.socialmetitle1')}}</span> {{trans('language.socialmetitle2')}}</h2>
                        <p>{{trans('language.socialmetext')}}</p>
                        <a class="download-app" target="_blank" href="{{trans('language.downloadapplink')}}">{{trans('language.downloadappbtn')}}</a>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="right">
                        <img src="{{ URL::asset('images') }}/app-img.png" alt="App Image" />
                    </div>
                </div> 
            </div>                
        </div>
    </div>
</div>

<script src="{{ URL::asset('slick/slick.js') }}" type="text/javascript" charset="utf-8"></script>
<script>
	jQuery(document).on('ready', function() {
jQuery('.twins-slider').slick({
  dots: false,
  infinite: false,
  arrows: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
});
</script>
@stop
