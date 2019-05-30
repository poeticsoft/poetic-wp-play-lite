<?php  

  require_once plugin_dir_path(__DIR__) . 'fields/class/phpoffice_phpspreadsheet/vendor/autoload.php';

  use PhpOffice\PhpSpreadsheet\Spreadsheet;
  use PhpOffice\PhpSpreadsheet\IOFactory;
  class XLSX2JSON { }

  function poetic_wp_play_lite_stage_data_excel_file_upload_dir($uploads) {

    $uploads['path'] = $uploads['basedir'].'/stage/data/excel';
    $uploads['url'] = $uploads['baseurl'].'/stage/data/excel';

    return $uploads;
  }

  function poetic_wp_play_lite_stage_data_excel_file_upload_prefilter($errors) {

    add_filter('upload_dir', 'poetic_wp_play_lite_stage_data_excel_file_upload_dir');

    return $errors;
  }
  
  add_filter(
    'acf/upload_prefilter/name=poetic_wp_play_lite_stage_data_excel_file', 
    'poetic_wp_play_lite_stage_data_excel_file_upload_prefilter'
  );

  function poetic_wp_play_lite_stage_data_excel_file_upload_save( $post_id ) {
    
    if( empty($_POST['acf']) ) { return; }

    $PostType = get_post_type( $post_id );
    $FileData = get_field( 'poetic_wp_play_lite_stage_data_excel_file', $post_id );

    if($PostType == 'stage' && $FileData) { 
      
      $FilePath = get_home_path() . str_replace(get_home_url() . '/', '', $FileData['url']);

      try { 

        $Sheets = array();
        
        $Reader = IOFactory::createReader('Xlsx');
        $Reader->setReadDataOnly(true);
        $Reader->setLoadAllSheets();
        $SpreadSheet = $Reader->load($FilePath);
        $SheetNames = $SpreadSheet->getSheetNames();

        foreach ($SheetNames as $Index => $Name) {

          $Sheet = $SpreadSheet->setActiveSheetIndexByName($Name);
          $HighestColumn = $Sheet->getHighestColumn();          
          $HighestRow = $Sheet->getHighestRow();

          $SheetData = new stdClass();	
		      $SheetData->Name = $Name;	
		      $SheetData->Rows = array();

          foreach ($Sheet->getRowIterator() as $row) {

            $CellIterator = $row->getCellIterator();
            $CellIterator->setIterateOnlyExistingCells(false);
            $Cells = array();

            foreach ($CellIterator as $cell) {

              $Cells[] = $cell->getValue();
            }

            $SheetData->Rows[] = $Cells;
          }
          
          $Sheets[] = $SheetData;
        }

        file_put_contents(
          plugin_dir_path(__DIR__) . 'data/stage/' . $post_id . '.json',          
          json_encode($Sheets, JSON_PRETTY_PRINT) . ''
        );

      } catch(Exception  $e) {

        echo $e->getMessage();
      }
    }
  }

  add_action(
    'acf/save_post',
    'poetic_wp_play_lite_stage_data_excel_file_upload_save',
    20
  );

  function poetic_wp_play_lite_stage_data_excel_file_enqueue_admin_files() {

    $Screen = get_current_screen();
    $ScreenId = $Screen->id;
    
    if(
      is_admin()
      &&
      'stage' == $ScreenId
    ) {

      wp_enqueue_script(
        'poetic_wp_play_lite_stage_data_excel_file_script', 
        plugin_dir_url( __FILE__ )  . 'js/stage-data-excel-file.js', 
        array(), 
        filemtime(plugin_dir_path( __FILE__ )  . 'js/stage-data-excel-file.js'),
        true
      );

      wp_enqueue_style(
        'poetic_wp_play_lite_stage_data_excel_file_style',
        plugin_dir_url( __FILE__ ) . 'css/stage-data-excel-file.css', 
        array(), 
        filemtime(plugin_dir_path( __FILE__ )  . 'css/stage-data-excel-file.css'), 
        'all'
      );	
    }
  }

  add_action(
    'admin_enqueue_scripts',
    'poetic_wp_play_lite_stage_data_excel_file_enqueue_admin_files'
  );
?>