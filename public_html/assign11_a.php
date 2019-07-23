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
            <?php if ($_POST["submit"] == "Cancel"){
            echo "Your purchased has been cancelled";
        }
        else{
            echo "Your purchased has been confirmed";
        } 
        ?>
            </li>
         </ul>


         
    </section>
   </body>
</html>

