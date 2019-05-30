<?php

	/**
	*
	* Plugin Name: poetic-wp-play-lite 
	* Plugin URI: http://www.poeticsoft.com/plugins/poetic-wp-play-lite
	* Description: Playmotiv Lite Plugin by Poeticsoft
	* Version: 0.00
	* Author: Alberto Moral
	* Author URI: http://www.poeticsoft.com/albertomoral
	*
  **/	
  // https://wp-and-react.com
  // https://www.codementor.io/victorgerardtemprano/combining-reactjs-and-wordpress-idhdu0v7h
  // https://medium.com/bucharestjs/upgrading-a-create-react-app-project-to-a-ssr-code-splitting-setup-9da57df2040a

	/* DEBUG */
	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	error_reporting(E_ALL);

  if( ! defined( 'ABSPATH' ) ) exit;

  /* STYLES */

  function poetic_wp_play_lite_styles() {

    wp_enqueue_style(
      'poetic_wp_play_lite_styles_admin', 
      plugin_dir_url( __FILE__ ) . 'css/admin.css'
    );
  }

  add_action('admin_enqueue_scripts', 'poetic_wp_play_lite_styles', 1);

  /* TYPES */   
   
  require_once(dirname(__FILE__) . '/types/game.php');   
  require_once(dirname(__FILE__) . '/types/stage.php');  
  require_once(dirname(__FILE__) . '/types/awards.php');

  /* FIELDS */    
   
  require_once(dirname(__FILE__) . '/fields/game-groups.php');
  require_once(dirname(__FILE__) . '/fields/stage-data-excel-file.php');

  /* BLOCKS  */
   
  require_once(dirname(__FILE__) . '/blocks/main.php');

  /* SETUP */

  // DIsable widgets admin home  

  function poetic_wp_play_lite_disable_dashboard_widgets() {

    remove_meta_box('dashboard_right_now', 'dashboard', 'normal');// Remove "At a Glance"
    // remove_meta_box('dashboard_activity', 'dashboard', 'normal');// Remove "Activity" which includes "Recent Comments"
    // remove_meta_box('dashboard_quick_press', 'dashboard', 'side');// Remove Quick Draft
    remove_meta_box('dashboard_primary', 'dashboard', 'core');// Remove WordPress Events and News
  }

  add_action(
    'admin_menu',
    'poetic_wp_play_lite_disable_dashboard_widgets'
  );  

  // No admin bar logo

  function poetic_wp_play_lite_admin_bar_remove_logo() {

    global $wp_admin_bar;
    $wp_admin_bar->remove_menu( 'wp-logo' );
  }

  add_action(
    'wp_before_admin_bar_render', 
    'poetic_wp_play_lite_admin_bar_remove_logo',
    0
  );

  // Admin tools

	function poetic_wp_play_lite_tools_menu() {
		
		global $poetic_wp_play_lite_tools_menu;

		$poetic_wp_play_lite_tools_menu = add_management_page(
			'Play Lite', 
			'Play Lite', 
			'manage_options', 
			'poetic-play-lite-tools', 
			'poetic_wp_play_lite_tools_menu_options'
		);
	}  

	function poetic_wp_play_lite_tools_menu_options() {

		if ( !current_user_can('manage_options') )  {

			wp_die( __( 'You do not have sufficient permissions to access this page.' ) );
		}

		echo '<poetic-play-lite-tools></poetic-play-lite-tools>';
	}

	add_action(
    'admin_menu',
    'poetic_wp_play_lite_tools_menu'
  );  

	function poetic_wp_play_lite_tools_menu_scripts($hook) {
		
		global $poetic_wp_play_lite_tools_menu;
	 
		if( $hook != $poetic_wp_play_lite_tools_menu ) 
			return;

    wp_enqueue_script(
      'poetic_wp_play_lite_tools_menu_script', 
      plugin_dir_url( __FILE__ )  . 'tools/main.js', 
      array(
        'wp-element',
        'wp-components',
        'wp-data'
      ), 
      filemtime(plugin_dir_path( __FILE__ )  . 'tools/main.js'),
      true
    );

    wp_enqueue_style(
      'poetic_wp_play_lite_tools_menu_style',
      plugin_dir_url( __FILE__ ) . 'tools/main.css', 
      array(
        'wp-components'
      ), 
      filemtime(plugin_dir_path( __FILE__ )  . 'tools/main.css'), 
      'all'
    );	
	}

	add_action(
    'admin_enqueue_scripts',
    'poetic_wp_play_lite_tools_menu_scripts'
  );

?>