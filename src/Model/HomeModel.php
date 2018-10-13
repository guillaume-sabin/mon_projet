<?php

namespace App\Model;

use App\Database;
use Doctrine\DBAL\Connection;

class HomeModel {

    private $db;

    public function __construct(Connection $db) 
    {
        $this->db = new Database($db);
    }

    public function getAll() 
    {
        $sql = 'SELECT * FROM author';

        return $this->db->queryAll($sql);
    }
}
