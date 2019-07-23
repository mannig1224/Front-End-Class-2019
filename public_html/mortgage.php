<?php
/* Perform calculations */
$apr = $_GET['apr'];
$term = $_GET['term'];
$amount = $_GET['amount'];
function calculatePayment($apr, $amount, $term)
{
$rate = ($apr/12) / 100;
$month = $term * 12;
$payment = floor(($amount*$rate/(1-pow(1+$rate,(-1*$month))))*100)/100;
return $payment;
}
$monthlyPayment = calculatePayment($apr, $amount, $term);
?>

<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="UTF-8" />
  <title>CS 213 Week 10 - PHP Mortgage Calculator</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <h1>PHP Mortgage Calculator</h1>


  <p>Loan Amount: <?php echo $amount; ?></p>
  <p>APR (Interest): <?php echo $apr; ?></p>
  <p>Loan Term (in years): <?php echo $term; ?></p>

  <p>Monthly Payment: $<?php echo number_format($monthlyPayment, 2); ?></p>
</body>
</html>