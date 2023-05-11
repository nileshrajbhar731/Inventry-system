<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Fruits;
use App\Models\Grocery;
use App\Models\Vegitables;

class AdminControllers extends Controller
{
    public function Frustore(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name' => 'required|string|max:255',
            'price' => 'required|string|max:255',
            'quantity' => 'required|string|max:255',
            'totalQuantity' => 'required|string|max:255',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors());
        }

        $Admin = Fruits::create([
            'name' => $request->name,
            'price' => $request->price,
            'quantity' => $request->quantity,
            'totalQuantity' => $request->totalQuantity,
         ]);
        return response()->json([
            'status'=>200,
            'message'=>'Register details in database',
        ]);

    }
    public function Fruindex(){
        $Admin= Fruits::all();
        return response()->json([
            'status'=>200,
            'message'=>$Admin,
        ]);
    }

    public function Fruedit($id){
        $Admin= Fruits::find($id);
        return response()->json([
            'status'=>200,
            'message'=>$Admin,
        ]);
    }

    public function Fruupdate(Request $request,$id)
    {
        $Admin= Fruits::find($id);
        $Admin->name=$request->input('name');
        $Admin->price=$request->input('price');
        $Admin->quantity=$request->input('quantity');
        $Admin->totalQuantity=$request->input('totalQuantity');
        $Admin->update();

        return response()->json([
            'status'=>200,
            'message'=>'username & password update in database',
        ]);
    }
    public function Fruremove($id){
        $Admin= Fruits::find($id);
        $Admin->delete();
        return response()->json([
            'status'=>200,
            'repose'=>$Admin,
            'message'=>'Remove Username & password in Database',
        ]);
    }



//Grocery

public function Glostore(Request $request)
{
    $validator = Validator::make($request->all(),[
        'name' => 'required|string|max:255',
        'nameType' => 'required|string|max:255',
        'price' => 'required|string|max:255',
        'quantity' => 'required|string|max:255',
        'totalQuantity' => 'required|string|max:255',
    ]);

    if($validator->fails()){
        return response()->json($validator->errors());
    }

    $Admin = Grocery::create([
        'name' => $request->name,
        'nameType' => $request->nameType,
        'price' => $request->price,
        'quantity' => $request->quantity,
        'totalQuantity' => $request->totalQuantity,
     ]);
    return response()->json([
        'status'=>200,
        'message'=>'Register details in database',
    ]);

}
public function Gloindex(){
    $Admin= Grocery::all();
    return response()->json([
        'status'=>200,
        'message'=>$Admin,
    ]);
}

public function Gloedit($id){
    $Admin= Grocery::find($id);
    return response()->json([
        'status'=>200,
        'message'=>$Admin,
    ]);
}

public function Gloupdate(Request $request,$id)
{
    $Admin= Grocery::find($id);
    $Admin->name=$request->input('name');
    $Admin->nameType=$request->input('nameType');
    $Admin->price=$request->input('price');
    $Admin->quantity=$request->input('quantity');
    $Admin->totalQuantity=$request->input('totalQuantity');
    $Admin->update();

    return response()->json([
        'status'=>200,
        'message'=>'username & password update in database',
    ]);
}
public function Gloremove($id){
    $Admin= Grocery::find($id);
    $Admin->delete();
    return response()->json([
        'status'=>200,
        'message'=>'Remove Username & password in Database',
    ]);
}


    //Vegitables
    public function Vegstore(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name' => 'required|string|max:255',
            'price' => 'required|string|max:255',
            'quantity' => 'required|string|max:255',
            'totalQuantity' => 'required|string|max:255',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors());
        }

        $Admin = Vegitables::create([
            'name' => $request->name,
            'price' => $request->price,
            'quantity' => $request->quantity,
            'totalQuantity' => $request->totalQuantity,
         ]);
        return response()->json([
            'status'=>200,
            'message'=>'Register details in database',
        ]);

    }
    public function Vegindex(){
        $Admin= Vegitables::all();
        return response()->json([
            'status'=>200,
            'message'=>$Admin,
        ]);
    }

    public function Vegedit($id){
        $Admin= Vegitables::find($id);
        return response()->json([
            'status'=>200,
            'message'=>$Admin,
        ]);
    }

    public function Vegupdate(Request $request,$id)
    {
        $Admin= Vegitables::find($id);
        $Admin->name=$request->input('name');
        $Admin->price=$request->input('price');
        $Admin->quantity=$request->input('quantity');
        $Admin->totalQuantity=$request->input('totalQuantity');
        $Admin->update();

        return response()->json([
            'status'=>200,
            'message'=>'username & password update in database',
        ]);
    }
    public function Vegremove($id){
        $Admin= Vegitables::find($id);
        $Admin->delete();
        return response()->json([
            'status'=>200,
            'message'=>'Remove Username & password in Database',
        ]);
    }


    }
