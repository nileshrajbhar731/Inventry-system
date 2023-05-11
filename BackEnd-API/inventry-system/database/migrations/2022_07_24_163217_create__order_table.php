<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('UserOrder', function (Blueprint $table) {

            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('phoneNumber');
            $table->string('productType');
            $table->string('productName');
            $table->string('productQuantity');
            $table->string('productPrice');
            $table->string('productDeliveryAddress');
            $table->string('paymentMethod');
            $table->string('productDeliveryStatus');
            $table->string('productDeliveryDate');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('UserOrder');
    }
};
