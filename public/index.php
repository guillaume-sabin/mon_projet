<?php

require_once dirname(__DIR__).'/vendor/autoload.php';
(new Symfony\Component\Dotenv\Dotenv())->load('./../.env');

$env = $_SERVER['APP_ENV'] ?? 'prod';
$app = new App\Application($env);
$routes = new App\Routes($app);
$app->run();
