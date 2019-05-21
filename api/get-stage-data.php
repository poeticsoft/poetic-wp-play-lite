<?php

function poetic_wp_play_lite_get_stage_data_endpoint ($params){

  $request = $params->get_params();
  $stageid = $request['stageid'];
  $data = new stdClass();	
  $data->Data = '';
  $data->Status = new stdClass();	

  if($stageid) {

    $data->Status->Code = 'OK';	
    $data->Status->Reason = '';
    $data->Status->Message = 'JSON Data from excel in Stage ' . $stageid;

  } else {

    $data->Status->Code = 'KO';	
    $data->Status->Reason = 'No stage Id provided';
    $data->Status->Message = '';

    return ($data);
  }

  try {

    $stagefile = file_get_contents(WP_PLUGIN_DIR . '/poetic-wp-play-lite/data/stage/' . $stageid . '.json');

    if($stagefile) {				

      $data->Data = json_decode($stagefile, true);
      
    } else {

      $data->Status->Code = 'KO';	
      $data->Status->Reason = 'Error reading stage data file';
      $data->Status->Message = '';
    }

  } catch (Exception $e) {

    $data->Status->Code = 'KO';	
    $data->Status->Reason = $e->getMessage();
    $data->Status->Message = '';
  }

  return ($data); 
}	

add_action(
  'rest_api_init',
  function () {	 
        
    register_rest_route(
      'poeticplaylite', 
      'get-stage-data', 
      array(
        'methods'  => 'POST',
        'callback' => 'poetic_wp_play_lite_get_stage_data_endpoint'
      )
    );
  }
);