<?php

namespace MonProjet\Controller;

use Silex\Application;
use MonProjet\Model\DefaultException;
use MonProjet\Model\PortfolioModel;

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
