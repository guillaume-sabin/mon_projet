<?php

namespace App;

use Silex\Application;

class Routes {

  /**
  *
  * Enable Silex Application routes
  *
  * @param App $app
  */
  public function __construct(Application $app) {
    $app->get('/', 'App\Controller\Home::show')->bind('home');
    $app->get('/portfolio', 'App\Controller\Portfolio::showPortfolio')->bind('portfolio');
    $app->get('/contact', 'App\Controller\Contact::showContact')->bind('contact');
    $app->get('/portfolio/{id}', 'App\Controller\Portfolio::getPortfolio');
    $app->get('/portfolio/{id}/informations', 'App\Controller\Portfolio::getWebsiteInformations');
  }
}
