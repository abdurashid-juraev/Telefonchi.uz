<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>{{ title | title }}</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- build:css styles/vendor.min.css -->
		<link rel="stylesheet" href="libs/bootstrap/bootstrap-grid.css">
		<link rel="stylesheet" href="libs/swiper/swiper-bundle.min.css">
		<link rel="stylesheet" href="libs/select/select2.min.css">
		<script src="http://maps.googleapis.com/maps/api/js?key="AIzaSyBrYqRvi06PuZWPueAWVZVxMKCC_lx154s&callback=map"></script>
	<!-- endbuild -->

	<!-- build:css styles/main.css -->
	
		<link rel="stylesheet" href="styles/main.css">
	<!-- endbuild -->
		<link rel="shortcut icon" type="image/x-icon" href="images/png/logo.png" />
</head>
<body>
	<div class="site-wrapper">
        {% block content %} {% endblock %}
	</div>

	<!-- build:js scripts/jquery.min.js -->
		<script src="libs/jquery.min.js"></script>
	<!-- endbuild -->

	<!-- build:js scripts/bootstrap.min.js -->

	<!-- endbuild -->

	<!-- build:js scripts/vendor.min.js -->
		<script src="libs/range/range.js"></script>
		<script src="libs/imask/imask.js"></script>
		<script src="libs/swiper/swiper-bundle.min.js"></script>
		<script src="libs/select/select2.min.js"></script>

	<!-- endbuild -->

	<!-- build:js scripts/main.js -->
	
		<script src="scripts/main.js"></script>
	<!-- endbuild -->
</body>
</html>