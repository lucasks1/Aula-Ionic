<?php
  echo md5("1234");

// método ideal - acrescente em seu código acima
$senha = "1234";
$hash = password_hash($senha, PASSWORD_DEFAULT);
// PASSWORD_DEFAULT é o método (um bom método) de criptografia
echo "<p>" . $hash;
// veja a diferença da mudança dos algorítmo md5

echo "<p>" . password_verify($senha, '$2y$10$.vLAlsbM5G63h9a/Fj1Gq.8mwPFLwSlA6QUNt1WnVcjUSeAny8QbC');


?>
