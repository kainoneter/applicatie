<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        $user = User::where('email', $validated['email'])->first();

        if(!$user || Hash::check($validated['password'], $user->password)){
            return response()->json([
                'error' => __('auth.wrong_credentials'),
            ], 401);
        }

        $token = $user->createToken('api-token')->plainTextToken;

        return response()->json([
            'message' => __('auth.welcome') . $user->name . '!',
            'user' => $user,
            'token' => $token,
        ], 200);
    }

    public function register(Request $request)
    {
        $validated = $request->validate([
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'required|email|unique:users,email',
            'date_of_birth' => 'date|nullable',
            'password' => 'required|min:6|confirmed',
            'allow_email' => 'required|boolean',
        ]);
        

        if($validated['password'] === $validated['password_confirmation']){

            $validated['password'] = Hash::make($validated['password']);

            $user = User::create($validated);

            return response()->json([
                'message' => __('auth.welcome') . $user->name . '!',
                'user' => $user,
            ], 201);
        }

        return response()->json([
            'error' => __('auth.passwords_no_match'),
        ], 422);

    }
}
