// This file makes query to the database and adds elements to the HTML file
var class_name = document.title;
retrieveFromDB(class_name);

function retrieveFromDB(classname) {
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "Hbar^2/2m",
        database: "walkerenglishdb"
    });

    con.connect(function (err) {
        if (err) {
            //window.location.replace("../html/404.html")
            throw err;
        }
    });
    
    var str = "SELECT * FROM students WHERE class=" + "'" + classname + "'";
    con.query(str, function (err, result) {
        if (err) throw err;
        for (var i = 0; i < result.length; i++) {
            var name = result[i].last_name + result[i].first_name;
            addCheckbox(name);
        }
        con.end();
    });
}


function addCheckbox(studentname) {
    // Declare relative variables
    var student_list_div = document.getElementById('studentlist');
    var cb_container = document.createElement('label');
    var input = document.createElement('input');
    var span = document.createElement('span');

    // Set attributes accordingly
    cb_container.className = "cb_container";
    cb_container.innerHTML = studentname;
    input.type = "checkbox";
    //input.setAttribute("checked", "checked");
    span.className = "checkmark";

    cb_container.appendChild(input);
    cb_container.appendChild(span);
    console.log(cb_container);
    console.log(student_list_div);
    student_list_div.appendChild(cb_container);
    console.log("Inserted checkbox label into the list");
}
