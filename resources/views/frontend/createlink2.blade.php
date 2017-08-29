@extends('frontend.layouts.default') @section('content')
<section class="content-sec signup">
  <div class="container">
        <div class="row">
            <div class="col-md-12 col-sm-12">
                <div class="user_form">
                    <div>
                       <h6>Created {{$link->created_at->format('M d')}}</h3>
                       {{ Form::open(array('url' => 'createlink2')) }}
                          <div class="form-group">
                            <label>Title</label>
                            <input type="text" class="form-control" id="title" name="title" value="" placeholder="Enter title" required>
                          </div>
                          <div class="form-group">
                            <label>Customize</label>
                            <textarea class="form-control" id="long-url" name="long_url" placeholder="" readonly>{{$link->customize}}</textarea>
                          </div>
                          <div class="form-group">
                            <label>Tag</label>
                            <input type="text" class="form-control" id="tag" name="tag" value="" placeholder="Enter Tag" required>
                          </div>
                          <button type="submit" class="btn btn-default">Submit</button>
                       {{ Form::close() }}
                   </div>
                </div>
            </div>
        </div>
    </div>
</section> @stop
