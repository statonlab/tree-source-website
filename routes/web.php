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

// Home Routes
Route::get('/', 'HomeController@index');
Route::get('/map', 'HomeController@map');

// Documentation Routes
Route::get('/about', 'DocumentController@about');
Route::get('/policy', 'DocumentController@policy');
Route::get('/privacy', 'DocumentController@policy');
Route::get('/help', 'DocumentController@help');

/**
 * Auth Routes:
 * Login: /login
 * Logout: /logout
 * Register: /register
 * Reset Password: /password/reset
 */
Auth::routes();
Route::get('/logout', function () {
    Auth::logout();

    return redirect('/');
});

// Observations
Route::get('/observations', 'ObservationsController@index');
Route::get('/observation/{id}', 'ObservationsController@show');
Route::get('/web/observation/{id}', 'ObservationsController@ajaxShow');

// Users
Route::get('/user/status', 'UsersController@status');
Route::post('/user/subscribe', 'UsersController@subscribe');


// Admin Route Group
Route::group(['prefix' => 'admin', 'namespace' => 'Admin', 'middleware' => ['admin']], function () {
    // Users
    Route::get('/api/users', 'UsersController@index');
    Route::get('/api/user/{id}', 'UsersController@show');
    Route::put('/api/user/{id}', 'UsersController@update');

    // Groups
    Route::get('/api/groups', 'GroupsController@index');
    Route::post('/api/groups', 'GroupsController@create');
    Route::get('/api/group/{id}', 'GroupsController@show');
    Route::delete('/api/group/detach', 'GroupsController@detach');
    Route::post('/api/group/attach', 'GroupsController@attach');
    Route::get('/api/group/allowed/users/{id}', 'GroupsController@getAllowedUsers');

    // Roles
    Route::get('/api/roles', 'RolesController@index');

    // Analytics
    Route::get('/api/analytics/users/count', 'AnalyticsController@usersCount');
    Route::get('/api/analytics/users/trained/count', 'AnalyticsController@usersTrainedCount');
    Route::get('/api/analytics/users/trained/percentage', 'AnalyticsController@usersTrainedPercentage');
    Route::get('/api/analytics/observations/count', 'AnalyticsController@observationsCount');
    Route::get('/api/analytics/observations/distribution', 'AnalyticsController@observationsDistribution');

    // All other react routes
    Route::get('/{react?}', 'AdminController@index')->where(['react' => '(.*)']);
});