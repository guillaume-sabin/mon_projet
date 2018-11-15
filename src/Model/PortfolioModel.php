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
        $sql = 'SELECT * FROM website';

        return $this->db->queryAll($sql);
    }

    public function getOne($id) {
        $sql = $this->queryBuilder->select('id', 'url', 'descriptio', 'name')
                                ->from('website')
                                ->where('id = ?')
                                ->setParameter(0, $id)
        /*
        $sql = 'SELECT `id`, `url`, `description`, `name` 
                FROM `website` 
                WHERE `id` = '.$id;
        */
        return $this->db->queryOne($sql);
    }

    public function getOneWebsiteInformations($id) {
        $sql = 'SELECT * 
                FROM `website` 
                WHERE `id` = '.$id;

        return $this->db->queryOne($sql);
    }
}
