<?php
	header("ALLOW-CONTROL-ALLOW-ORIGIN:*");
	function fn(){
		//获取用户的请求参数的name
		if($_GET['name']=='zhangsan'){
			$arr = Array('data'=>"1");
			echo json_encode($arr);
		}
	} 
	fn();
?>