<?php

include("conexao.php");

// verifica se foi clicado em deletar
if(isset($_GET['deletar'])){
    // intval transforma o valor para integer
    $id = intval($_GET['deletar']);
    // faz a busca de acordo com a chave primaria
    $sql_query = $mysqli->query("SELECT * FROM arquivo where id = '$id'") or die($mysqli->error);
    $arquivo = $sql_query->fetch_assoc();
    // apaga o arquivo do caminho (path) indicado
    if(unlink($arquivo['path'])) {
        /* se deu certo a exclusão fisica
        apaga o registro do banco */
        $deu_certo = $mysqli->query("DELETE FROM arquivo where id = '$id'") or die($mysqli->error);
        if($deu_certo) {
            //retornar para o index sem nenhum parâmetro
            header("location: index.php");
        }  

    }
}

// $_FILES é o $_POST para arquivos
if (isset($_FILES['arquivo'])) {
  $arquivo = $_FILES['arquivo'];
  if($arquivo['size']>2097152)
   die("Arquivo muito grande!! Max: 2MB");
  // 1024 bytes = 1kb
  // 1024 kb = 1mb

  if($arquivo['error'])
   die("Falha ao enviar arquivo");


  $pasta = "arquivos/";
  $nomeDoArquivo = $arquivo['name'];
  $novoNomeDoArquivo = uniqid();
  // strtolower converte para caixa baixa
  $extensao = strtolower(pathinfo($nomeDoArquivo,PATHINFO_EXTENSION));
 
  //echo $extensao;
  if ($extensao != "jpg" && $extensao != "png")
    die("Tipo de arquivo não aceito");

  $path = $pasta . $novoNomeDoArquivo . "." . $extensao;  
  $deu_certo = move_uploaded_file($arquivo["tmp_name"], $path);


  if ($deu_certo) {
    $mysqli->query("INSERT INTO arquivo (nome, path, data_upload) VALUES ('$nomeDoArquivo','$path',now())") or die ($mysqli->error);
    echo "<p> Arquivo enviado com sucsso! Para acessá-lo clique aqui <a target=\"_blank\" href=\"arquivos/$novoNomeDoArquivo.$extensao\">clique aqui</a></p>";
  }
 else
   echo "<p> Falha ao enviar arquivo </p>";
}

// Consulta aos arquivos enviados
$sql_query = $mysqli->query("SELECT * FROM arquivo") or die($mysqli->error);

?>


<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Upload de arquivo</title>
</head>
<body>
   <!-- enctype == codificação para indicar que
   o estamos enviando um arquivo ao invés de texto -->
   <form enctype="multipart/form-data" method="post" action="">
       <p><label for=""> Selecione o arquivo</label>
       <input type="file" name="arquivo"></p>
       <button type="submit">Enviar arquivo</button>
   </form>
  <h1> Lista de Arquivos </h1>
  <table border="1" cellpadding="10">
    <thead>
        <th>Preview</th>
        <th>Arquivo</th>
        <th>Data de Envio</th>
        <!-- nova coluna -->
        <th></th>
    </thead>
    <tbody>
        <?php
        while($arquivo = $sql_query->fetch_assoc()){
        ?>
        <tr>
            <td><img height="50" src="<?php echo $arquivo['path']; ?>" </td>
            <td><a target="_blank" href="<?php echo $arquivo['path']; ?>"><?php echo $arquivo['nome']; ?></a></td>
            <td><?php echo date("d/m/Y H:i", strtotime($arquivo['data_upload'])); ?></td>
            <!-- nova coluna -->
            <!-- chamando o index e uma função deletar passando o id -->
            <td><a href="index.php?deletar=<?php echo $arquivo['id']; ?>">Deletar</td>
        </tr>
        <?php
        }
        ?>
    </tbody>
  </table>
</body>
</html>
