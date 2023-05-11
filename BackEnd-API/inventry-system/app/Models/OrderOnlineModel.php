<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderOnlineModel extends Model
{
    use HasFactory;

    protected $table= 'UserOnlineOrder';
protected $fillable=[
                'name',
                'cardNumber',
                'cvv',
                'email',
                'month',
                'paymentMethod',
                'phoneNumber',
                'productDeliveryAddress',
                'productDeliveryDate',
                'productDeliveryStatus',
                'productName',
                'productPrice',
                'productQuantity',
                'productType',
                'username',
                'year',

];



}
