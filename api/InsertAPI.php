<?php

    include("../headers.php");
    include("../conexao.php");

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $data = json_decode(file_get_contents('php://input'), true);     

        if(isset($data['tarefa'])){
            $tarefa = $data['tarefa'];

            try {
                $sql = 'insert into tb_tarefas(nm_tarefa, isCompleted) values(:tarefa, false)';
                $query = $pdo->prepare($sql);
                $query->bindParam(":tarefa", $tarefa);
                $query->execute();

                $result = "ok";

                echo json_encode(array("status" => $result));
            } catch (PDOException $e) {
                echo json_encode(array("error" => $e->getMessage()));
            }
        }
    }

?>