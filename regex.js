
/*

    Author: Seb Pearce (http://sebpearce.com)
    Description: A simple tool for experimenting with regular expressions.
    Date: 2013.08.03

*/


function processRegex() {

    var regex = document.getElementById("regex").value;

    if (regex == "") {
        hideMe("match");
        hideMe("result");
        return 0;
    }

    var string = document.getElementById("inputstring").value;

    regex = new RegExp(regex);

    var result = string.match(regex);

    if (result) {
        document.getElementById("match").innerHTML = "true";
        document.getElementById("match").style.color = "#26ba3a";
        document.getElementById("result").innerHTML = result[0];
        showMe("match");
        showMe("result");
    } else {
        document.getElementById("match").innerHTML = "false";
        document.getElementById("match").style.color = "#ce2222";
        showMe("match");
        hideMe("result");
    }

    return 0; 
}

function showMe(id) {
    document.getElementById(id).style.display = "block";
    return 1;
}

function hideMe(id) {
    document.getElementById(id).style.display = "none";
    return 1;
}

function toggleMe(id) {
    if (document.getElementById(id).style.display != "block") {
        document.getElementById(id).style.display = "block";
    }
    else {
        document.getElementById(id).style.display = "none";
    }
    return 1;
}

window.onload = function() { processRegex() };