<?php 

//dados do banco no servidor local
$servidor = 'localhost';
$usuario = 'root';
$senha = '';
$banco = '2022_4';

try {
	$con = new mysqli($servidor,$usuario, $senha,$banco);
} catch (Exception $e) {
	echo 'Erro ao conectar com o banco!! '. $e;
}

 ?>