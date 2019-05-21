<?php

// https://css-tricks.com/learning-gutenberg-7-building-our-block-custom-card-block/

/** -----------------------------------------------------------------------
 *  CATEGORY
 */

function poetic_wp_play_lite_blocks_category( $categories, $post) {

  return array_merge(
    $categories,
    array(
      array(
        'slug' => 'poeticplaylite',
        'title' => __( 'Poetic Playmotiv Lite', 'poeticplaylite'),
      ),
    )
  );
}

add_filter( 'block_categories', 'poetic_wp_play_lite_blocks_category', 10, 2);

/** -----------------------------------------------------------------------
 *  REGISTER
 */

function poetic_wp_play_lite_blocks_register() {

  /* Static */

  $StaticBlocks = array(
    'stagesection',
    'stagepart'
  );  

  foreach($StaticBlocks as $BlockName) {

    wp_register_style(
      'poetic_wp_play_lite_block_' . $BlockName . '_style',
      plugins_url('work/' . $BlockName . '.css', __FILE__),
      array( 'wp-blocks'),
      filemtime(__DIR__ . '/work/' . $BlockName . '.css') 
    );

    wp_register_script(
      'poetic_wp_play_lite_block_' . $BlockName . '_edit_script',
      plugins_url('work/' . $BlockName . '.js', __FILE__),
      array(
        'wp-blocks',
        'wp-element',
        'wp-editor',
        'wp-i18n'
      ),
      __DIR__ . '/work/' . $BlockName . '.js' 
    );

    register_block_type(
      'poeticplaylite/' . $BlockName, 
      array(
        'editor_script' =>  'poetic_wp_play_lite_block_' . $BlockName . '_edit_script',
        'style' =>          'poetic_wp_play_lite_block_' . $BlockName . '_style',
      )
    );

    /* Static */

    $DynamicBlocks = array(
      'dynamic'
    );  

  }  
}

add_action('init', 'poetic_wp_play_lite_blocks_register');

/** -----------------------------------------------------------------------
 *  ALLOW
 */
 
function poetic_wp_play_lite_blocks_allowed_types($allowed_blocks, $post) {

  if( $post->post_type === 'post' ) {

		return $allowed_blocks;
	}

  $allowed_blocks = array();

  if( $post->post_type === 'page' ) {

		$allowed_blocks[] = 'core/heading';
		$allowed_blocks[] = 'core/paragraph';
		$allowed_blocks[] = 'core/image';
	}

  if( $post->post_type === 'stage' ) {

		$allowed_blocks[] = 'poeticplaylite/stagesection';
		$allowed_blocks[] = 'poeticplaylite/stagepart';
	}

  if( $post->post_type === 'game' ) {

		$allowed_blocks[] = 'core/cover';
		$allowed_blocks[] = 'core/gallery';
	}
 
	return $allowed_blocks;
}

add_filter(
  'allowed_block_types',
  'poetic_wp_play_lite_blocks_allowed_types',
  10,
  2
);

?>