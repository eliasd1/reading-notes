# Chart.js

    Example of creating a line graph
    
    <canvas id="buyers" width="600" height="400"></canvas> // create a canvas element
    <script>
    var buyers = document.getElementById('buyers').getContext('2d');
    new Chart(buyers).Line(buyerData);
    var buyerData = {
	labels : ["January","February","March","April","May","June"],
	datasets : [
		{
			fillColor : "rgba(172,194,132,0.4)",
			strokeColor : "#ACC26D",
			pointColor : "#fff",
			pointStrokeColor : "#9DB86D",
			data : [203,156,99,251,305,247]
		}
	]
    }
    </script>

-  Chart.js - JavaScript plugin that uses HTML5's canvas element to draw the graph onto the page
- easy way of drawing graphs on a website
    