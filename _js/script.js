"use strict";
// function to return color (gold/silver/bronze)
function colors(i) {
  switch(i) {
    case 0:
      return "#CFB53B";
      break;
    case 1:
      return "#DDDDDD";
      break;
    case 2:
      return "#8C7853";
      break;
  };
};


// set up the initial options
var options = {
  chart: {
    renderTo: "container",
    type: "bar",
    style: {
      fontFamily: "Helvetica,Arial,sans-serif"
    }
  },
  legend: {
    borderRadius: 0,
    itemStyle: {
      color: "#000000",
      fontFamily: "Helvetica,Arial,sans-serif"
    }
  },
  plotOptions: {
    series: {
      stacking: "normal"
    }
  },
  series: [],
  title: {
    text: "US 2012 Olympics Medal Count",
    style: {
      color: "#000000",
      fontFamily: "Helvetica,Arial,sans-serif",
      fontSize: "20px",
      fontWeight: "bold"
    }
  },
  // tooltip: { // note for next years GSI: these hints are not helpful. Either make them help, or update the image to make it use a more default tooltip
  //   // hints: borderRadius, borderWidth, shadow
  //   style: {
  //     // hints: color, fontFamily, fontSize, padding
  //   }
  // },
  xAxis: {
    categories: [],
    labels: {
      style: {
        color: "#333333",
        fontFamily: "Helvetica,Arial,sans-serif"
      }
    },
  },
  yAxis: {
    // hints: gridLineColor, gridLineDashStyle
    labels: {
      style: {
        color: "#333333",
        fontFamily: "Helvetica,Arial,sans-serif"
      }
    },
    min: 0,
    stackLabels: {
      enabled: true,
      style: {
        fontFamily: "Helvetica,Arial,sans-serif",
        fontWeight: "bold",
        color: "#333333"
      }
    },
    title: {
      style: {
        color: "#333333",
        fontFamily: "Helvetica,Arial,sans-serif"
      },
      text: "# of Medals"
    }
  }
}



// ajax call to data from the csv file
$.get("_data/data.csv", function (data) {

  // split the csv by line ("\n") and save into a variable called lines


  // "medalType" is an empty array that will be populated by types of medal (gold, silver, bronze)
  // "medalCount" is an array containing 3 empty arrays, each of which will be populated by medal count per sport
  // (e.g. [0,19,24,...] for gold)


  // loop through each line using $.each
  $.each(lines, function(lineNo, line) {

    // turn each line into an array that contains 5 items: sport type, gold count, silver count, bronze count, & total count
    // use the .split() method


    // use if an statement to differentiate between header & content
    if (lineNo == 0) {
    // if it's the header,
      // split the array
      // and add only gold, silver, and bronze to "medalType"


    } else {
    // otherwise,
      // populate "options.xAxis.categories" array with the sports type ("Archery", "Athletics", etc.)


      // populate "medalCount" array; push the gold medal count to the medalCount[0], silver to medalCount[1],
      // & bronze to medalCount[2]


    };

  });



  // "options.series" is an array & each item in the array is an object with 3 keys: "name", "data", & "color"; in this example:
    // "name" = type of medal (gold/silver/bronze)
    // "data" = medal count per sport by type
    // "color" = bar color
  // use a for loop to populate "options.series"
  for(var i = 0; i < medalCount.length; i++) {
    // create a placeholder object & pull the required value for each key from "medalType" variable, "medalCount" variable, & "colors()" function


    // after the object is properly constructed, push it to "options.series"


  };
  // finally draw the chart by creating a new "Highcharts" object, which has settings that are defined in "options"


});
