<?php

namespace App\Controller;

use Silex\Application;
use App\Model\DefaultException;
use App\Model\PortfolioModel;
use Doctrine\DBAL\Connection;

class Portfolio {

    public function showPortfolio(Application $app) 
    {
      return $app['twig']
      ->render('Portfolio.twig', array('sites' => $this->getContent($app['db'])));
    }

    private function getContent(Connection $db) 
    {
      $pfmodel = new PortfolioModel($db);
      return $pfmodel->getAll();
    }

    public function getPortfolio(Application $app, $id)
    {
      $pfmodel = new PortfolioModel($app['db']);
      $data = $pfmodel->getOne($id);
      return json_encode($data);
    }

    public function getWebsiteInformations(Application $app, $id)
    {
      $pfmodel = new PortfolioModel($app['db']);
      $data = $pfmodel->getOneWebsiteInformations($id);
      return json_encode($data);
    }
}
