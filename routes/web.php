<?php

use Illuminate\Support\Facades\Route;
use App\Models\User;

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
    return view('welcome');
});

Route::get('/create', function () {
  $user = new User;
  $user->password = Hash::make('password');
  $user->email = 'lester@example.com';
  $user->name = 'Lester';
  $user->save();

  return dd($user);
});

Route::get('/test', function() {
  return request()->session()->all();
});
