<?php

namespace App\Model;

use App\Database;
use Doctrine\DBAL\Connection;

class PortfolioModel {

    private $db;
    private $queryBuilder;

    public function __construct(Connection $conn) {
        $this->db = new Database($conn);
        $this->queryBuilder = $conn->createQueryBuilder();
    }

    public function getAll() {
        // Equivalent to $query = 'SELECT * FROM website';
        $query = $this->queryBuilder
        ->select('*')
        ->from('website');
        return $this->db->queryAll($query);
    }

    public function getOne($id) {
        $query = $this->queryBuilder
        ->select('id, url, description')
        ->from('website')
        ->where('id = :id');

        return $this->db->queryOne($query, $id);
    }

    public function getOneWebsiteInformations($id) {
        $query = $this->queryBuilder
        ->select('*')
        ->from('website')
        ->where('id = :id');

        return $this->db->queryOne($query, $id);
    }
}
