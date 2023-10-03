<?php

require_once 'headers.php';

require_once 'conexao.php';

date_default_timezone_set('America/Sao_paulo');
@session_start();

if($_SERVER['REQUEST_METHOD']=== 'GET'){
    if(isset($_GET['id'])){
        $id = $con->real_escape_string($_GET['id']);
        $sql = $con->query("select * from receita where id='$id'");
        $data = $sql->fetch_assoc();
    }else if(isset($_GET['categoria'])){
      
        $categoria = $con->real_escape_string($_GET['categoria']);
        $sql = $con->query("select * from receita where categoria = '$categoria'");
        $data = array();
        while($d = $sql->fetch_assoc()){
            $data[] = $d;
        }
    }else{
        $data = array();

        $sql = $con->query("select * from receita");
        while($d = $sql->fetch_assoc()){
            $data[] = $d;
        }
    }
    exit(json_encode($data));
}

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $data = json_decode(file_get_contents("php://input"));

    $sql = $con->query("insert into receita (descricao, categoria , ingredientes , preparo , cheff) values ('".$data->descricao."','".$data->categoria."','".$data->ingredientes."','".$data->preparo."','".$data->cheff."')");
    if($sql){
        $data->id = $con->insert_id;
        exit(json_encode($data));
    }else{
        exit(json_decode(array('status'=> 'nâo pegou')));
    }
}

if($_SERVER['REQUEST_METHOD'] === 'PUT'){
    if(isset($_GET['id'])){
       
        $id = $con->real_escape_string($_GET['id']);

        $data = json_decode(file_get_contents("php://input"));
       
        $sql = $con->query("update receita set descricao = '".$data->descricao."', categoria = '".$data->categoria."', ingredientes = '".$data->ingredientes."',  preparo = '".$data->preparo."', cheff = '".$data->cheff."' where id = '$id'");
        if($sql){
            exit(json_encode(array('status'=> 'successo')));
        }else{
            // vamos testar um erro no código acima
            exit(json_encode(array('status'=> 'Deu ruim')));
        }
    }
}

if($_SERVER['REQUEST_METHOD'] === 'DELETE'){
    if(isset($_GET['id'])){
        $id = $con->real_escape_string($_GET['id']);
        $sql = $con->query("delete from receita where id = '$id'");
    
        if($sql){
            exit(json_encode(array('status' => 'successo')));
        }else{
            exit(json_encode(array('status' => 'Deu ruim')));
        }
    }
}





?>