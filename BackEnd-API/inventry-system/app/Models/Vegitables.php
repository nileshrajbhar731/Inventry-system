<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vegitables extends Model
{
    use HasFactory;

    protected $table= 'vegitables';

    protected $fillable=[
        'name',
        'price',
        'quantity',
        'totalQuantity',
        ];


}
