<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/
Route::group( array('middleware' => 'frontend','namespace'=>'Frontend', 'middleware' => 'revalidate'), function(){
      
      Route::get('/dashboard', array('as' => 'frontend', 'uses' => 'DashboardController@index'));
      Route::get('/createlink', array('as' => 'frontend', 'uses' => 'DashboardController@createLink'));
      Route::get('/createlink2', array('as' => 'frontend', 'uses' => 'DashboardController@createLinkStep2'));
      Route::post('/createlink', array('as' => 'frontend', 'uses' => 'DashboardController@createLink'));
      Route::post('/createlink2', array('as' => 'frontend', 'uses' => 'DashboardController@createLinkStep2'));
      Route::get('/logout', array('as' => 'frontend', 'uses' => 'HomepageController@logout'));
      Route::get('/delete/link/{id}', array('as' => 'frontend', 'uses' => 'DashboardController@delete'));
      
});

  /*frontend login */
  Route::get('lang/{lang}', ['as'=>'lang.switch', 'uses'=>'LanguageController@switchLang']);
  Route::get('/', 'Frontend\HomepageController@index');

  Route::get('/signin', 'Frontend\HomepageController@signin');
  Route::post('/signin', 'Frontend\HomepageController@dosignin');
  Route::get('/signup','Frontend\HomepageController@signup');
  Route::post('/signup', 'Frontend\HomepageController@doSignUp');
  Route::any('/tiny/{myslug}', 'Frontend\HomepageController@openLink')->where('myslug','^([0-9A-Za-z\-]+)');
  //Route::any('{myslug}/page/', array('as'=>'bar-page', 'uses'=>'Controllers\MyBar@index'))
 //->where('myslug','^([0-9A-Za-z\-]+)?bar([0-9A-Za-z\-]+)?');
  Route::get('{locale}','LanguageController@index');
