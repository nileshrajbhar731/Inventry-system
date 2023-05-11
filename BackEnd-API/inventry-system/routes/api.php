<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\RegisterController;
use App\Http\Controllers\API\LoginControllers;
use App\Http\Controllers\API\AdminControllers;
use App\Http\Controllers\API\OrderControllers;
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
// Route::post('/register-Retailar',[RegisterController::class,'store']);
Route::post('/register',[RegisterController::class,'store']);
 Route::get('/register-show',[RegisterController::class,'show']);
 Route::get('/register/Find/{email}',[RegisterController::class,'Find']);
Route::get('/register-edit/{id}',[RegisterController::class,'edit']);
Route::put('/register-update/{id}',[RegisterController::class,'update']);
Route::delete('/register-delete/{id}',[RegisterController::class,'remove']);
// BackupDetails
Route::post('/RetailerBackupDetails',[RegisterController::class,'RetailerBackupDetails']);
// RetailerBackupDetailsShow
Route::get('/RetailerBackupDetails-Show',[RegisterController::class,'RetailerBackupDetailsShow']);
// RetailerBackupDetails-delete
Route::delete('/RetailerBackupDetails-delete/{id}',[RegisterController::class,'RetailerBackupDetailsRemove']);
Route::post('/login',[LoginControllers::class,'login']);

// Order Information
Route::post('/Order',[OrderControllers::class,'store']);
 Route::get('/Order-show',[OrderControllers::class,'show']);
 Route::get('/Find/{email}',[OrderControllers::class,'Find']);


//  OrderOnlineModel
Route::post('/OnlineOrder',[OrderControllers::class,'onlinestore']);
 Route::get('/OnlineOrder-show',[OrderControllers::class,'onlineshow']);
 Route::get('/OnlineFind/{email}',[OrderControllers::class,'onlineFind']);


// AdminControllers
// Frus
Route::post('/Fru-add',[AdminControllers::class,'Frustore']);
Route::get('/Fru-show',[AdminControllers::class,'Fruindex']);
Route::get('/Fru-edit/{id}',[AdminControllers::class,'Fruedit']);
Route::put('/Fru-update/{id}',[AdminControllers::class,'Fruupdate']);
Route::delete('/Fru-delete/{id}',[AdminControllers::class,'Fruremove']);

// Glo
Route::post('/Glo-add',[AdminControllers::class,'Glostore']);
Route::get('/Glo-show',[AdminControllers::class,'Gloindex']);
Route::get('/Glo-edit/{id}',[AdminControllers::class,'Gloedit']);
Route::put('/Glo-update/{id}',[AdminControllers::class,'Gloupdate']);
Route::delete('/Glo-delete/{id}',[AdminControllers::class,'Gloremove']);
// veg
Route::post('/Veg-add',[AdminControllers::class,'Vegstore']);
Route::get('/Veg-show',[AdminControllers::class,'Vegindex']);
Route::get('/Veg-edit/{id}',[AdminControllers::class,'Vegedit']);
Route::put('/Veg-update/{id}',[AdminControllers::class,'Vegupdate']);
Route::delete('/Veg-delete/{id}',[AdminControllers::class,'Vegremove']);

//
Route::post('/logout', [LoginControllers::class, 'logout']);

Route::group(['middleware' => ['auth:sanctum']], function () {

//     Route::get('/show-register',[RegisterController::class,'index']); //done
// Route::delete('/delete-register/{id}',[RegisterController::class,'remove']);// done
// Route::get('/Show-LoginData/{email}',[LoginDataControllers::class,'index']);//done
// Route::post('/Add-LoginData',[LoginDataControllers::class,'store']);// done
// Route::get('/Show-Edit/{id}',[LoginDataControllers::class,'edit']);
// Route::put('/Update-LoginData/{id}',[LoginDataControllers::class,'update']);
// Route::delete('/delete-LoginData/{id}',[LoginDataControllers::class,'remove']);// done
//     Route::post('/logout', [LoginControllers::class, 'logout']);
// Route::get('/register-show',[RegisterController::class,'show']);
});
