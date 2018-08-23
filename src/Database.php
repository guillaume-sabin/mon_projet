<?php

namespace App;

use Doctrine\DBAL\Connection;

class Database {

    private $db;

    public function __construct(Connection $conn) {
        $this->db = $conn;
    }

    private function prepare($sql) {
      return $this->db->prepare($sql);
    }

    public function queryAll($sql, $params = []) {
        // Prépare la requete
        // Execution de la requête avec les paramêtres qui doivent être envoyé sous forme de tableau
        // Retourne LES résultatS de la requête
        /*
        return $this->prepare($sql)
          ->execute($params)
          ->fetchAll(PDO::FETCH_ASSOC);
        */
        return $this->db->fetchAll($sql);
    }

    public function queryOne($sql, $params = []) {
        /*
        $query = $this->db->prepare($sql);

        $query->execute($params);

        // Retourne LE résultat de la requête
        return $query->fetch(PDO::FETCH_ASSOC);
        */
        return $this->db->fetch($sql);
    }

    public function executeSql($sql, $params = []) {
        /*
        $query = $this->pdo->prepare($sql);

        // Envoye des données en BDD
        $query->execute($params);
        */
    }
}
