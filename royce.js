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
            $('#infoTittle').html(anorexia.name).show();
            $('#information').html(buttons).fadeIn("slow").show();
            $('#symptoms').on('click',function(){
                $('#information').html(anorexia.constructSymTable(anorexia.allSymptoms));
            });
            $('#backGround').on('click',function(){
                $('#information').html(anorexia.constructBkgTable(anorexia.allBackground));
            });
            $('#treatments').on('click',function(){
                $('#information').html(anorexia.constructTreTable(anorexia.allTreatments));
            });
            $('#causes').on('click',function(){
                $('#information').html(anorexia.constructCasTable(anorexia.allCauses));
            });
        }
        if(this.src ==adhd.image) {
            $('#infoTittle').html(adhd.name).show();
            $('#information').html(buttons).fadeIn("slow").show();
            $('#symptoms').on('click',function(){
                $('#information').html(adhd.constructSymTable(adhd.allSymptoms));
            });
            $('#backGround').on('click',function(){
                $('#information').html(adhd.constructBkgTable(adhd.allBackground));
            });
            $('#treatments').on('click',function(){
                $('#information').html(adhd.constructTreTable(adhd.allTreatments));
            });
            $('#causes').on('click',function(){
                $('#information').html(adhd.constructCasTable(adhd.allCauses));
            });
        }
        if(this.src ==depression.image) {
            $('#infoTittle').html(depression.name).show();
            $('#information').html(buttons).fadeIn("slow").show();
            $('#symptoms').on('click',function(){
                $('#information').html(depression.constructSymTable(depression.allSymptoms));
            });
            $('#backGround').on('click',function(){
                $('#information').html(depression.constructBkgTable(depression.allBackground));
            });
            $('#treatments').on('click',function(){
                $('#information').html(depression.constructTreTable(depression.allTreatments));
            });
            $('#causes').on('click',function(){
                $('#information').html(depression.constructCasTable(depression.allCauses));
            });
        }
        if(this.src ==bipolar.image) {
            $('#infoTittle').html(bipolar.name).show();
            $('#information').html(buttons).fadeIn("slow").show();
            $('#symptoms').on('click',function(){
                $('#information').html(bipolar.constructSymTable(bipolarbipolar.allSymptoms));
            });
            $('#backGround').on('click',function(){
                $('#information').html(bipolar.constructBkgTable(bipolar.allBackground));
            });
            $('#treatments').on('click',function(){
                $('#information').html(bipolar.constructTreTable(bipolar.allTreatments));
            });
            $('#causes').on('click',function(){
                $('#information').html(bipolar.constructCasTable(bipolar.allCauses));
            });
        }
        if(this.src ==anxiety.image) {
            $('#infoTittle').html(anxiety.name).show();
            $('#information').html(buttons).fadeIn("slow").show();
            $('#symptoms').on('click',function(){
                $('#information').html(anxiety.constructSymTable(anxiety.allSymptoms));
            });
            $('#backGround').on('click',function(){
                $('#information').html(anxiety.constructBkgTable(anxiety.allBackground));
            });
            $('#treatments').on('click',function(){
                $('#information').html(anxiety.constructTreTable(anxiety.allTreatments));
            });
            $('#causes').on('click',function(){
                $('#information').html(anxiety.constructCasTable(anxiety.allCauses));
            });
        }
        $('#exit').html(cancel).show();
    });
    $('#exit').on('click', function () {
        console.log("bye");
        $('#coverflow').show();
        $('#information').hide();
        $(this).hide();
        $('#infoTittle').hide();
    });
 });
