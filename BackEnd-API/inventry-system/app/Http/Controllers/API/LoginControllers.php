<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Validator;
use App\Models\RegisterModel;
use App\Models\RetailerBackupDetailsModel;

class LoginControllers extends Controller
{

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',

        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }
        $user = RegisterModel::where('email', $request['email'])->first();
        // var_dump($user);
        $RetailerBackupDetailsModel = RetailerBackupDetailsModel::where('email', $request['email'])->first();


        if ($user) {
            $var = 0;
        } else {
            $var = 1;
        }

        switch ($var) {
            case 0:
                if (!$user) {
                    return response()->json(['error' => 'user not found.,', 'email' => $request['email'],], 401);
                }
                if (!Hash::check($request->password, $user->password)) {
                    return response()->json(['error' => 'Unauthorised'], 401);
                } else {
                    $token = $user->createToken('auth_token')->plainTextToken;
                    return response()
                        ->json(['usertype' => $user->usertype, 'email' => $user->email, 'name' => $user->fullName, 'phoneNumber' => $user->phoneNumber, 'storeType' => $user->storeType, 'access_token' => $token, 'token_type' => 'Bearer', 'active' => $user->active]);

                }
                break;
            case 1:
                $RetailerBackupDetailsModel = RetailerBackupDetailsModel::where('email', $request['email'])->first();
                if (!$RetailerBackupDetailsModel) {
                    return response()->json('user not found', 401);
                }
                if (!Hash::check($request->password, $RetailerBackupDetailsModel->password)) {
                    return response()->json(['RetailerBackupDetailsModel' => 'Unauthorised'], 401);
                } else {
                    $token = $RetailerBackupDetailsModel->createToken('auth')->plainTextToken;
                    return response()
                        ->json(['usertype' => $RetailerBackupDetailsModel->usertype, 'email' => $RetailerBackupDetailsModel->email, 'storeType' => $RetailerBackupDetailsModel->storeType, 'RetailerBackupDetailsModel' => 'RetailerBackupDetailsModel', 'access_token' => $token, 'token_type' => 'Bearer',]);

                }
                break;
        }
    }



    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();

        return [
            'message' => 'logged out'
        ];
    }

}