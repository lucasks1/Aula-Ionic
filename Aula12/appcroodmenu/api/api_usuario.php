<?php
    require_once 'headers.php';
   
    require_once 'conexao.php';
   
    date_default_timezone_set('America/Sao_Paulo');
    @session_start();


   
    if($_SERVER['REQUEST_METHOD'] === 'GET'){
        if(isset($_GET['id'])){
            $id = $con->real_escape_string($_GET['id']);
            $sql = $con->query("select * from usuarios where id = '$id'");
            $data = $sql->fetch_assoc();
       
        } else if(isset($_GET['senha'])){
            $email = $con->real_escape_string($_GET['email']);
            $senha = $con->real_escape_string($_GET['senha']);
            // selecionando somente a senha para o email informado
            $sql = $con->query("select senha from usuarios where email = '$email'");
            $data = $sql->fetch_assoc();
            if (!$data) {$data = 'Email ou senha inválidos';}
            else {
                // insere o email que está dentro de $data para @hashed_password
                $hashed_password = $data;  // o formato é um array
                // converte o array para um formato string
                $string = implode(' ', $hashed_password);
                // verificando se não é valido, ou seja, se não são iguais.            
                if(!password_verify($senha,$string)) {
                    /* Esse texto abaixo serve só para o controle do programador
                    quando envio um texto no campo do tipo array ($data)
                    ele retornará para o ionic como nulo */
                    $data = null;
                }
            }
        } else  if(isset($_GET['email'])){
            $email = $con->real_escape_string($_GET['email']);
            $sql = $con->query("select * from usuarios where email = '$email'");
            $data = $sql->fetch_assoc();


        } else  if(isset($_GET['cpf'])){
            $cpf = $con->real_escape_string($_GET['cpf']);
            $sql = $con->query("select * from usuarios where cpf = '$cpf'");
            $data = $sql->fetch_assoc();
   
        } else {
            $data = array();
            $sql = $con->query("select * from usuarios");
            while($d = $sql->fetch_assoc()){
                $data[] = $d;
            }
       
        }
        exit(json_encode($data));//json_encode( $arr, JSON_NUMERIC_CHECK );
    }
    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $data  = json_decode(file_get_contents("php://input"));
        //------ acrescimo para criptografia ------
        $senha = password_hash($data->senha,PASSWORD_DEFAULT);
        //----- mudança no código sql ao passar agora o campo referente a senha
        $sql = $con->query("insert into usuarios (nome, email, cpf, senha, nivel) values ('".$data->nome."','".$data->email."','".$data->cpf."','".$senha."','".$data->nivel."')");  
        // ----- término da alteração para o código de inserção -----
        if($sql){
            $data->id = $con->insert_id;
            exit(json_encode($data));


        }else{
            exit(json_decode(array('status' => 'Deu ruim')));
        }
    }
   
    if($_SERVER['REQUEST_METHOD'] === 'PUT'){
        if(isset($_GET['id'])){
            // a função real_escape_string remove quaisquer caracteres especiais que possam interferir nas operações de consulta
            $id = $con->real_escape_string($_GET['id']);
            $data = json_decode(file_get_contents("php://input"));
            //------ acrescimo para criptografia ------
            $senha = password_hash($data->senha,PASSWORD_DEFAULT);
            //----- mudança no código sql ao passar agora o campo referente a senha
            $sql = $con->query("update usuarios set nome = '".$data->nome."', email = '".$data->email."', cpf = '".$data->cpf."',  senha = '".$senha."', nivel = '".$data->nivel."' where id = '$id'");
            // ----- término da alteração para o código de inserção -----
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
            $sql = $con->query("delete from usuarios where id = '$id'");
       
            if($sql){
                exit(json_encode(array('status' => 'successo')));
            }else{
                exit(json_encode(array('status' => 'Deu ruim')));
            }
        }
    }
?>
