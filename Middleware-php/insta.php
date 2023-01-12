<?php

$img = escapeshellcmd('./nsta.py');

$log = shell_exec("python3 $img vsdg_group user");
echo $log;