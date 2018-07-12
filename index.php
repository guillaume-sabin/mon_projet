<?php

require_once 'vendor/autoload.php';

/*
use MonProjet\Controller\Contact as ControllerContact;

new ControllerContact;
*/

/*
use MonProjet\Controller\Contact AS AppContact;
new AppContact();
*/

// https://silex.symfony.com/

/**
use Silex\Application;
$app = new Application();
ou
use Silex\Application AS AppSilex;
$app = new AppSilex();
*/

// Chargement du framework Silex
$app = new Silex\Application();

require __DIR__.'/application/config/dev.php';
require __DIR__.'/application/routes.php';

// Chargement du moteur de template Twig par le biais de Silex
$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__.'/application/views',
));

// Connexion à la BDD
$app->register(new Silex\Provider\DoctrineServiceProvider(), array(
    'db.options' => array(
        'driver'   => 'pdo_mysql',
        'dbname'   => 'mon_projet',
        'host'     => 'localhost',
        'user'     => 'root',
        'password' => '',
        'charset'  => 'UTF8',
        'port'     => '3306'
    ),
));

// Chargement des methodes assets à Silex et donc à Twig (grâce au twig-bridge)
$app->register(new Silex\Provider\AssetServiceProvider(), array(

    'assets.named_packages' => array(

        'css'           => array('base_path' => '/assets/css'),
        'images'        => array('base_path' => '/assets/img'),
        'javascript'    => array('base_path' => '/assets/js'),
        'js_classes'    => array('base_path' => '/assets/js/classes'),
        'animejs'    	=> array('base_path' => '/assets/js/node_modules/animejs'),
		'parallax'    	=> array('base_path' => '/assets/js/parallax.js-1.5.0')
    )
));

// Connexion BDD
$app->register(new Silex\Provider\DoctrineServiceProvider(), array(
    'db.options' => array(
        'driver'   => 'pdo_mysql',
        'dbname'   => 'mon_projet',
        'host'     => 'localhost',
        'user'     => 'root',
        'password' => '',
        'charset'  => 'UTF8',
        'port'     => '3306'
    ),
));


$app->run();
