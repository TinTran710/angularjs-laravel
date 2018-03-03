<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

// Route::get('list',['uses' => 'SinhVienController@getList']);
Route::get('list','SinhVienController@getList');
Route::post('add','SinhVienController@postAdd');
Route::get('edit/{id}','SinhVienController@getEdit');
Route::post('edit/{id}','SinhVienController@postEdit');
Route::get('delete/{id}','SinhVienController@getDelete');
