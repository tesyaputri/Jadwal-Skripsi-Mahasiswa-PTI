<?php
 
	include_once "connect.php";
	
	 $json = file_get_contents('php://input');
	 
	$obj = json_decode($json,true);

	$nim = $obj['nim'];
	$nama = $obj['nama'];
	$jadwal = $obj['jadwal'];

	$cek_data=mysqli_num_rows(mysqli_query($conn,("SELECT nim FROM tesya WHERE nim='$nim'")));

	if ($cek_data > 0){
		$MSG = 'Gagal daftar! Skripsi sudah terdaftar!' ;
		$json = json_encode($MSG);
		echo $json ;
	}
	else{
		$Sql_Query = "INSERT INTO tesya (nim,nama,jadwal) values ('$nim','$nama','$jadwal')";
	 
	 	if(mysqli_query($conn,$Sql_Query)){
				$MSG = 'Skripsi berhasil didaftarkan!' ;
				$json = json_encode($MSG);
			 	echo $json ;
	 	}
	 	else{
				$MSG = 'Gagal daftar!' ;
				$json = json_encode($MSG);
			 	echo $json ;
	 	} 	
	} //penutup cek data
	mysqli_close($conn);
	
?>