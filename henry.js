




//

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
        },
        error: function(){
            alert("failed");
        },
        url: 'https://slkidsbackend.herokuapp.com/mentalhealthapp/api/users'
    });
}
