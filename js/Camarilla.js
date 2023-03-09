function calculate() {
  // Get the high and low values entered by the user
  var high = parseFloat(document.getElementById("high").value);
  var low = parseFloat(document.getElementById("low").value);
var close = parseFloat(document.getElementById("close").value);

  // Calculate the camarilla levels
  var range = high - low;
  var levels = [
    
    "<strong>H5:</strong> " + (high / low * close).toFixed(2),
    "<strong>H4:</strong> " + (close + range * 0.55).toFixed(2),
    "<strong>H3:</strong> " + (close + range * 0.275).toFixed(2),
    "<strong>H2:</strong> " + (close + range * 1.1/6).toFixed(2),
    "<strong>H1:</strong> " + (close + range * 1.1/12).toFixed(2),
    "<strong>L1:</strong> " + (close - (range * 1.1)/12).toFixed(2),
    "<strong>L2:</strong> " + (close - (range * 1.1)/6).toFixed(2),
    "<strong>L3:</strong> " + (close + range * 0.275).toFixed(2),
    "<strong>L4:</strong> " + (close + range * 0.55).toFixed(2),
    "<strong>L5:</strong> " + (close - ((high / low * close) - close)).toFixed(2)
  ];

  // Display the camarilla levels in the output div
  var output = document.getElementById("output");
  output.innerHTML = "<h2>Camarilla Levels:</h2>";
  for (var i = 0; i < levels.length; i++) {
    output.innerHTML += "<p>" + levels[i] + "</p>";
  }
}