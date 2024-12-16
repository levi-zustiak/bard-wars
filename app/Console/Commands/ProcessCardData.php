<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class ProcessCardData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:process-card-data';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $files = ['cp1.json', 'cp2.json', 'cp3.json', 'cp4.json', 'cp5.json', 'cp6.json', 'ftg.json'];
        $data = [];

        $landscapes = ['blue plains', 'cornfield', 'useless swamp', 'sandylands', 'nicelands', 'icylands', 'rainbow'];
        $types = ['creature', 'spell', 'building', 'landscape', 'hero', 'teamwork'];

        foreach ($files as $file) {
            $string = file_get_contents('CardWarsData/cards/' . $file);
            $contents = array_values(json_decode($string, TRUE));

            foreach ($contents as &$item) {
                if (!isset($item['landscape'])) {
                   continue;
                }
                unset($item['id']);
                unset($item['set']);
                if (!isset($item['attack'])) {
                    $item['attack'] = null;
                }

                if (!isset($item['defense'])) {
                    $item['defense'] = null;
                }

                $item['image'] = $item['imageurl'];
                unset($item['imageurl']);

                $item['landscape'] = $landscapes[$item['landscape']];
                $item['type'] = $types[$item['type']];

                $data[] = $item;
            }
        }

        $insert = DB::table('cards')->insert(array_values($data));

        if ($insert) {
            $this->info('Successfully imported data');
        } else {
            $this->info('Failed to import data');
        }
    }
}
