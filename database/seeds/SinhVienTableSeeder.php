<?php

use Illuminate\Database\Seeder;
//use DateTime;

class SinhVienTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('sinhvien')->insert(
        	[
        		[
		        	'name' => str_random(10),
		        	'email' => str_random(10).'@gmail.com',
		        	'age' => 23,
		        	'phone' => '01666068838',
		        	'created_at' => new DateTime()
		        ],
        		[
		        	'name' => str_random(10),
		        	'email' => str_random(10).'@gmail.com',
		        	'age' => 12,
		        	'phone' => '02666068838',
		        	'created_at' => new DateTime()
		        ],
        		[
		        	'name' => str_random(10),
		        	'email' => str_random(10).'@gmail.com',
		        	'age' => 22,
		        	'phone' => '03666068838',
		        	'created_at' => new DateTime()
		        ],
        		[
		        	'name' => str_random(10),
		        	'email' => str_random(10).'@gmail.com',
		        	'age' => 28,
		        	'phone' => '04666068838',
		        	'created_at' => new DateTime()
		        ],		        		        		        
        	]
        );
    }
}
