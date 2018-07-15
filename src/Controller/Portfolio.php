<?php

namespace App\Controller;

use Silex\Application;
use App\Model\DefaultException;
use App\Model\PortfolioModel;
use Doctrine\DBAL\Connection;

class Portfolio {

    public function showPortfolio(Application $app) {
      $pf = $this->getContent($app['db']);
      return $app['twig']->render('Portfolio.twig');
    }

    private function getContent(Connection $db) {
      $pf = new PortfolioModel($db);
      return $pf->getAll();
    }
}
