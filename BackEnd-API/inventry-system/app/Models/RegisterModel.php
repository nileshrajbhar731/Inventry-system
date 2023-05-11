<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class RegisterModel extends Model
{
    use HasFactory,HasApiTokens;

protected $table= 'register';
protected $fillable=[
'fullName',
'email',
'phoneNumber',
'password',
'active',
'usertype'
];

protected $hidden = [
    'password',
    'remember_token',
];
}
