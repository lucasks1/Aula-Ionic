<?php
  echo md5("1234");

  // método ideal - acrescente em seu código acima
  $senha = "1234";
  $hash = password_hash($senha, PASSWORD_DEFAULT);
  // PASSWORD_DEFAULT é o método (um bom método) de criptografia
  echo "<p>" . $hash;
  // veja a diferença da mudança dos algorítmo md5
  echo "<p>" . password_verify($senha, '$2y$10$oYsS8t8VNIiWxlrr2MMlsebVgOlDTB5yQrEVzFaQAMi4oFPJ9vETG');


?>
