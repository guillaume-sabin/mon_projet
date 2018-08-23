<?php

namespace App\Controller;

use Silex\Application;
use App\Model\DefaultException;
use App\Model\ContactModel;
use Doctrine\DBAL\Connection;

class Contact
{
    // Préciser le typage qui correspond au use utilisé plus haut, si on utilise un ALIAS (AS)
    // On devra préciser celui-ci pour le typage de l'argument
    public function showContact(Application $app)
    {
      return $app['twig']
      ->render('Contact.twig', array('contacts' => $this->getContent($app['db'])));
    }

    private function getContent(Connection $db) 
    {
      $contactModel = new ContactModel($db);
      return $contactModel->getAll();
    }
}
