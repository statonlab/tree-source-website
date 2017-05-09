<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        $current_date = date("Y");

        if ($data['birth_year'] - $current_date < 13) {

            return Validator::make($data, [
                'name' => 'required|max:255',
                'email' => 'required|email|max:255|unique:users',
                'password' => 'required|min:6|confirmed',
                'agreement' => 'required|boolean|in:1',
                'birth_year' => 'integer',
                'is_anonymous' => 'boolean',
                'minorConsent' => 'required|boolean|in:1',
                'zipcode' => [
                    'min:5',
                    'max:10',
                    'regex:/^([0-9]{5})(-[0-9]{4})?$/i',
                ],
            ]);
        }
        return Validator::make($data, [
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:6|confirmed',
            'agreement' => 'required|boolean|in:1',
            'birth_year' => 'integer',
            'is_anonymous' => 'boolean',
            'zipcode' => [
                'min:5',
                'max:10',
                'regex:/^([0-9]{5})(-[0-9]{4})?$/i',
            ],
        ]);


    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array $data
     * @return User
     */
    protected function create(array $data)
    {
        $user =  User::create([
          'name' => $data['name'],
          'email' => $data['email'],
          'password' => bcrypt($data['password']),
          'birth_year' => $data['birth_year'],
          'api_token' => $this->generateAPIToken(),
          'zipcode' => $data['zipcode'],
        ]);

        return $user;
    }

    /**
     * Generates a unique API Token
     * @return string
     */
    protected function generateAPIToken()
    {
        // Make sure the random string is 100% unique to our database
        $str = str_random(60);
        while (!User::where('api_token', $str)->get()->isEmpty()) {
            $str = str_random(60);
        }

        return $str;
    }
}
