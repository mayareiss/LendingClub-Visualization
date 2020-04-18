// Initializes the page with a default plot
function init(){
    d3.json("status_dict.json").then((importedData) => {
        
      var data = importedData;
      
      console.log(data.map(row => row.funded_amnt))
    
      var trace1 = {
        x: data.filter(row => row.loan_status === "Current").map(row => row.issue_date),
        y: data.filter(row => row.loan_status === "Current").map(row => row.funded_amnt),
        type: "bar",
        name: "Current",
      };
      var trace2 = {
          x: data.filter(row => row.loan_status === "Current").map(row => row.issue_date),
          y: data.filter(row => row.loan_status === "Fully Paid").map(row => row.funded_amnt),
          type: "bar",
          name: "Fully Paid",
        };
    
      var trace3 = {
          x: data.filter(row => row.loan_status === "Current").map(row => row.issue_date),
          y: data.filter(row => row.loan_status === "Charged Off").map(row => row.funded_amnt),
          type: "bar",
          name: "Charged Off",
        };
    
      var trace4 = {
          x: data.filter(row => row.loan_status === "Current").map(row => row.issue_date),
          y: data.filter(row => row.loan_status === "Late (31-120 days)").map(row => row.funded_amnt),
          type: "bar",
          name: "Late (31-120 days) Values",
        };
    
      var trace5 = {
          x: data.filter(row => row.loan_status === "Current").map(row => row.issue_date),
          y: data.filter(row => row.loan_status === "In Grace Period").map(row => row.funded_amnt),
          type: "bar",
          name: "In Grace Period Values",
        };
    
      var trace6 = {
          x: data.filter(row => row.loan_status === "Current").map(row => row.issue_date),
          y: data.filter(row => row.loan_status === "Late (16-30 days)").map(row => row.funded_amnt),
          type: "bar",
          name: "Late (16-30 days) Values",
        };
    
      var trace7 = {
          x: data.filter(row => row.loan_status === "Current").map(row => row.issue_date),
          y: data.filter(row => row.loan_status === "Default").map(row => row.funded_amnt),
          type: "bar",
          name: "Default Values",
        };
    
      var trace8 = {
          x: data.filter(row => row.loan_status === "Current").map(row => row.issue_date),
          y: data.filter(row => row.loan_status === "Issued").map(row => row.funded_amnt),
          type: "bar",
          name: "Issued Values",
        };
          
      var chartData = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8];
      var layout = {
          title: "Lending Club Status over Time",
          xaxis: {
            autorange: true,
            range:['2017-01', '2019-12']
          },
          barmode: 'stack',
          traceorder: 'reversed',
          automargin: true
      };
    
      var CHART = d3.selectAll("#plot").node();

      Plotly.newPlot(CHART, chartData, layout);
    });
    
}
  
  // Call updatePlotly() when a change takes place to the DOM
  d3.selectAll("body").on("change", updatePlotly);
  
  // This function is called when a dropdown menu item is selected
