<?php    

  function poetic_wp_play_lite_populate_game_groups_filter( $field )
  {	
    // reset choices
    $field['choices'] = array();

    // BuddyPress Groups
    // https://github.com/buddypress/BuddyPress/blob/master/src/bp-groups/bp-groups-functions.php

    if (function_exists('groups_get_groups')) {
        
      $groups = groups_get_groups();
      $groups = @$groups['groups'] ? $groups['groups'] : array();
    
      foreach ($groups as $group) {

        $field['choices'][$group->id]= $group->name;
      }
    }

    return $field; 
  }
  
  add_filter(
    'acf/load_field/name=poetic_wp_play_lite_game_groups', 
    'poetic_wp_play_lite_populate_game_groups_filter'
  );
?>