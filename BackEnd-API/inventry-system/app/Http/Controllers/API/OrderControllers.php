<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\OrderModel;
use App\Models\OrderOnlineModel;

class OrderControllers extends Controller
{
    //Store

    public function store(Request $request)
    {
        $Order=new OrderModel;
        $Order->name=$request->input('name');
        $Order->email=$request->input('email');
        $Order->phoneNumber=$request->input('phoneNumber');
        $Order->productType=$request->input('productType');
        $Order->productName=$request->input('productName');
        $Order->productQuantity=$request->input('productQuantity');
        $Order->productPrice=$request->input('productPrice');
        $Order->productDeliveryAddress=$request->input('productDeliveryAddress');
        $Order->paymentMethod=$request->input('paymentMethod');
        $Order->productDeliveryStatus=$request->input('productDeliveryStatus');
        $Order->productDeliveryDate=$request->input('productDeliveryDate');
        $Order->save();

        return response()->json([
            'status'=>200,
            'message'=>'Register details in database',
        ]);
    }

    public function show()
    {
        $Order=OrderModel::all();
        return response()->json([
            'status'=>200,
            'message'=>$Order,
        ]);
    }

    public function edit($id){
        $Order= OrderModel::find($id);
        return response()->json([
            'status'=>200,
            'message'=>$Order,
        ]);
    }

    // find
    public function Find($email){
        $Order= OrderModel::all()->where('email',$email);
        return response()->json([
            'status'=>200,
            'message'=>$Order,
        ]);
    }

    public function update(Request $request,$id)
    {
        $Order= OrderModel::find($id);
        $Order->name=$request->input('name');
        $Order->email=$request->input('email');
        $Order->phoneNumber=$request->input('phoneNumber');
        $Order->productType=$request->input('productType');
        $Order->productName=$request->input('productName');
        $Order->productQuantity=$request->input('productQuantity');
        $Order->productPrice=$request->input('productPrice');
        $Order->productDeliveryAddress=$request->input('productDeliveryAddress');
        $Order->paymentMethod=$request->input('paymentMethod');
        $Order->productDeliveryStatus=$request->input('productDeliveryStatus');
        $Order->productDeliveryDate=$request->input('productDeliveryDate');
        $Order->update();

        return response()->json([
            'status'=>200,
            'message'=>'username & password update in database',
        ]);
    }
    public function remove($id){
        $Order= OrderModel::find($id);
        $Order->delete();
        return response()->json([
            'status'=>200,
            'repose'=>$Order,
            'message'=>'Remove Username & password in Database',
        ]);
    }

    // online order

    public function onlinestore(Request $request)
    {
        $Order=new OrderOnlineModel;
        $Order->name=$request->input('name');
        $Order->email=$request->input('email');
        $Order->phoneNumber=$request->input('phoneNumber');
        $Order->productType=$request->input('productType');
        $Order->productName=$request->input('productName');
        $Order->productQuantity=$request->input('productQuantity');
        $Order->productPrice=$request->input('productPrice');
        $Order->productDeliveryAddress=$request->input('productDeliveryAddress');
        $Order->paymentMethod=$request->input('paymentMethod');
        $Order->productDeliveryStatus=$request->input('productDeliveryStatus');
        $Order->productDeliveryDate=$request->input('productDeliveryDate');
                        // Card
        $Order->username=$request->input('username');
        $Order->cardNumber=$request->input('cardNumber');
        $Order->month=$request->input('month');
        $Order->year=$request->input('year');
        $Order->cvv=$request->input('cvv');
        $Order->save();

        return response()->json([
            'status'=>200,
            'message'=>'Register details in database',
        ]);
    }

    public function onlineshow()
    {
        $Order=OrderOnlineModel::all();
        return response()->json([
            'status'=>200,
            'message'=>$Order,
        ]);
    }

    public function onlineedit($id){
        $Order= OrderOnlineModel::find($id);
        return response()->json([
            'status'=>200,
            'message'=>$Order,
        ]);
    }
// find
    public function onlineFind($email){
        $Order= OrderOnlineModel::all()->where('email',$email);
        return response()->json([
            'status'=>200,
            'message'=>$Order,
        ]);
    }

    public function onlineupdate(Request $request,$id)
    {
        $Order= OrderOnlineModel::find($id);
        $Order->name=$request->input('name');
        $Order->email=$request->input('email');
        $Order->phoneNumber=$request->input('phoneNumber');
        $Order->productType=$request->input('productType');
        $Order->productName=$request->input('productName');
        $Order->productQuantity=$request->input('productQuantity');
        $Order->productPrice=$request->input('productPrice');
        $Order->productDeliveryAddress=$request->input('productDeliveryAddress');
        $Order->paymentMethod=$request->input('paymentMethod');
        $Order->productDeliveryStatus=$request->input('productDeliveryStatus');
        $Order->productDeliveryDate=$request->input('productDeliveryDate');
        // card
        $Order->username=$request->input('username');
        $Order->cardNumber=$request->input('cardNumber');
        $Order->month=$request->input('month');
        $Order->year=$request->input('year');
        $Order->cvv=$request->input('cvv');
        $Order->update();

        return response()->json([
            'status'=>200,
            'message'=>'username & password update in database',
        ]);
    }
    public function onlineremove($id){
        $Order= OrderOnlineModel::find($id);
        $Order->delete();
        return response()->json([
            'status'=>200,
            'repose'=>$Order,
            'message'=>'Remove Username & password in Database',
        ]);
    }


}
