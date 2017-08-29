@extends('frontend.layouts.default') @section('content')
<section class="content-sec signup">
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-sm-12">
                <div class="user_form">
                    <div>
                       {{ Form::open(array('url' => 'createlink')) }}
                          <div class="form-group">
                            <label>Create Shorten Url</label>
                            <input type="text" class="form-control" id="url" name="url" value="{{URL::to('/')}}/tiny" readonly>
                          </div>
                          <div class="form-group">
                            <input type="text" class="form-control" id="long-url" name="long_url" placeholder="Enter url" required/>
                          </div>
                          <button type="submit" class="btn btn-default">Submit</button>
                       {{ Form::close() }}
                   </div>
                </div>
            </div>
        </div>
    </div>
</section> @stop
