$.ajax({
									url: 'http://nsportal.freevar.com/APIs/orangeApi.php',
									method: 'GET',
									//context: document.body,
									success: function(response)
									{
										$('#art').html(response);
									}
});

$host="127.0.0.1";
$port=3307;
$socket="";
$user="root";
$password="";
$dbname="orange_db";

$con = new mysqli($host, $user, $password, $dbname, $port, $socket)
	or die ('Could not connect to the database server' . mysqli_connect_error());

//$con->close();
