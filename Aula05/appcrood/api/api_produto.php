<?php
    require_once 'headers.php';
    
    require_once 'conexao.php';
   
    date_default_timezone_set('America/Sao_Paulo');
    @session_start();
    
    if($_SERVER['REQUEST_METHOD'] === 'GET'){
        if(isset($_GET['codigo'])){
            $id = $con->real_escape_string($_GET['codigo']);
            $sql = $con->query("select * from produto where codigo= '$id'");
            $data = $sql->fetch_assoc();
        } else {
            $data = array();
            $sql = $con->query("select * from produto");
            while($d = $sql->fetch_assoc()){
                $data[]= $d;
            }
        }
        exit(json_encode($data));
    }

    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $data  = json_decode(file_get_contents("php://input"));
        $sql = $con->query("insert into produto (descricao, quantidade, valor) values ('".$data->descricao."','".$data->quantidade."','".$data->valor."')");   
        if($sql){
            $data->id = $con->insert_id;
            exit(json_encode($data));

        }else{
            exit(json_decode(array('status' => 'Deu ruim')));
        }
    }

    if($_SERVER['REQUEST_METHOD'] === 'PUT'){
        if(isset($_GET['codigo'])){
            // a função real_escape_string remove quaisquer caracteres especiais que possam interferir nas operações de consulta
            $id = $con->real_escape_string($_GET['codigo']);
            $data = json_decode(file_get_contents("php://input"));
            $sql = $con->query("update produto set descricao = '".$data->descricao."', quantidade = '".$data->quantidade."', valor = '".$data->valor."' where codigo = '$id'");
            if($sql){
                exit(json_encode(array('status'=> 'successo')));
            }else{
                // vamos testar um erro no código acima
                exit(json_encode(array('status'=> 'Deu ruim')));
            }
        }
    }
    
    if($_SERVER['REQUEST_METHOD'] === 'DELETE'){
        if(isset($_GET['codigo'])){
            $id = $con->real_escape_string($_GET['codigo']);
            $sql = $con->query("delete from produto where codigo = '$id'");
        
            if($sql){
                exit(json_encode(array('status' => 'successo')));
            }else{
                exit(json_encode(array('status' => 'Deu ruim')));
            }
        }
    }
?>