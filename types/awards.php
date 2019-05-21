<?php
  
  function poetic_wp_lite_play_register_type_award() {

    $args = array(
      'public' => true,
      'labels' => array(
        'name' => __( 'Awards' ),
        'singular_name' => __( 'Award' )
      ),
      'menu_icon' => 'dashicons-awards',
      'supports' => array(
        'title',
        'editor',
        'custom-fields',
        'thumbnail'
      ),
      'show_in_rest' => true,
    );

    register_post_type( 'award', $args );
  }
  
  add_action( 'init', 'poetic_wp_lite_play_register_type_award' );  
?>