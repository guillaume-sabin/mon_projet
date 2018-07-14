<?php

namespace App;

use Silex\Application as SilexApp;
use Silex\Provider\AssetServiceProvider as AssetServiceProvider;
use Silex\Provider\DoctrineServiceProvider as DoctrineServiceProvider;
use Silex\Provider\TwigServiceProvider as TwigServiceProvider;

class Application extends SilexApp {

    private $env;

    public function __construct($env) {
        parent::__construct();

        $this->env = $env;
        $this->loadConfiguration();

        $this->registerTwigServiceProvider();
        $this->registerDoctrineServiceProvider();
        $this->registerAssetServiceProvider();
    }

    /**
    * Chargement du moteur de template Twig par le biais de Silex
    */
    private function registerTwigServiceProvider() {
      $this->register(new TwigServiceProvider(), array(
          'twig.path' => __DIR__.'/Views',
      ));
    }

    /**
    * Connexion à la BDD
    */
    private function registerDoctrineServiceProvider() {
      $this->register(new DoctrineServiceProvider(), array(
          'db.options' => array(
            'driver'   => $_SERVER['APP_DATABASE_DRIVER'],
            'host'     => $_SERVER['APP_DATABASE_HOST'],
            'user'     => $_SERVER['APP_DATABASE_USER'],
            'password' => $_SERVER['APP_DATABASE_PASSWORD'],
            'dbname'   => $_SERVER['APP_DATABASE_NAME'],
            'charset'  => $_SERVER['APP_DATABASE_CHARSET'],
            'port'     => $_SERVER['APP_DATABASE_PORT']
          )
      ));
    }

    /**
    * Chargement des methodes assets à Silex et donc à Twig (grâce au twig-bridge)
    */
    private function registerAssetServiceProvider() {
      $this->register(new AssetServiceProvider(), array(
          'assets.named_packages' => array(
              'css'           => array('base_path' => '/assets/css'),
              'images'        => array('base_path' => '/assets/img'),
              'javascript'    => array('base_path' => '/assets/js'),
              'js_classes'    => array('base_path' => '/assets/js/classes'),
              'animejs'    	  => array('base_path' => '/assets/js/node_modules/animejs'),
              'parallax'    	=> array('base_path' => '/assets/js/parallax.js-1.5.0')
          )
      ));
    }

    private function loadConfiguration() {
      $app = $this;
      if (file_exists(dirname(__DIR__).'../config/'.$this->env.'.php')) {
          require dirname(__DIR__).'../config/'.$this->env.'.php';
      }
    }
}
