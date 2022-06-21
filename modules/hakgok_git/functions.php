<?php
function my_scripts_before()
{
    global $wp;
    $page_slug = add_query_arg(array(), $wp->request);

    wp_enqueue_style('main-style', HAKGOK_ASSETS . '/css/main.css', array(), '1.0', 'all');
    wp_enqueue_script('main', HAKGOK_ASSETS . '/js/main.js', array('jquery'), null, true);
}
add_action('wp_enqueue_scripts', 'my_scripts_before');
add_filter('use_block_editor_for_post', '__return_false', 10);