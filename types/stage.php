<?php
  
  function poetic_wp_lite_play_register_type_stage() {

    $args = array(
      'public' => true,
      'labels' => array(
        'name' => __( 'Stages' ),
        'singular_name' => __( 'Stage' )
      ),
      'menu_icon' => 'dashicons-clipboard',
      'supports' => array(
        'title',
        'editor',
        'custom-fields',
        'thumbnail'
      ),
      'show_in_rest' => true,
    );

    register_post_type( 'stage', $args );
  }
  
  add_action( 'init', 'poetic_wp_lite_play_register_type_stage' );  
?>