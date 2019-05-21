<?php
  
  function poetic_wp_lite_play_register_type_game() {

    $args = array(
      'public' => true,
      'labels' => array(
        'name' => __( 'Games' ),
        'singular_name' => __( 'Game' )
      ),
      'menu_icon' => 'dashicons-megaphone',
      'supports' => array(
        'title',
        'editor',
        'custom-fields',
        'thumbnail'
      ),
      'show_in_rest' => true,
    );

    register_post_type( 'game', $args );
  }
  
  add_action( 'init', 'poetic_wp_lite_play_register_type_game' );  
?>