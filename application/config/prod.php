<?php

use Silex\Application; // AS App;
use Silex\Provider\DoctrineServiceProvider;

$app = new Silex\Application;
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