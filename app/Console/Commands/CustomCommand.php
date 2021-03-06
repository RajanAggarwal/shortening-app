<?php
    namespace App\Console\Commands;
    use Illuminate\Console\Command;
    use DB;
    use App\Http\Models\Profile;
    class CustomCommand extends Command
    {
        /**
         * The name and signature of the console command.
         *
         * @var string
         */
        protected $signature = 'custom:command';
        /**
         * The console command description.
         *
         * @var string
         */
        protected $description = 'Delete all inactive users';
        /**
         * Create a new command instance.
         *
         * @return void
         */
        public function __construct()
        {
            parent::__construct();
        }
        /**
         * Execute the console command.
         *
         * @return mixed
         */
        public function handle()
        {
            /*DB::table('users')->where('active', 0)->delete();
            $this->info('All inactive users are deleted successfully!');*/
						$user=Profile::create([
							'firstname' => 'Rohit',
							'lastname' => 'Chadha',
							 'status'=>2,
						]);
        }
    }
