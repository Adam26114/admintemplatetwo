$(document).ready(function(){

	// Start Left Side Bar
	$(".sidebarlinks").click(function(){
		$(".sidebarlinks").removeClass("currents");
		$(this).addClass("currents");
	});

	// End Left Side Bar
});


// Start dropdown
function dropbtn(e){
	// console.log(e.target);

	e.target.parentElement.nextElementSibling.classList.toggle('show');
}
// console.log('hi');
// End dropdown

// Start Expenses Area
const ctx = document.getElementById('mypiechart');
ctx.height = 240;
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      
      datasets: [{
        data: [12, 19, 3],

      }]
    },
    options: {
      responsive:false
    }
  });

// End Expenses Area

// Start Earning Area
 google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ]);

        var options = {
          title: 'Company Performance',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }
// End Earning ARea

// End Js Area