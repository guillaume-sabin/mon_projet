CREATE TABLE author (
  firstname varchar(255) NOT NULL,
  lastname varchar(255) NOT NULL,
  number integer NOT NULL,
  mail varchar(255) NOT NULL,
  photo varchar(255) NOT NULL
);

INSERT INTO author VALUES ('Guillaume', 'Sabin', 777310018, 'guillaume.sabin@gmail.com', 'photo-cv.jpg');

CREATE TABLE website (
  id  SERIAL PRIMARY KEY,
  url text NOT NULL,
  description varchar(100) NOT NULL,
  name varchar(60) NOT NULL
);

INSERT INTO website VALUES (1, 'blog.png', 'illustration du projet blog', 'Blog');
INSERT INTO website VALUES (3, 'restaurant.png', 'projet de fast-food en ligne', 'Restaurant');
INSERT INTO website VALUES (4, 'adresse.png', 'Création d''un carnet d''adresse dynamique', 'Carnet d''adresse');
INSERT INTO website VALUES (5, 'todolist.png', 'Création d''un block note dynamique', 'Todolist');
INSERT INTO website VALUES (6, 'ardoise.png', 'Création d''une ardoise magique', 'Ardoise magique');
