<?php

    include("../headers.php");
    include("../conexao.php");

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $data = json_decode(file_get_contents('php://input'), true);     

        if(isset($data['id']) && isset($data['tarefa'])){
            $id = $data['id'];
            $tarefa = $data['tarefa'];

            try {
                $sql = 'update tb_tarefas set nm_tarefa = :tarefa where id_tarefa = :id';
                $query = $pdo->prepare($sql);
                $query->bindParam(":id", $id);
                $query->bindParam(":tarefa", $tarefa);
                $query->execute();
                
                $sql = 'select * from tb_tarefas';
                $query = $pdo->prepare($sql);
                $query->execute();
    
                $result = $query->fetchAll(PDO::FETCH_ASSOC);
                
                echo json_encode($result);
            } catch (PDOException $e) {
                echo json_encode(array("error" => $e->getMessage()));
            }
        }
        
    }
?>