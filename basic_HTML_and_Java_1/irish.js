<!DOCTYPE html>
<html>
<body>
	<button onlclick="My_First_Function()">
		Click Me!
	</button>
	<p id="Irish"></p>
<script>
	function My_First_Function() {
		var String = "Kiss me, I'm Irish!";
		var result = String.fontcolor("green")
		document.getElementbyID("Irish").innerHTML = 
		result;
		}
</script>
</body>
</html>