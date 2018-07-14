<?php

namespace App;

use Silex\Application as App;

class Routes {

  /**
  *
  * Enable Silex Application routes
  *
  * @param App $app
  */
  public function __construct($app) {
    $app->get('/', 'App\Controller\Home::show')->bind('home');
    $app->get('/portfolio', 'App\Controller\Portfolio::showPortfolio')->bind('portfolio');
    $app->get('/contact', 'App\Controller\Contact::showContact')->bind('contact');
  }

}
