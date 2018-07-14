<?php

namespace App;

use Silex\Application;
use Silex\Provider\DoctrineServiceProvider;

class Database{

    // PROP
    private $db;

    // METHODS

    // Constructor
    public function __construct(Application $app){

        $this->db = $app;
        $this->db->register(new Silex\Provider\DoctrineServiceProvider(), array(
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
    }

    public function queryAll($sql, $params = []){

        // Récupération de la requête
        $query = $this->db->prepare($sql);

        // Execution de la requête avec les paramêtres qui doivent être envoyé sous forme de tableau
        $query->execute($params);

        // Retourne LES résultatS de la requête
        return $query->fetchAll(PDO::FETCH_ASSOC);
    }

    public function queryOne($sql, $params = []){

        $query = $this->db->prepare($sql);

        $query->execute($params);

        // Retourne LE résultat de la requête
        return $query->fetch(PDO::FETCH_ASSOC);
    }

    public function executeSql($sql, $params = []){

        $query = $this->pdo->prepare($sql);

        // Envoye des données en BDD
        $query->execute($params);
    }
}
