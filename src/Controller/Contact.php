<?php

namespace App\Controller;

use Silex\Application; // AS App;
use MonProjet\Model\DefaultException;

class Contact
{
    // Préciser le typage qui correspond au use utilisé plus haut, si on utilise un ALIAS (AS)
    // On devra préciser celui-ci pour le typage de l'argument
    public function showContact(Application $app)
    {
      return $app['twig']->render('Contact.twig');
    }
}
