<?php
//page nft detail
add_shortcode('test_loop', 'test_loop');
function test_loop()
{
    if (is_page('page-loop-post')) {
        $args = array(
            'numberposts' => 10
        );
 
        $latest_posts = get_posts($args);
        wp_localize_script('banner', 'testData', $latest_posts);
    }
}

