# Changement

## Le 14 juillet 2018

* Composer
  * Prs-4 qui lie tous les fichiers contenus dans `src` avec le namespace racine `App`
    * Exemples:
      `src/Application.php` sera chargé avec `use App\Application`;
      `src/Controller/Home.php` sera chargé avec `use App\Controller\Home;
  * Configuration d'un script de démarrage de l'application. Exécuter la commande `composer start` pour lancer le server.


* Archicture de l'application
  * Dossier `public` qui contient le démarrage de l'application (index.php et les assets)
  * Dossier `src` contient le code de l'application


* Server PHP built-in
  * En phase de développement il n'est pas nécessaire d'installer un apache. PHP contient un server intégré exécutable avec la commande `php -S 0.0.0.0:8008 -t public`. Le dossier public doit contenir un fichier `index.php`. Cette commande est configurée dans le fichier composer.json.


* Les variables d'environnement
  * Pour faciliter la configuration de l'application, on utiliser Dotenv qui charge un fichier et déclare les variables qui seront disponible dans la variable globale `$_SERVER`
  * Le fichier .env.dist est un template de configuration. Il faut le copier en fichier `.env` et surcharger la configuration.
  * Le fichier `.env` n'est pas à mettre sur github (mis dans le .gitignore)


* favicon
  * Ajout d'un favicon qui s'affiche dans l'onglet du navigateur. Fichier `public/favicon.ico`


* Application.php
  * Dans le constructeur, on appelle toutes les méthodes de register de l'application


* Router.php
  * Dans le constructeur on fourni l'application Silex
  * On Déclare les routes de l'application

* Controller
  * Home est disponible via le namespace `App\Controller\Home`
  * Portfolio est disponible via le namespace `App\Controller\Portfolio`
  * Contact est disponible via le namespace `App\Controller\Contact`
