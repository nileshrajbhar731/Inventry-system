<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class RetailerBackupDetailsModel extends Model
{
    use HasFactory,HasApiTokens;

    protected $table= '_retailer_backup_details';
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
