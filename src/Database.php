<?php

namespace App;

//use Silex\Application;
use Doctrine\DBAL\Connection;

class Database {

    private $db;

    public function __construct(Connection $conn) {
        $this->db = $conn;
    }

    private function prepare($sql) {
      return $this->db->prepare($sql);
    }

    public function queryAll($query) {
      
        return $this->db->fetchAll($query);
    }

    public function queryOne($query, $id) {
        
        return $this->db->fetchAssoc($query, [':id' => $id]);
    }

    public function executeSql($sql, $params = []) {
        
    }
}
