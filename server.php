<?php
$list = file_get_contents('info.json');
$discs= json_decode($list,true);
header('Content-type; application/json');
echo json_encode($discs);