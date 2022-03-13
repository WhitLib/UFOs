// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build a table 
function buildTable(data) {
    // and clear any existing data
    tbody.html("");
}

// Loop through each object in the data and append a row and cells for each value in the row
data.forEach((dataRow) => {
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
    });
    
});

function handleClick() {
    // Select the very first element that matches our selector string: "#datetime"
    // Look for the #datetime id in the HTML tags
    // Grab date information and hold it in the "date" variable
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // If a date is entered, filter the default data to show only the date entered
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
    };

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);
// Build the table when the page loads
buildTable(tableData);