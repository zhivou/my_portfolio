// This will be initially rewritten with react

class AjaxCaller {
  constructor() {
    this.launches = function () {
      return $.ajax({
        method: 'GET',
        url: 'https://api.spacexdata.com/v3/launches',
        dataType: 'json',
        async: false
      }).responseJSON;
    }();
  }

  get_all_launches(){
    $("#totalLaunches").html(`<div class="display-3">${this.launches.length}</div>`);
  }

  //
  // Counting all rockets and putting to the collection
  //
  get_all_rockets(){
    let collection = {};
    this.launches.forEach( function(i) {
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
  }

  //
  // Counting launches per year and preparing it for totalLaunchesChart
  // Example:
  // {2017:2, 2018:31}
  //
  getDataForHistoryChart(){
    let collection = {};

    this.launches.forEach( function(i) {
      if (collection[i.launch_year]) {
        collection[i.launch_year] += 1
      }
      else {
        collection[i.launch_year] = 1
      }
    });
    return collection;
  }

  getDataForFailedChart(){
    let collection = {};

    this.launches.forEach( function(i) {
      console.log(i.launch_success);
      console.log(i.launch_year);
      if (collection[i.launch_year] && i.launch_success === false) {
        collection[i.launch_year] += 1
      }
      else if(!collection[i.launch_year] && i.launch_success === false) {
        collection[i.launch_year] = 1
      }
      else if (!collection[i.launch_year]) {
        collection[i.launch_year] = 0
      }
    });
    return collection;
  }
}

var totalLaunchesChart = function(data){
  let label_a = [];
  let data_a = [];

  // Splits object on to two arrays for simplifying output
  for( i in data ) {
    label_a.push(i);
    data_a.push(data[i]);
  }

  var ctx = document.getElementById('launchHistory');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {

      labels: label_a,

      datasets: [{
        label: 'Launches per year(all including failed and planned)',
        data: data_a,
        backgroundColor: [
          'rgba(255, 255, 132, 0.3)'
        ],
        borderColor: [
          'rgba(255, 255, 132, 1)'
        ],
        borderWidth: 1
      },
        {
          label: 'Failed Launches',
          data: [3,3,1],
          backgroundColor: [
            'rgba(255, 23, 0, 0.3)'
          ],
          borderColor: [
            'rgba(255, 23, 0, 1)'
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
  totalLaunchesChart();
  var ajaxOne = new AjaxCaller();
  ajaxOne.get_all_launches();
  ajaxOne.get_all_rockets();
  totalLaunchesChart(ajaxOne.getDataForHistoryChart());
  ajaxOne.getDataForFailedChart()
});













