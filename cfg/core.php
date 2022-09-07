<?php
    $conn = new mysqli("localhost", "root", "root", "noname");
    if($conn->connect_error){
        die("Ошибка: " . $conn->connect_error);
    }
    // echo "Подключение успешно установлено";
?>