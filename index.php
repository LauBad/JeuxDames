<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <link href="https://fonts.googleapis.com/css?family=Luckiest+Guy" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
  </head>
  <body id="body">
     <?php 
include "libs/crud.php";

?>

    <?php if(isset($msg_crud)): ?>
    <p>
        <?php echo $msg_crud; unset($msg_crud) ?>
    </p>
    <?php endif; ?>
<section class="profil" id="profil">
  <img src="" alt="">
    <p>Choisi ton Avatar</p>
    <form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
      <input class="input" name="nom" type="text" placeholder="Ton pseudo" value="" required="" oninvalid="this.setCustomValidity('Oops essaye encore')" oninput="setCustomValidity('')"><input class="input" name="age" type="number" placeholder="Ton âge" value="" required=""><textarea class="input" name="description" id="" cols="30" rows="10" placeholder="Decris toi en quelques mots" required=""></textarea></p>
        <div>
            <input id="submit" class="submit" name="create_profil" type="submit" value="Créer ton profil" class="btn">
        </div>
    </form>


<!--     <?php if (isset($profil_) && count($profil_)): ?>
    <p>Tes informations :</p>
    <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        <table>
            <tr>
                <?php
                $meta2 = $exec->getColumnMeta(0);
                $nbrCol = $exec->columnCount();
                     for ($x=0; $x < $nbrCol ; $x++){
                         $meta = $exec->getColumnMeta($x);
                         echo "<th>" . $meta['name'] . "</th>";
                     }?>
                    <th>
                        <button type="submit" name="delete_profil_" class="btn danger">Supprime ton profil</button>
                    </th>
            </tr>

            <?php foreach($profil_ as $profil) {
                echo "<tr>";
                foreach($profil as $val) {
                    $col_name = isset($val) ? $val : "N.R";
                    echo " <td> $col_name </td>";
                }
                echo "<td class=\"tdCenter\"><a class=\"btn\" href=\"libs/edit-profile.php?id=$profil->id\">Modifie ton profil</td>";
                echo "
                <td class=\"tdCenter\"><input id=\"user_$profil->id\" name=\"delete_profil_ids[]\" type=\"checkbox\" value=\"$profil->id\"></td>
                </tr>";
            } ?>
            </table>
    </form>        
    <?php endif ?> -->
</section>
<section id="vueProfil" class="vueProfil">

  
</section>
   <section id="accueil" class="acc">
      <!-- <h1 class="h1">Damers</h1> -->
      <button class="num1"><i class="fas fa-database"></i> Nouvelle partie</button>
      <button class="num2"><i class="fas fa-users"></i> Multijoueurs</button>
      <button class="num3"><i class="fas fa-cogs"></i> Paramètres</button>
      <button class="num4"><i class="fas fa-bomb"></i> Démo</button>
      <br>
      <button disabled="disabled" class="num5"><img src="assets/img/coins.png" alt=""> 367</button>
    </section>
    <nav id="nav" class="none">
      <h2>Damers</h2>
<!--       <a href="#" data-activates="slide-out" class="button-collapse"><i class="fas fa-bars fa-2x material-icons" id="menuh"></i></a> -->
      <div id="menuh">
        <i class="fas fa-bars fa-2x"></i>
      </div>
    </nav>
      <ul id="slide-out" class="side-nav">
      <i class="close" id="close"></i>
        <li><a class ="save" style="font-size: 25px; border-color: black; background-color: inherit;" onclick='save()'><button class="white waves-effect waves-yellow">Sauvegarder la partie</button></a></li>
        <li><a href="#!" style="font-size: 25px; background-color: inherit;" id="reprendre"><button class="white waves-effect waves-yellow">Reprendre la partie</button></a></li>
        <li><a href="#!" style="font-size: 25px; background-color: inherit;"><button class="white waves-effect waves-yellow">Voir les thèmes</button></a></li>
        <li><a href="#!" style="font-size: 25px; background-color: inherit;" onclick='reload()'><button class="white waves-effect waves-yellow">Nouvelle partie</button></a></li>
        <li><div class="divider"></div></li>
        <li><a href="#accueil" style="font-size: 25px; background-color: inherit;"><button id="quitter" class="white waves-effect waves-yellow">Quitter</button></a></li>
<!--         <a href="#!" class="waves-effect waves-circle waves-light btn-info">
          <i class="material-icons inf" href="">info</i>
        </a> -->
      </ul>
    
    <div class="center row">
      <div id="board">
      </div>
      <div class="themes"></div>
      <div class="info">
        <h2 class="white-text">Règle du jeu</h2>
        <p class="white-text">Un pion se déplace uniquement vers l’avant, en diagonale et d’une rangée à l’autre. Si bien que les pions seront durant toute la partie du jeu sur les cases foncées.
        </p>
        <p class="white-text">
        Pour prendre un pion à son adversaire, le pion du joueur A doit passer par dessus le pion du joueur B seulement si celui-ci est diagonalement collé en sachant qu’il est obligatoire que la case derrière soit libre. Si c’est le cas, le joueur A enlève du damier le pion adverse.
        Bien qu’il soit impossible de reculer au jeu de dames, cela se fait lors d’une attaque mais bien évidemment toujours en diagonale et avec une case libre derrière.</p>
        <p class="white-text">Le joueur déclaré gagnant est celui qui a réussi à prendre tous les pions de son adversaire.</p>
      </div>
    </div>
<script type="text/javascript" src="assets/js/script.js"></script>
<script src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
<script>

  $(".button-collapse").sideNav();
  $(".accueil").hide();

</script>
        <script src="/socket.io/socket.io.js"></script>
        <script>
            var socket = io.connect('http://localhost:8081');
        </script>
</body>
</html>
