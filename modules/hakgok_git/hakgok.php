<?php
/*
Plugin Name: Hakgok
Version: 1.0
Description: Hakgok
Author: Tuyen.TB
*/

if (!defined('ABSPATH'))
    exit;

if (!class_exists('HAKGOK')) {
    class HAKGOK
    {
        function __construct()
        {
            if (!defined('HAKGOK_URL')) {
                define("HOME_URL",  home_url());
                define("HAKGOK_URI", plugin_dir_path(__FILE__));
                define("HAKGOK_URL", plugin_dir_url(__FILE__));
                define("HAKGOK_ASSETS", HAKGOK_URL . 'assets');
            }
            //  * @Snippet Add Main Process Function
            //  * @Author Thien Thuc Tap
            require_once(HAKGOK_URI . 'functions.php');
        }
    }
}

function HAKGOK_load()
{
    global $HAKGOK;
    $HAKGOK = new HAKGOK();
}
add_action('plugins_loaded', 'HAKGOK_load');