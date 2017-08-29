@extends('frontend.layouts.default') @section('content')
@if(Session::has('success'))
  <div class="alert alert-success">
     <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      {{ Session::get('success') }}
      </div>
@endif
<div class="container">
  <h2>Shorten Link Listing</h2>         
  <table class="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Main Url</th>
        <th>Tiny Url</th>
        <th>Hits</th>
        <th>Remove</th>
      </tr>
    </thead>
    <tbody>
       @if(!empty($user->links))
        @foreach($user->links as $link)
        <tr>
          <td>{{$link->title}}</td>
          <td>{{$link->long_url}}</td>
          <td><a href="{{$link->customize}}" target="_blank">{{$link->customize}}</a></td>
          <td>{{$link->hits}}</td>
          <td><a href="{{URL::to('/delete/')}}/link/{{$link->id}}"><i class="fa fa-trash" aria-hidden="true"></i></a></td>
        </tr>
        @endforeach
        @else
        <h1>No record found</h1>
      @endif
    </tbody>
  </table>
</div>
@stop
