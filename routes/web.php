<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::view('/contact', 'contact')->name('contact');
Route::view('/about', 'about')->name('about');
Route::get('article/{post}', [HomeController::class, 'post'])->name('home.post');

/*Route::get('/second', function () {
    return view('second');
});*/
// more simple syntax, please note here use Route::view instead of Route:get
Route::view('/second', 'second');

Route::get('/third', function () {
    return view('third'); // <-- third.blade.php file doesn't exist
});
