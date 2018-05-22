$(document).ready(function () {
    $('#signUpSubmit').on('click',function () {
        username =  $("#userEmail").val();
        password = $("#userPassword").val();
        console.log(username,password, typeof(username), typeof(password));
        createUser(username,password);




    });


});
//

function createUser(username,password){
    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            "email": "myEmail@students.berkeley.net",
            "password": "isilly"
        }),
        dataType: 'json',
        success: function(data){
            runMySuccessFunction(data);
        },
        error: function(){
            alert("failed");
        },
        url: 'https://slkidsbackend.herokuapp.com/mentalhealthapp/api/users'
    });
}