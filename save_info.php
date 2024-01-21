<?php
// save_info.php

if (isset($_POST['addDate']) && $_POST['addDate'] === 'addDate') {
    $selectedDay = $_POST["selected_day"];

    // You can save the information to a database, a file, or perform any other action.
    // For demonstration purposes, we'll just log it to a file.

    $logFile = "clicked_days.txt";
    $logData = date("Y-m-d H:i:s") . " - Selected Day: " . $selectedDay . PHP_EOL;

    file_put_contents($logFile, $logData, FILE_APPEND | LOCK_EX);

    echo "Information saved successfully.";
} else {
    echo "Invalid request.";
}
?>
