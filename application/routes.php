<?php

// On utilise symboliquement l'opérateur de résolution de méthode ::
$app->get('/', 'MonProjet\Controller\Home::show')
->bind('home');

$app->get('/portfolio', 'MonProjet\Controller\Portfolio::showPortfolio')
->bind('portfolio');

$app->get('/contact', 'MonProjet\Controller\Contact::showContact')
->bind('contact');