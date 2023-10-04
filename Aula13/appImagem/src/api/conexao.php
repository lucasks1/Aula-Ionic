<?php

$host = "localhost";
$user = "root";
$pass = "";
$bd = "projeto";

$mysqli = new mysqli($host, $user, $pass, $bd);
$con = new mysqli($host, $user, $pass, $bd);

/* check connection */
if ($mysqli->connect_errno) {
   echo "Connect failed: " . $mysqli->connect_error;
   exit();
}

/* banco: upload
tabela: arquivos
Campos:
id 		- INT 		- PRIMARY - A_I
nome 		- VARCHAR 	- 100
path 		- VARCHAR 	- 100
data_upload - DATETIME
*/

?>
