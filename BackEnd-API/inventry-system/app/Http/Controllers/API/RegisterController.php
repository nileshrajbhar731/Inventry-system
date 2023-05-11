<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\RegisterModel;
use App\Models\RetailerBackupDetailsModel;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    //
 public function store(Request $request)
    {

        $Register=new RegisterModel;
        $Register->fullName=$request->input('fullName');
        $Register->email=$request->input('email');
        $Register->phoneNumber=$request->input('phoneNumber');
        $Register->usertype=$request->input('usertype');
        $Register->active=$request->input('active');
        // active
        $Register->password=Hash::make($request->input('password'));
        $Register->save();

        return response()->json([
            'status'=>200,
            'message'=>'Register details in database',
        ]);
    }

    public function show()
    {
        $Register=RegisterModel::all();
        return response()->json([
            'status'=>200,
            'message'=>$Register,
        ]);
    }

    public function edit($id){
        $Register= RegisterModel::find($id);
        return response()->json([
            'status'=>200,
            'message'=>$Register,
        ]);
    }

    public function update(Request $request,$id)
    {
        $Register= RegisterModel::find($id);
        $Register->fullName=$request->input('fullName');
        $Register->email=$request->input('email');
        $Register->phoneNumber=$request->input('phoneNumber');
        $Register->usertype=$request->input('usertype');
        $Register->password=Hash::make($request->input('password'));
        $Register->update();

        return response()->json([
            'status'=>200,
            'message'=>'username & password update in database',
        ]);
    }
    public function remove($id){
        $Register= RegisterModel::find($id);
        $Register->delete();
        return response()->json([
            'status'=>200,
            'repose'=>$Register,
            'message'=>'Remove Username & password in Database',
        ]);
    }

    // find
    public function Find($email){
        $Register= RegisterModel::all()->where('email',$email);
        return response()->json([
            'status'=>200,
            'message'=>$Register,
        ]);
    }

    //

    public function RetailerBackupDetails(Request $request)
    {
        $Register=new RetailerBackupDetailsModel;
        $Register->fullName=$request->input('fullName');
        $Register->email=$request->input('email');
        $Register->phoneNumber=$request->input('phoneNumber');
        $Register->usertype=$request->input('usertype');
        $Register->active=$request->input('active');
        $Register->password=Hash::make($request->input('password'));
        $Register->save();

        return response()->json([
            'status'=>200,
            'message'=>'Backup Details in database',
        ]);
    }

    public function RetailerBackupDetailsShow()
    {
        $Register=RetailerBackupDetailsModel::all();
        return response()->json([
            'status'=>200,
            'message'=>$Register,
        ]);
    }

    //

    public function RetailerBackupDetailsRemove($id){
        $Register= RetailerBackupDetailsModel::find($id);
        $Register->delete();
        return response()->json([
            'status'=>200,
            'repose'=>$Register,
            'message'=>'Remove Username & password in Database',
        ]);
    }

}

