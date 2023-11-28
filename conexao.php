<?php

    $db_name = 'bdTodoList';
    $db_host = 'localhost';
    $db_user = 'root';
    $db_password = '';

    $dns = "mysql:host=$db_host;dbname=$db_name";
    $pdo = new PDO($dns, $db_user, $db_password); 

?>