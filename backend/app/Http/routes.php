<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::post('/contact', 'ContactController@sendContact');
Route::get('/data/courses', function() {

    $courses = Storage::disk('local')->get('public/courses.json');

    return Response::json($courses);
});
