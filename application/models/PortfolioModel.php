<?php

namespace MonProjet\Model;

use Silex\Application; // AS App;
use MonProjet\Classe\Database;

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