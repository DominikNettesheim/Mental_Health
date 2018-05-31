var buttons = "<button id = 'symptoms'>Symptoms</button> <button id ='backGround'>Background</button>  <button id = 'treatments'>Treatments</button> <button id = 'causes'>Causes</button>"
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
            $('#information').html(anorexia.name+ buttons).fadeIn("slow").show();
            $('#symptoms').on('click',function(){
                console.log("anorexia");

            })
        }
        if(this.src ==adhd.image) {
            $('#information').html(adhd.name + buttons).fadeIn("slow").show();
        }
        if(this.src ==depression.image) {
            $('#information').html(depression.name+buttons).fadeIn("slow").show();
            $('#symptoms').on('click',function(){
                $('#information').html(depression.constructSymTable(depression.allSymptoms));
            })
            $('#backGround').on('click',function(){
                $('#information').html(depression.constructBkgTable(depression.allBackground));
            })
        }
        if(this.src ==bipolar.image) {
            $('#information').html(bipolar.name+  buttons).fadeIn("slow").show();
        }
        if(this.src ==anxiety.image) {
            $('#information').html(anxiety.name+ buttons).fadeIn("slow").show();
        }
        $('#exit').html(cancel).show();
    });
    $('#exit').on('click', function () {
        console.log("bye");
        $('#coverflow').show();
        $('#information').hide();
        $(this).hide();
    });
 });
