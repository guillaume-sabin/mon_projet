-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  jeu. 15 nov. 2018 à 09:32
-- Version du serveur :  5.7.21
-- Version de PHP :  7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `mon_projet`
--

-- --------------------------------------------------------

--
-- Structure de la table `author`
--

DROP TABLE IF EXISTS `author`;
CREATE TABLE IF NOT EXISTS `author` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `number` int(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `linkedin` varchar(255) NOT NULL,
  `github` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `author`
--

INSERT INTO `author` (`id`, `firstname`, `lastname`, `number`, `mail`, `photo`, `linkedin`, `github`) VALUES
(2, 'Guillaume', 'Sabin', 777310018, 'guillaume.sabin@gmail.com', 'photo-cv.jpg', 'https://www.linkedin.com/in/guillaume-sabin-348285160/', 'https://github.com/guillaume-sabin');

-- --------------------------------------------------------

--
-- Structure de la table `website`
--

DROP TABLE IF EXISTS `website`;
CREATE TABLE IF NOT EXISTS `website` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` text NOT NULL,
  `description` varchar(100) NOT NULL,
  `name` varchar(60) NOT NULL,
  `languages` text NOT NULL,
  `frameworks` text NOT NULL,
  `technical_description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `website`
--

INSERT INTO `website` (`id`, `url`, `description`, `name`, `languages`, `frameworks`, `technical_description`) VALUES
(1, 'blog.png', 'illustration du projet blog', 'Blog', 'HTML, PHP, SQL, CSS', 'Aucun', 'L\'idée était de créer un blog, sans l\'utilisation de framework, uniquement avec des languages natifs.\r\nLa plus grosse partie se situant au niveau des requêtes SQL, ainsi que la manipulation de ces données avec PHP.\r\nCe blog contient également un système de commentaire pour les différents articles, ainsi qu\'un back office qui permet l\'administration du site.'),
(3, 'fastfood.png', 'projet de fast-food en ligne', 'Restaurant', 'HTML, PHP, CSS, JavaScript', 'jQuery, Micro-framework PHP homemade de la 3WA', 'Première manipulation d\'un micro-framework PHP, on retrouve sur ce site un système de création de compte ainsi que la possibilité de commander différents produits avec un système de \"panier\" enregistrer côté client et/ou en base de donnée. L\'utilisation du concept de programmation AJAX à également été nécessaire pour la manipulation du \"panier\".'),
(4, 'adressbook.png', 'Création d\'un carnet d\'adresse dynamique', 'Carnet d\'adresse', 'HTML, CSS, JavaScript', 'Aucun', 'L\'une de mes première réalisation consistait à créer un carnet d\'adresse qui soit stocké dans le LocalStorage côté client.'),
(6, 'magicslate.png', 'Création d\'une ardoise magique', 'Ardoise magique', 'HTML, CSS, JavaScript', 'jQuery', 'Le concept est plutôt simple et loin d\'être nouveau, la création d\'une ardoise, où l\'on peut modifier l\'épaisseur du trait, sa couleur ainsi que gommer.\r\nUne sorte de \"Paint\" en somme, l’intérêt principale était la manipulation de l\'élément canvas pour un rendu dynamique à l\'aide de JavaScript.');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
