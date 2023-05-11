<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderModel extends Model
{
    use HasFactory;

    protected $table= 'UserOrder';
protected $fillable=[
                'name',
            'email',
            'phoneNumber',
            'productType',
            'productName',
            'productQuantity',
            'productPrice',
            'productDeliveryAddress',
            'paymentMethod',
            'productDeliveryStatus',
            'productDeliveryDate',

];

}
