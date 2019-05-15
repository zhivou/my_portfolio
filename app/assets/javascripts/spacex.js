class AjaxCaller {
  static get_launches() {
    $.ajax({
      method: 'GET',
      url: 'https://api.spacexdata.com/v3/launches',
      dataType: 'json'
    }).done(function(data) {
      let collection = {};

      $("#totalLaunches").html(`<div class="display-3">${data.length}</div>`);

      //
      // Counting all rockets and putting to the collection
      //
      data.forEach( function(i) {
        if (collection[i.rocket.rocket_name]) {
          collection[i.rocket.rocket_name] += 1
        }
        else {
          collection[i.rocket.rocket_name] = 1
        }
        return collection;
      });

      //
      // Example of iteration through Object(key, value)
      // if statement here is for Possible Iteration Over Unexpected.
      //
      for(var p in collection) {
        if (collection.hasOwnProperty(p)) {
          console.log(p, collection[p]);
          $("#rockets")
              .append(`<span class="h2">${p}: </span>`)
              .append(`<span class="h2">${collection[p]}</span><br>`)
        }
      }
    });
  }
}

function getChartData (data) {
    var dict = [];

    dict.push({
        key:   "keyName", //data.year
        value: "the value" // value = value + 1 (might need to consider nil at a first entry not sure yet how)
    });
}

var chart = function(){
  var ctx = document.getElementById('launchHistory');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {

      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],

      datasets: [{
        label: 'Launches per year',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]

    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
};

function scrollTo (h) {
  var url = location.href;
  location.href = "#"+h;
  history.replaceState(null,null,url);
}

$('document').ready(function() {
  scrollTo("astronautmaPicture");
  chart();
  AjaxCaller.get_launches()
});













