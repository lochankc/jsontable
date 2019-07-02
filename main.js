alert("connected Succesfully");

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("showData").innerHTML = this.responseText;
      }
    };
    var jdd=xhttp.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true);
    //document.getElementById("jd").innerHTML=JSON.stringify(jdd[0]);
    xhttp.send();
    
  }

  //document.getElementById("jd").innerHTML=JSON.stringify(jdd[0]);


  

/*function CreateTableFromJSON() {
    
const countries=[{
	"$schema": "http://flagship-api.lbidts.com/schemas/country/definitions.json#/definitions/country",
	"regions": {},
	"cities": [],
	"value": "US",
	"label": "US",
	"emailOptin": "Always",
	"mailOptin": "Always",
	"smsOptin": "Optional"
}, {
	"$schema": "http://flagship-api.lbidts.com/schemas/country/definitions.json#/definitions/country",
	"regions": {},
	"cities": [],
	"value": "CA",
	"label": "CA",
	"emailOptin": "OptionalPreselected",
	"mailOptin": "OptionalPreselected",
	"smsOptin": "Optional"
}, {
	"$schema": "http://flagship-api.lbidts.com/schemas/country/definitions.json#/definitions/country",
	"regions": {},
	"cities": [],
	"value": "MI",
	"label": "MI",
	"emailOptin": "Always",
	"mailOptin": "Always",
	"smsOptin": "Optional"
}, {
	"$schema": "http://flagship-api.lbidts.com/schemas/country/definitions.json#/definitions/country",
	"regions": {},
	"cities": [],
	"value": "AX",
	"label": "AX",
	"emailOptin": "Always",
	"mailOptin": "Always",
	"smsOptin": "Optional"
}, {
	"$schema": "http://flagship-api.lbidts.com/schemas/country/definitions.json#/definitions/country",
	"regions": {},
	"cities": [],
	"value": "AL",
	"label": "AL",
	"emailOptin": "Always",
	"mailOptin": "Always",
	"smsOptin": "Optional"
}, {
	"$schema": "http://flagship-api.lbidts.com/schemas/country/definitions.json#/definitions/country",
	"regions": {},
	"cities": [],
	"value": "DZ",
	"label": "DZ",
	"emailOptin": "Always",
	"mailOptin": "Always",
	"smsOptin": "Optional"
}, {
	"$schema": "http://flagship-api.lbidts.com/schemas/country/definitions.json#/definitions/country",
	"regions": {},
	"cities": [],
	"value": "AD",
	"label": "AD",
	"emailOptin": "Always",
	"mailOptin": "Always",
	"smsOptin": "Optional"
}, {
	"$schema": "http://flagship-api.lbidts.com/schemas/country/definitions.json#/definitions/country",
	"regions": {},
	"cities": [],
	"value": "AO",
	"label": "AO",
	"emailOptin": "Always",
	"mailOptin": "Always",
	"smsOptin": "Optional"
}, {
	"$schema": "http://flagship-api.lbidts.com/schemas/country/definitions.json#/definitions/country",
	"regions": {},
	"cities": [],
	"value": "AI",
	"label": "AI",
	"emailOptin": "Always",
	"mailOptin": "Always",
	"smsOptin": "Optional"
}, {
	"$schema": "http://flagship-api.lbidts.com/schemas/country/definitions.json#/definitions/country",
	"regions": {},
	"cities": [],
	"value": "AG",
	"label": "AG",
	"emailOptin": "Always",
	"mailOptin": "Always",
	"smsOptin": "Optional"
}, {
	"$schema": "http://flagship-api.lbidts.com/schemas/country/definitions.json#/definitions/country",
	"regions": {},
	"cities": [],
	"value": "AR",
	"label": "AR",
	"emailOptin": "Always",
	"mailOptin": "Always",
	"smsOptin": "Optional"
}, {
	"$schema": "http://flagship-api.lbidts.com/schemas/country/definitions.json#/definitions/country",
	"regions": {},
	"cities": [],
	"value": "AM",
	"label": "AM",
	"emailOptin": "Always",
	"mailOptin": "Always",
	"smsOptin": "Optional"
}, {
	"$schema": "http://flagship-api.lbidts.com/schemas/country/definitions.json#/definitions/country",
	"regions": {},
	"cities": [],
	"value": "AW",
	"label": "AW",
	"emailOptin": "Always",
	"mailOptin": "Always",
	"smsOptin": "Optional"
}, {
	"$schema": "http://flagship-api.lbidts.com/schemas/country/definitions.json#/definitions/country",
	"regions": {},
	"cities": [],
	"value": "AU",
	"label": "AU",
	"emailOptin": "Optional",
	"mailOptin": "Always",
	"smsOptin": "Optional"
}, {
	"$schema": "http://flagship-api.lbidts.com/schemas/country/definitions.json#/definitions/country",
	"regions": {},
	"cities": [],
	"value": "AT",
	"label": "AT",
	"emailOptin": "Optional",
	"mailOptin": "Always",
	"smsOptin": "Optional"
}
]

//default export countries;

    // EXTRACT VALUE FOR HTML HEADER. 
    // ('Book ID', 'Book Name', 'Category' and 'Price')
    var col = [];
    for (var i = 3; i < countries.length; i++) {
        for (var key in countries[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    var tr = table.insertRow(-1);                   // TABLE ROW.

    for (var i = 3; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < countries.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 3; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = countries[i][col[j]];
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}
*/