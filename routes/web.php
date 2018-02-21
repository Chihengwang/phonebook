<?php


Route::get('/', function () {
    return view('welcome');
});

Route::get('/phone/{name}', function ($name) {
    //
    return redirect('/phone');
    
})->where('name', '[A-Za-z]+');


Route::resource('/phone', 'PhonebookController');
Route::post('/getdata','PhonebookController@getData');