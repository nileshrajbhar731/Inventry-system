<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Grocery extends Model
{
    use HasFactory;

    protected $table= 'grocery';
    protected $fillable=[
        'name',
        'nameType',
        'price',
        'quantity',
        'totalQuantity',
        ];
}
