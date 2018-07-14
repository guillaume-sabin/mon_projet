<?php

namespace App\Controller;

use Silex\Application;
use Model\DefaultException;
use Model\PortfolioModel;

class Portfolio
{
    public function showPortfolio(Application $app)
    {
      $pf = $this->getContent();
      return $app['twig']->render('Portfolio.twig');
    }

    private function getContent()
    {
      $pf = new PortfolioModel();

      return $pf->getAll();
    }
}
