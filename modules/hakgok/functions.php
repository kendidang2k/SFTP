<!-- <?php
function my_scripts_before()
{
global $wp;
$page_slug = add_query_arg(array(), $wp->request);

wp_enqueue_style('main-style', HAKGOK_ASSETS . '/css/main.css', array(), '1.0', 'all');
wp_enqueue_style('news-style', HAKGOK_ASSETS . '/css/news.css', array(), '1.0', 'all');
wp_enqueue_script('main', HAKGOK_ASSETS . '/js/main.js', array('jquery'), null, true);
wp_enqueue_script('react', HAKGOK_LIB . 'react.production.min.js', array(), false, false);
wp_enqueue_script('react-dom',  HAKGOK_LIB . '/react-dom.production.min.js', array('react'), false, false);
wp_enqueue_script('babel',  HAKGOK_LIB . '/babel.min.js', array('react-dom'), false, false);
wp_enqueue_script('mui', HAKGOK_LIB . '/material-ui.production.min.js', array(), false, false);

//i18n lib
// wp_enqueue_script('i18next-sup', HAKGOK_LIB . '/index.d.ts', array(), false, false);
// wp_enqueue_script('i18next', HAKGOK_LIB . '/i18next.js', array(), false, false);
// wp_enqueue_script('react-i18next', HAKGOK_LIB . '/react-i18next.min.js',array(), false, false);
// wp_enqueue_script('react-i18next-be', HAKGOK_LIB . '/i18nextHttpBackend.js',array(), false, false);
// wp_enqueue_script('react-i18next-be-sup', HAKGOK_LIB . '/httpBackend.d.js',array(), false, false);
// wp_enqueue_script('react-i18next-lang', HAKGOK_LIB . '/i18nextBrowserLanguageDetector.js',array(), false, false);
// wp_enqueue_script('i18n-handle', HAKGOK_URL . '/i18n.js', array(), false, false);
// wp_enqueue_script('react-i18next-useTranslation', HAKGOK_LIB . '/useTranslation.js', array(), false, false);

//context
wp_enqueue_script('news-provider', HAKGOK_CONTEXT . '/NewsProvider.js', ['wp-element'], null, true);
wp_enqueue_script('store', HAKGOK_CONTEXT . '/StoreProvider.js', ['wp-element'], null, true);
wp_enqueue_script('language-context', HAKGOK_CONTEXT . '/LanguageProvider.js', ['wp-element'], null, true);

// News page import 
wp_enqueue_script('news-list', HAKGOK_COMPONENTS . '/organisms/NewsList/NewsList.js', ['wp-element'], null, true);
wp_enqueue_script('news-nav-item', HAKGOK_COMPONENTS . '/molecules/NewsNavItem/NewsNavItem.js', ['wp-element'], null, true);
wp_enqueue_script('news-nav', HAKGOK_COMPONENTS . '/organisms/NewsNav/NewsNav.js', ['wp-element'], null, true);
wp_enqueue_script('news-item', HAKGOK_COMPONENTS . '/molecules/NewsItem/NewsItem.js', ['wp-element'], null, true);
wp_enqueue_script('user-news', HAKGOK_COMPONENTS . '/organisms/UserNews/UserNews.js', ['wp-element'], null, true);
wp_enqueue_script('header', HAKGOK_COMPONENTS . '/organisms/Header/Header.js', ['wp-element'], null, true);
wp_enqueue_script('weather-block', HAKGOK_COMPONENTS . '/molecules/Weather/Weather.js', ['wp-element'], null, true);
wp_enqueue_script('search-bar', HAKGOK_COMPONENTS . '/molecules/SearchBar/SearchBar.js', ['wp-element'], null, true);
wp_enqueue_script('setting', HAKGOK_COMPONENTS . '/molecules/Setting/Setting.js', ['wp-element'], null, true);

//component
wp_enqueue_script('todo', HAKGOK_ASSETS . '/js/TodoList.js', ['wp-element'], null, true);
wp_enqueue_script('button', HAKGOK_COMPONENTS . '/atoms/Button/Button.js', ['wp-element'], null, true);
wp_enqueue_script('banner', HAKGOK_COMPONENTS . '/organisms/Banner/Banner.js', ['wp-element'], null, true);
wp_enqueue_script('postlist', HAKGOK_COMPONENTS . '/organisms/PostList/PostList.js', ['wp-element'], null, true);
wp_enqueue_script('post', HAKGOK_COMPONENTS . '/molecules/Post/Post.js', ['wp-element'], null, true);
wp_enqueue_script('home', HAKGOK_URL . '/index.js', ['wp-element'], null, true);
wp_enqueue_script('news', HAKGOK_PAGES . '/News/index.js', ['wp-element'], null, true);
add_filter('script_loader_tag', 'add_babel_type', 10, 3);

// sleep(5);

function add_babel_type($tag, $handle, $src)
{
  if ($handle != 'home' && $handle != 'news' && $handle != 'header' && $handle != 'setting' && $handle != 'user-news'  && $handle != 'weather-block' && $handle != 'search-bar' && $handle != 'news-nav-item' && $handle != 'news-list' && $handle != 'news-nav' && $handle != 'news-item' && $handle != 'news-provider' && $handle != 'store' && $handle != 'language-context' && $handle != 'todo' && $handle != 'button' && $handle != 'banner' && $handle != 'postlist' && $handle != 'post') {
    return $tag;
  }

  return '<script src="' . $src . '" type="text/babel"></script>' . "\n";
}

// wp_enqueue_script('contract', INVEST_URL . 'assets/js/contract.js', array(), false, false);

$bannerData = array(
  'title' => "Your personal browser",
  'content' => "Faster, safer and smarter than default browsers. Fully-featured for privacy, security, and so much more. See More",
);
wp_localize_script('banner', 'bannerData', $bannerData);

}
add_action('wp_enqueue_scripts', 'my_scripts_before');
add_filter('use_block_editor_for_post', '__return_false', 10);

function json_basic_auth_handler( $user ) {
global $wp_json_basic_auth_error;

$wp_json_basic_auth_error = null;

// Don't authenticate twice
if ( ! empty( $user ) ) {
  return $user;
}

// Check that we're trying to authenticate
if ( !isset( $_SERVER['PHP_AUTH_USER'] ) ) {
  return $user;
}

$username = $_SERVER['PHP_AUTH_USER'];
$password = $_SERVER['PHP_AUTH_PW'];

/**
 * In multi-site, wp_authenticate_spam_check filter is run on authentication. This filter calls
 * get_currentuserinfo which in turn calls the determine_current_user filter. This leads to infinite
 * recursion and a stack overflow unless the current function is removed from the determine_current_user
 * filter during authentication.
 */
remove_filter( 'determine_current_user', 'json_basic_auth_handler', 20 );

$user = wp_authenticate( $username, $password );

add_filter( 'determine_current_user', 'json_basic_auth_handler', 20 );

if ( is_wp_error( $user ) ) {
  $wp_json_basic_auth_error = $user;
  return null;
}

$wp_json_basic_auth_error = true;

return $user->ID;
}
add_filter( 'determine_current_user', 'json_basic_auth_handler', 20 );

function json_basic_auth_error( $error ) {
// Passthrough other errors
if ( ! empty( $error ) ) {
  return $error;
}

global $wp_json_basic_auth_error;

return $wp_json_basic_auth_error;
}
add_filter( 'rest_authentication_errors', 'json_basic_auth_error' );

// var_dump( get_stylesheet_directory_uri().'../../lib/react-dom.production.min.js'); -->