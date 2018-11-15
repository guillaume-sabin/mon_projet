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

    public function queryAll($sql) {
      
        return $this->db->fetchAll($sql);
    }

    public function queryOne($sql, $params = []) {
        
        $data = $this->db->fetchAssoc($sql, $params);
        return $data[0];
    }

    public function executeSql($sql, $params = []) {
        
    }
}
