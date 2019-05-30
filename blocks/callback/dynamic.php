<?php  

/* Dynamic */

function poetic_wp_play_lite_block_dynamic_render_callback( $attributes, $content) {

  $recent_posts = wp_get_recent_posts(
    array(
      'numberposts' => 5,
      'post_status' => 'publish',
    )
  );

  if (count($recent_posts) === 0) {

    return 'No posts';
  }

  $Result = '';

  foreach($recent_posts as $recent_post) {
    
    $post_id = $recent_post['ID'];

    $Result = $Result . sprintf(
      '<div class="Post"><a class="poetic_wp_play_lite_block_dynamic" href="%1$s">%2$s</a></div>',
      esc_url(get_permalink($post_id)),
      esc_html(get_the_title($post_id))
    );
  }

  return $Result; 
}