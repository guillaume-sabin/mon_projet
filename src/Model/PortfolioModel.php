<?php

namespace App\Model;

use App\Database;
use Doctrine\DBAL\Connection;

class PortfolioModel {

    private $db;
    private $queryBuilder;

    public function __construct(Connection $conn) {
        $this->db = new Database($conn);
    }

    public function getAll() {
        $sql = 'SELECT * FROM website';

        return $this->db->queryAll($sql);
    }

    public function getOne($id) {
        $sql = 'SELECT `id`, `url`, `description`, `name` 
                FROM `website` 
                WHERE `id` = ?';

        return $this->db->queryOne($sql, $id);
    }

    public function getOneWebsiteInformations($id) {
        $sql = 'SELECT * 
                FROM `website` 
                WHERE `id` = ?';

        return $this->db->queryOne($sql, $id);
    }
}
