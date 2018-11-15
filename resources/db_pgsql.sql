CREATE TABLE author (
  id int(11) NOT NULL AUTO_INCREMENT,
  firstname varchar(255) NOT NULL,
  lastname varchar(255) NOT NULL,
  number integer NOT NULL,
  mail varchar(255) NOT NULL,
  photo varchar(255) NOT NULL
);

INSERT INTO author VALUES (2, 'Guillaume', 'Sabin', 777310018, 'guillaume.sabin@gmail.com', 'photo-cv.jpg', 'https://www.linkedin.com/in/guillaume-sabin-348285160/', 'https://github.com/guillaume-sabin');

CREATE TABLE website (
  id  SERIAL PRIMARY KEY,
  url text NOT NULL,
  description varchar(100) NOT NULL,
  name varchar(60) NOT NULL,
  languages text NOT NULL,
  frameworks text NOT NULL,
  technical_description text NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO website VALUES (1, 'blog.png', 'illustration du projet blog', 'Blog', 'HTML, PHP, SQL, CSS', 'Aucun', 'L\'idée était de créer un blog, sans l\'utilisation de framework, uniquement avec des languages natifs.\r\nLa plus grosse partie se situant au niveau des requêtes SQL, ainsi que la manipulation de ces données avec PHP.\r\nCe blog contient également un système de commentaire pour les différents articles, ainsi qu\'un back office qui permet l\'administration du site.');
INSERT INTO website VALUES (3, 'fastfood.png', 'projet de fast-food en ligne', 'Restaurant', 'HTML, PHP, CSS, JavaScript', 'jQuery, Micro-framework PHP homemade de la 3WA', 'Première manipulation d\'un micro-framework PHP, on retrouve sur ce site un système de création de compte ainsi que la possibilité de commander différents produits avec un système de \"panier\" enregistrer côté client et/ou en base de donnée. L\'utilisation du concept de programmation AJAX à également été nécessaire pour la manipulation du \"panier\".');
INSERT INTO website VALUES (4, 'adressbook.png', 'Création d\'un carnet d\'adresse dynamique', 'Carnet d\'adresse', 'HTML, CSS, JavaScript', 'Aucun', 'L\'une de mes première réalisation consistait à créer un carnet d\'adresse qui soit stocké dans le LocalStorage côté client.');
INSERT INTO website VALUES (6, 'magicslate.png', 'Création d\'une ardoise magique', 'Ardoise magique', 'HTML, CSS, JavaScript', 'jQuery', 'Le concept est plutôt simple et loin d\'être nouveau, la création d\'une ardoise, où l\'on peut modifier l\'épaisseur du trait, sa couleur ainsi que gommer.\r\nUne sorte de \"Paint\" en somme, l’intérêt principale était la manipulation de l\'élément canvas pour un rendu dynamique à l\'aide de JavaScript.');
