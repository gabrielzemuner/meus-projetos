<?php

use App\Http\Controllers\Api\CourseController as ApiCourseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Route::apiResource('courses', ApiCourseController::class);
Route::name('api.')->group(function () {
    Route::apiResource('courses', ApiCourseController::class); // api.courses.index, api.courses.show etc...
});
