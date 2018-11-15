<?php

namespace App\Model;

use Silex\Application; // use App\Database;
use Doctrine\DBAL\Connection;

class PortfolioModel {

    private $db;

    public function __construct(Application $app) {
        $this->db = $app['db']; // new Database($db);
    }

    public function getAll() {
        $sql = 'SELECT * FROM website';

        return $this->db->fetchAssoc($sql);
    }

    public function getOne($id) {
        $sql = 'SELECT `id`, `url`, `description`, `name` 
                FROM `website` 
                WHERE `id` = ?';

        return $this->db->fetchAssoc($sql, array((int) $id)); // ->queryOne($sql);
    }

    public function getOneWebsiteInformations($id) {
        $sql = 'SELECT * 
                FROM `website` 
                WHERE `id` = ?';

        return $this->db->fetchAssoc($sql, array((int) $id));
    }
}
