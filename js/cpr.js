function calculatecpr() {

    // Get the values from input boxes
    const high = Number(document.getElementById('high').value);
    const low = Number(document.getElementById('low').value);
    const close = Number(document.getElementById('close').value);
    const bc = 10; // Constant value for BC

    // Calculate pivot
    const pivot = (high + low + close) / 3;

    // Calculate bottom CPR
    const bottomCPR = (high + low) / 2;

    // Calculate top CPR
    const topCPR = (pivot - bottomCPR) + pivot;

 
    // Create output string with proper HTML markup
    const outputString = `<h2>CPR Levels:</h2><p>Pivot: ${pivot.toFixed(2)}</p><p>Bottom CPR: ${bottomCPR.toFixed(2)}</p><p>Top CPR: ${topCPR.toFixed(2)}</p>`;

    // Display output string
	document.getElementById('output').innerHTML = outputString;
  }

