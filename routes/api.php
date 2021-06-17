<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::group(['middleware' => 'auth:sanctum'], function() {
//   Route::resource('/product', ProductController::class);
// });

Route::post('product', [ProductController::class, 'store'])->middleware('auth:sanctum');
Route::get('product', [ProductController::class, 'index']);
Route::delete('product/{id}', [ProductController::class, 'destroy']);
Route::get('product/{id}', [ProductController::class, 'show']);

Route::post('category', [CategoryController::class, 'store'])->middleware('auth:sanctum');
Route::get('category', [CategoryController::class, 'index']);
Route::delete('category/{id}', [CategoryController::class, 'destroy']);
Route::get('category/{id}', [CategoryController::class, 'show']);

Route::post('login', function (Request $request) {
  $request->validate([
    'email' => 'required|email',
    'password' => 'required',
  ]);

  if (!Auth::attempt($request->only('email', 'password'))) {
    return response()->json([
      'message' => 'Invalid login details'
    ], 401);
  }

  $user = User::where('email', $request->email)->first();

  $token = $user->createToken('auth_token')->plainTextToken;

  return response()->json([
    'access_token' => $token,
    'token_type' => 'Bearer',
  ]);

});