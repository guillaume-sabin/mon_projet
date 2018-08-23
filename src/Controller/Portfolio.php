<?php

namespace App\Controller;

use Silex\Application;
use App\Model\DefaultException;
use App\Model\PortfolioModel;
use Doctrine\DBAL\Connection;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\ParameterBag;

class Portfolio {

    public function showPortfolio(Application $app, Request $req = null) 
    {
      if(isset($req))
      {
        echo json_decode($req);
      }

      return $app['twig']
      ->render('Portfolio.twig', array('sites' => $this->getContent($app['db'])));
    }

    private function getContent(Connection $db) 
    {
      $pfmodel = new PortfolioModel($db);
      return $pfmodel->getAll();
    }
}
