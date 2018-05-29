
$(document).ready(function() {
    $('#information').hide();
    $('#logInBtn').on('click', function(){
        $('#coverflow').hide();
    });
    $('#closeX').on('click', function(){
        $('#coverflow').show();
    });
    $('#signUpBtn').on('click',function(){
        $('#coverflow').hide();
    });
    $('#closeX2').on('click', function(){
        $('#coverflow').show();
    });
    $('#select').on('click', function () {

    });

    $('.photos').dblclick(function(){
        $('#coverflow').fadeOut("slow");
        console.log(this.src);
        if(this.src == anorexia.image){
            console.log("good");
        }
        if(this.src ==adhd.image) {
            console.log("Adhd");
        }
        if(this.src ==depression.image) {
            console.log("alex");
        }
        if(this.src ==bipolar.image) {
            console.log("ty");
        }
        if(this.src ==anxiety.image) {
            console.log("anxst");
        }
        $('#information').html("hello").fadeIn("slow").show();
        $('#exit').html(cancel).show();
    });
    $('#exit').on('click', function () {
        console.log("bye");
        $('#coverflow').show();
        $('#information').hide();
        $(this).hide();
    });
    anorexia.addSymptom("New symptom");
    console.log(anorexia.allSymptoms);
    console.log(depression.allBackground);
 });
