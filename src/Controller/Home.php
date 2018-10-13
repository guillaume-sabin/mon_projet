<?php

namespace App\Controller;

use Silex\Application;
use App\Model\DefaultException;
use App\Model\HomeModel;
use Doctrine\DBAL\Connection;

class Home {
    // Préciser le typage qui correspond au use utilisé plus haut, si on utilise un ALIAS (AS)
    // On devra préciser celui-ci pour le typage de l'argument
    public function show(Application $app)
    {
      return $app['twig']->render('Home.twig', array('contacts' => $this->getContent($app['db'])));
    }

    private function getContent(Connection $db) 
    {
      $homeModel = new HomeModel($db);
      return $homeModel->getAll();
    }
}
