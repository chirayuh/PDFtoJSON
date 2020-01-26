let fs = require("fs"),
        PDFParser = require("pdf2json");
		/*
		var imported = document.createElement('script');
imported.src = 'https://www.gstatic.com/firebasejs/6.6.2/firebase-app.js';
document.head.appendChild(imported);
let firebase = require('firebase-app');

var firebaseConfig = {
			   apiKey: "AIzaSyAtaU80sYnptvyen_uZ6stkDlt2_n1mjX4",
			   authDomain: "eap-2-2019.firebaseapp.com",
			   databaseURL: "https://eap-2-2019.firebaseio.com",
			   projectId: "eap-2-2019",
			   storageBucket: "eap-2-2019.appspot.com",
			   messagingSenderId: "1021946432019",
			   appId: "1:1021946432019:web:2e0946533e1daa19e5cde6"
		   };
		   // Initialize Firebase
		   firebase.initializeApp(firebaseConfig);
		   const db =firebase.firestore();

 */
    let pdfParser = new PDFParser();
 
    pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
    pdfParser.on("pdfParser_dataReady", pdfData => {
		var JSON_var= JSON.stringify(pdfParser.getAllFieldsTypes())
         
const obj = JSON.parse(JSON_var);
var ids=[],values=[];
for (var key in obj) {
  if (obj.hasOwnProperty(key)) {
    var val = obj[key];
	ids.push(val.id);
	values.push(val.value);
  }
}
console.log(ids);
console.log(values);
	   //fs.writeFile("EAPApprovalForm.json", JSON.stringify(pdfParser.getAllFieldsTypes()));
    });
	/*
	db.collection('eapdetails').add({
    ids[0]: values[0],
    ids[1]: values[1],
    ids[2]: values[2],
    ids[3]: values[3],
    ids[4]: values[4],
    ids[5]: values[5],
    ids[6]: values[6],
    ids[7]: values[7],
    ids[8]: values[8],
    ids[9]: values[9],
    ids[10]: values[10],
    ids[11]: values[11],
    ids[12]: values[12],
    ids[13]: values[13],
    ids[14]: values[14],
    ids[15]: values[15],
    ids[16]: values[16],
    ids[17]: values[17],
    ids[18]: values[18],
    ids[19]: values[19],
    ids[20]: values[20],
    ids[21]: values[21],
    ids[22]: values[22],
    ids[23]: values[23],
    ids[24]: values[24],
    ids[25]: values[25],
    ids[26]: values[26],
    ids[27]: values[27],
    ids[28]: values[28],
    ids[29]: values[29],
    ids[30]: values[30],
    ids[31]: values[31],
   
  });
 */
    pdfParser.loadPDF("C:/react-eap-app/Test/EAPApprovalForm.pdf");