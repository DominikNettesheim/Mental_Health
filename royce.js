var goBack = "<button id = 'goBack'>Back to options</button>";
var buttons = "<button id = 'symptoms'>Symptoms</button> <button id ='backGround'>Background</button>  <button id = 'treatments'>Treatments</button> <button id = 'causes'>Causes</button><button id = 'stories'>Personal Stories</button>";
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
        if(this.src == anorexia.image || $('#5').on('click')){
            $('#infoTittle').html(anorexia.name).show();
            $('#information').html(buttons).fadeIn("slow").show();
            $('#symptoms').on('click',function(){
                $('#information').html(anorexia.constructSymTable(anorexia.allSymptoms));
                $('#infoTittle').html("Symptoms of Anorexia");
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
                $('#infoTittle').html("Symptoms of ADHD");
            });
            $('#backGround').on('click',function(){
                $('#information').html(adhd.constructBkgTable(adhd.allBackground));
                $('#infoTittle').html("Background information of ADHD")
            });
            $('#treatments').on('click',function(){
                $('#information').html(adhd.constructTreTable(adhd.allTreatments));
                $('#infoTittle').html("Treatments of ADHD");
            });
            $('#causes').on('click',function(){
                $('#infoTittle').html("Causes of ADHD");
                $('#information').html(adhd.constructCasTable(adhd.allCauses));
            });
        }
        if(this.src ==depression.image) {
            $('#infoTittle').html(depression.name).show();
            $('#information').html(buttons).fadeIn("slow").show();
            $('#symptoms').on('click',function(){
                $('#information').html(depression.constructSymTable(depression.allSymptoms));
                $('#infoTittle').html("Symptoms of Depression");
            });
            $('#backGround').on('click',function(){
                $('#information').html(depression.constructBkgTable(depression.allBackground));
                $('#infoTittle').html("Background information of Depression")
            });
            $('#treatments').on('click',function(){
                $('#information').html(depression.constructTreTable(depression.allTreatments));
                $('#infoTittle').html("Treatments of Depression");
            });
            $('#causes').on('click',function(){
                $('#information').html(depression.constructCasTable(depression.allCauses));
                $('#infoTittle').html("Causes of Depression")
            });
        }
        if(this.src ==bipolar.image) {
            constructBipolar()
        }
        if(this.src ==anxiety.image) {
            constructAnxiety();
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
function constructBipolar(){
    $('#infoTittle').html(bipolar.name).show();
    $('#information').html(buttons).fadeIn("slow").show();
    $('#symptoms').on('click',function(){
        $('#information').html(bipolar.constructSymTable(bipolar.allSymptoms));
        $('#infoTittle').html("Symptoms of Bipolar");
        console.log(bipolar.allSymptoms);
    });
    $('#backGround').on('click',function(){
        $('#information').html(bipolar.constructBkgTable(bipolar.allBackground));
        $('#infoTittle').html("Background information of Bipolar")
    });
    $('#treatments').on('click',function(){
        $('#information').html(bipolar.constructTreTable(bipolar.allTreatments));
        $('#infoTittle').html("Treatments of Bipolar");
    });
    $('#causes').on('click',function(){
        $('#information').html(bipolar.constructCasTable(bipolar.allCauses));
        $('#infoTittle').html("Causes of Bipolar")
    });

}
function constructAnxiety(){
    $('#infoTittle').html(anxiety.name).show();
    $('#information').html(buttons).fadeIn("slow").show();
    $('#symptoms').on('click',function(){
        $('#information').html(anxiety.constructSymTable(anxiety.allSymptoms));
        $('#infoTittle').html("Symptoms of Anxiety");
    });
    $('#backGround').on('click',function(){
        $('#information').html(anxiety.constructBkgTable(anxiety.allBackground));
        $('#infoTittle').html("Background information of Anxiety")
    });
    $('#treatments').on('click',function(){
        $('#information').html(anxiety.constructTreTable(anxiety.allTreatments));
        $('#infoTittle').html("Treatments of Anxiety");
    });
    $('#causes').on('click',function(){
        $('#information').html(anxiety.constructCasTable(anxiety.allCauses));
        $('#infoTittle').html("Causes of Anxiety")
    });
};

function