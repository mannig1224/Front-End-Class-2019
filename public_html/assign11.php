<!DOCTYPE html>
<html lang="en">
      <head>
       <title>Purchase Confirmation</title>
       <link rel="stylesheet" href="style11.css">
       <meta charset="UTF-8">
   </head>
   <body>

         
<section id="flex_second" class="blue_rounded">
      <div class = "commentFormTitle">Purchasing Confirmation</div>

         <ul id="flex_second_wrapper">
            <li class="form-row">
            <?php echo $_POST["firstName"]; ?> <?php echo $_POST["lastName"]; ?> <br>
            <?php echo $_POST["address"]; ?> <br>
            <?php echo $_POST["phoneNumber"]; ?> <br>
            </li>
           
            <div class = "commentFormTitle">Shopping Cart </div>
            <li class="form-row">
              <?php
                $total = 0;
                for ($i = 0; $i < sizeof($_POST["item"]); $i++){
                echo $_POST['item'][$i] . "<br />";
                if ($_POST["item"][$i] == "Iphone X S") {
                  $total = $total + 1350;
                }
                else if ($_POST["item"][$i] == "Samsung") {
                  $total = $total + 1300;
                }
                else if ($_POST["item"][$i] == "Pixel 3a") {
                  $total = $total + 500;
                }
                else if ($_POST["item"][$i] == "Iphone 8 Plus") {
                  $total = $total + 800;
                }
              }
             ?>
            </li>

            <div class = "commentFormTitle"> Total: <?php echo $total;?></div><br>

            <div class = "commentFormTitle"> Card Information</div>
             <li class="form-row">
               <?php echo $_POST["card"];?><br>
               <?php echo $_POST["month"];?> 
               <?php echo "/";?>
               <?php echo $_POST["year"];?><br>
             </li>
             <li class="form-row">
               <form action="assign11_a.php" method="POST">
               <input type="submit" value="Cancel" name="submit">
               <input type="submit" value="Submit" name="submit">
               </form>
             </li>
         </ul>


         
     </section>
   </body>
</html>

