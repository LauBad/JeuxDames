<?php 
include "libs/crud.php";

?>

<?php if($profil !== false): ?>

<form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>" >
     <!-- <input type="hidden" name="id" id="id" class="input" value="<?php echo $profil->id ?>"> -->
        <label for="name">Ton pseudo :</label>
        <input type="text" name="nom" id="nom" class="input" value="<?php echo $profil->nom ?>">
        <label for="age">Ton âge ?</label>
        <input type="number" name="age" id="age" class="input" value="<?php echo $profil->age ?>">
        <label for="description">Description :</label>
        <textarea name="description" id="description" rows="10" cols="50"><?php echo $profil->description ?>
        </textarea>
        <input type="submit" name="update_profil" value="send" class="btn">
</form>

<?php endif; ?>