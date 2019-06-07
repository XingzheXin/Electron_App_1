// This file makes query to the database and adds elements to the HTML file

var f = document.createElement("form");
f.setAttribute('method', "post");
var i = document.createElement("input"); //input element, text
i.setAttribute('type',"text");
i.setAttribute('name',"username");

var s = document.createElement("input"); //input element, Submit button
s.setAttribute('type',"submit");
s.setAttribute('value',"Submit");

f.appendChild(i);
f.appendChild(s);

document.getElementsByTagName('body')[0].appendChild(f);