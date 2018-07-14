<?php

namespace App\Model;

use Silex\Application;
use Classe\Database;

class PortfolioModel{

    private $db;

    public function __construct()
    {
        $this->db = new Database();
    }

    public function getAll()
    {
        $sql = 'SELECT * FROM image';

        return $this->db->queryAll($sql);
    }

}
