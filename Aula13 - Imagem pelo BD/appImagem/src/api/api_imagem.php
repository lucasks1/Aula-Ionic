<?php
    require_once 'headers.php';
    
    require_once 'conexao.php';
   
    date_default_timezone_set('America/Sao_Paulo');
    @session_start();

    
    if($_SERVER['REQUEST_METHOD'] === 'GET'){
        if(isset($_GET['id'])){
            $id = $con->real_escape_string($_GET['id']);
            $sql = $con->query("select * from arquivo where id = '$id'");
            $data = $sql->fetch_assoc();
            
        } else {
            $data = array();
            $sql = $con->query("select * from arquivo");
            while($d = $sql->fetch_assoc()){
                $data[] = $d;
            }
       
        }
        exit(json_encode($data));//json_encode( $arr, JSON_NUMERIC_CHECK );
    }
 
    
?>

