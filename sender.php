<?php
    $name = $_POST['name'];
	$phone = $_POST['phone'];
    $address = $_POST['address'];
    $text = $_POST['list_1'];
    $count = $_POST['list_1_counter'];

	$to = "yanickiydima2003@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$subject = "Заявка c сайта";

	
	$msg="
    Имя: $name /n
    Телефон: $phone /n
    Адресс доставки: $address /n
    Заказ: $text + $count"; 	
	mail($to, $subject, $msg, "From: $to");

?>

<p>Привет, форма отправлена</p>
