$(document).ready(function(){


    console.log(getParameterByName("userId"));

});

function userCreate() {
    var username = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            "email": username,
            "password": password
        }),
        dataType: 'json',
        success: function(data){
            console.log(data);
            window.location.replace("index.html?userId=" + data._id);
        },
        error: function(){
            alert("failed");
        },
        url: 'https://slkidsbackend.herokuapp.com/mentalhealthapp/api/users'
    });

}

function login() {
    var username = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    $.ajax({
        type: 'GET',
        dataType: 'json',
        success: function(data){
            if(data == null){
                alert("Failed. Incorrect Login");
            }
            console.log(data);
            window.location.replace("index.html?userId=" + data._id);
        },
        error: function(){
            alert("failed");
        },
        url: 'https://slkidsbackend.herokuapp.com/mentalhealthapp/api/users/' + username
    });

}

//get query string parameter from url
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
