<?php

namespace App\Controller;

use Silex\Application;
use App\Model\DefaultException;

class Home {
    // Préciser le typage qui correspond au use utilisé plus haut, si on utilise un ALIAS (AS)
    // On devra préciser celui-ci pour le typage de l'argument
    public function show(Application $app)
    {
      return $app['twig']->render('Home.twig');
    }
}
