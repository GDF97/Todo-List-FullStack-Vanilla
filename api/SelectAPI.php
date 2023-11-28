<?php

    include("../headers.php");
    include("../conexao.php");

    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        try {
            $sql = 'select * from tb_tarefas';
            $query = $pdo->prepare($sql);
            $query->execute();

            $result = $query->fetchAll(PDO::FETCH_ASSOC);
            
            echo json_encode($result);
        } catch (PDOException $e) {
            echo json_encode(array("error" => $e->getMessage()));
        }
    }

?>