function updatePlotly() {
// Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.node().value;
  console.log(dataset)
  var CHART = d3.selectAll("#plot").node();

  // Initialize x and y arrays
  var chartData = []

  switch(dataset) {
      case "dataset2":
        // console.log("hello")
        d3.json("grade_dict.json").then((importedData) => {
          console.log("d3 rread")
          var gradeData = importedData;
      
          // console.log(gradeData.map(row => row.funded_amnt))
          var trace1 = {
              x: gradeData.filter(row => row.grade === "A").map(row => row.issue_date),
              y: gradeData.filter(row => row.grade === "A").map(row => row.funded_amnt),
              type: "bar",
              name: "A (8.46-10.81%)",
          };
          console.log(trace1)
          var trace2 = {
              x: gradeData.filter(row => row.grade === "B").map(row => row.issue_date),
              y: gradeData.filter(row => row.grade === "B").map(row => row.funded_amnt),
              type: "bar",
              name: "B (13.33-16.08%)",
          };
          
            var trace3 = {
              x: gradeData.filter(row => row.grade === "C").map(row => row.issue_date),
              y: gradeData.filter(row => row.grade === "C").map(row => row.funded_amnt),
              type: "bar",
              name: "C (17.30 - 20.74%)",
          };
          
            var trace4 = {
              x: gradeData.filter(row => row.grade === "D").map(row => row.issue_date),
              y: gradeData.filter(row => row.grade === "D").map(row => row.funded_amnt),
              type: "bar",
              name: "D (22.62 - 30.99%)",
          };
          
            var trace5 = {
              x: gradeData.filter(row => row.grade === "E").map(row => row.issue_date),
              y: gradeData.filter(row => row.grade === "E").map(row => row.funded_amnt),
              type: "bar",
              name: "E (28.90 - 29%)",
          };
          
            var trace6 = {
              x: gradeData.filter(row => row.grade === "F").map(row => row.issue_date),
              y: gradeData.filter(row => row.grade === "F").map(row => row.funded_amnt),
              type: "bar",
              name: "F (29.35 - 30.75%)",
          };
          
            var trace7 = {
              x: gradeData.filter(row => row.grade === "G").map(row => row.issue_date),
              y: gradeData.filter(row => row.grade === "G").map(row => row.funded_amnt),
              type: "bar",
              name: "G (30.79 - 30.99%)",
          };
          chartData1 = [trace1, trace2, trace3, trace4, trace5, trace6, trace7];
          // chartData = chartData1[0]
          // console.log(chartData)

          var layout = {
            title: "Lending Club Loan Grade Issuance",
            xaxis: {
              autorange: true,
              range:['2017-01', '2019-12']
            },
            barmode: 'stack',
            traceorder: 'reversed',
            automargin: true
          };
      console.log(CHART)    
      Plotly.newPlot(CHART, chartData1, layout);

      });
      break;
      case "dataset1":
        //console.log("hello")
        d3.json("status_dict.json").then((importedData) => {
          var data = importedData;
          
          console.log(data.map(row => row.funded_amnt))
        
          var trace1 = {
            x: data.filter(row => row.loan_status === "Current").map(row => row.issue_date),
            y: data.filter(row => row.loan_status === "Current").map(row => row.funded_amnt),
            type: "bar",
            name: "Current",
          };
          console.log(trace1)
          var trace2 = {
            x: data.filter(row => row.loan_status === "Current").map(row => row.issue_date),
            y: data.filter(row => row.loan_status === "Fully Paid").map(row => row.funded_amnt),
            type: "bar",
            name: "Fully Paid",
          };
      
          var trace3 = {
              x: data.filter(row => row.loan_status === "Current").map(row => row.issue_date),
              y: data.filter(row => row.loan_status === "Charged Off").map(row => row.funded_amnt),
              type: "bar",
              name: "Charged Off",
            };
        
          var trace4 = {
              x: data.filter(row => row.loan_status === "Current").map(row => row.issue_date),
              y: data.filter(row => row.loan_status === "Late (31-120 days)").map(row => row.funded_amnt),
              type: "bar",
              name: "Late (31-120 days) Values",
            };
        
          var trace5 = {
              x: data.filter(row => row.loan_status === "Current").map(row => row.issue_date),
              y: data.filter(row => row.loan_status === "In Grace Period").map(row => row.funded_amnt),
              type: "bar",
              name: "In Grace Period Values",
            };
        
          var trace6 = {
              x: data.filter(row => row.loan_status === "Current").map(row => row.issue_date),
              y: data.filter(row => row.loan_status === "Late (16-30 days)").map(row => row.funded_amnt),
              type: "bar",
              name: "Late (16-30 days) Values",
            };
        
          var trace7 = {
              x: data.filter(row => row.loan_status === "Current").map(row => row.issue_date),
              y: data.filter(row => row.loan_status === "Default").map(row => row.funded_amnt),
              type: "bar",
              name: "Default Values",
            };
        
          var trace8 = {
              x: data.filter(row => row.loan_status === "Current").map(row => row.issue_date),
              y: data.filter(row => row.loan_status === "Issued").map(row => row.funded_amnt),
              type: "bar",
              name: "Issued Values",
            };
          chartData1 = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8];
          // chartData = chartData1[0]
          // console.log(chartData)

          var layout = {
              title: "Lending Club Loan Status over Time",
              xaxis: {
                autorange: true,
                range:['2017-01', '2019-12']
              },
              barmode: 'stack',
              traceorder: 'reversed',
              automargin: true
          };
        console.log(CHART)    
        Plotly.newPlot(CHART, chartData1, layout);
      });  
      break;

      case "dataset3":
        //console.log("hello")
        d3.json("purpose_dict.json").then((importedData) => {
    
          var purposeData = importedData;
          
          console.log(purposeData.map(row => row.funded_amnt))
        
          var trace1 = {
            x: purposeData.filter(row => row.purpose === "Debt Consolidation").map(row => row.issue_date),
            y: purposeData.filter(row => row.purpose === "Debt Consolidation").map(row => row.funded_amnt),
            type: "bar",
            name: "Debt Consolidation",
          };
          var trace2 = {
            x: purposeData.filter(row => row.purpose === "Credit Card").map(row => row.issue_date),
            y: purposeData.filter(row => row.purpose === "Credit Card").map(row => row.funded_amnt),
            type: "bar",
            name: "Credit Card",
            };
        
          var trace3 = {
            x: purposeData.filter(row => row.purpose === "Home/Moving").map(row => row.issue_date),
            y: purposeData.filter(row => row.purpose === "Home/Moving").map(row => row.funded_amnt),
            type: "bar",
            name: "Home/Moving",
            };
        
          var trace4 = {
            x: purposeData.filter(row => row.purpose === "Other").map(row => row.issue_date),
            y: purposeData.filter(row => row.purpose === "Other").map(row => row.funded_amnt),
            type: "bar",
            name: "Other",
            };
        
          var trace5 = {
            x: purposeData.filter(row => row.purpose === "Major Purchase").map(row => row.issue_date),
            y: purposeData.filter(row => row.purpose === "Major Purchase").map(row => row.funded_amnt),
            type: "bar",
            name: "Major Purchase",
            };
        
          var trace6 = {
            x: purposeData.filter(row => row.purpose === "Medical").map(row => row.issue_date),
            y: purposeData.filter(row => row.purpose === "Medical").map(row => row.funded_amnt),
            type: "bar",
            name: "Medical",
            };
        
          var trace7 = {
            x: purposeData.filter(row => row.purpose === "Small Business").map(row => row.issue_date),
            y: purposeData.filter(row => row.purpose === "Small Business").map(row => row.funded_amnt),
            type: "bar",
            name: "Small Business",
            };
        
          var trace8 = {
            x: purposeData.filter(row => row.purpose === "Vacation").map(row => row.issue_date),
            y: purposeData.filter(row => row.purpose === "Vacation").map(row => row.funded_amnt),
            type: "bar",
            name: "Vacation",
            };
          chartData1 = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8];

          var layout = {
              title: "Lending Club Purported Loan Purpose",
              xaxis: {
                autorange: true,
                range:['2017-01', '2019-12']
              },
              barmode: 'stack',
              traceorder: 'reversed',
              automargin: true
          };
        console.log(CHART)    
        Plotly.newPlot(CHART, chartData1, layout);
      });  
      break;
          
  }  
  
}

  
  init();
