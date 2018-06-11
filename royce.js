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
        $('#jjj').hide();
        $('#coverflow').fadeOut("slow");
        console.log(this.src);
        if(this.src == anorexia.image){
         constructAnorexia();
        }
        if(this.src ==adhd.image) {
           constructADHD()
        }
        if(this.src ==depression.image) {
            constructDepression();
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
        $('#jjj').show();
    });

 });
function constructBipolar(){
    $('#infoTittle').html(bipolar.name).show();
    $('#information').html(buttons).fadeIn("slow").show();
    $('#symptoms').on('click',function(){
        $('#information').html(bipolar.constructSymTable(bipolar.allSymptoms));
        $('#infoTittle').html("Symptoms of Bipolar");
        $('#2a').on('click', function(){
            constructBipolar();
        });    });
    $('#backGround').on('click',function(){
        $('#information').html(bipolar.constructBkgTable(bipolar.allBackground));
        $('#infoTittle').html("Background information on Bipolar");
        $('#2a').on('click', function(){
            constructBipolar();
        });
    });
    $('#treatments').on('click',function(){
        $('#information').html(bipolar.constructTreTable(bipolar.allTreatments));
        $('#infoTittle').html("Treatments for Bipolar");
        $('#2a').on('click', function(){
            constructBipolar();
        });
    });
    $('#causes').on('click',function(){
        $('#information').html(bipolar.constructCasTable(bipolar.allCauses));
        $('#infoTittle').html("Causes of Bipolar");
        $('#2a').on('click', function(){
            constructBipolar();
        });
    });
    $('#stories').on('click', function(){
        $('#infoTittle').html("Personal accounts of Bipolar");
        $('#information').html(bipolar.constructStories());
        $('#submitStories').on('click', function () {
            bipolar.addStory($('#story2a').val());
            console.log(bipolar.stories);
        });
        $('#2a').on('click', function(){
            constructBipolar();
        });
    })

}
function constructAnxiety(){
    $('#infoTittle').html(anxiety.name).show();
    $('#information').html(buttons).fadeIn("slow").show();
    $('#symptoms').on('click',function(){
        $('#information').html(anxiety.constructSymTable(anxiety.allSymptoms));
        $('#infoTittle').html("Symptoms of Anxiety");
        $('#4a').on('click', function(){
            constructAnxiety();
        });
    });
    $('#backGround').on('click',function(){
        $('#information').html(anxiety.constructBkgTable(anxiety.allBackground));
        $('#infoTittle').html("Background information on Anxiety");
        $('#4a').on('click', function(){
            constructAnxiety();
        });
    });
    $('#treatments').on('click',function(){
        $('#information').html(anxiety.constructTreTable(anxiety.allTreatments));
        $('#infoTittle').html("Treatments for Anxiety");
        $('#4a').on('click', function(){
            constructAnxiety();
        });
    });
    $('#causes').on('click',function(){
        $('#information').html(anxiety.constructCasTable(anxiety.allCauses));
        $('#infoTittle').html("Causes of Anxiety");
        $('#4a').on('click', function(){
            constructAnxiety();
        });
    });
    $('#stories').on('click', function(){
        $('#infoTittle').html("Personal accounts of Anxiety");
        $('#information').html(anxiety.constructStories());
        $('#submitStories').on('click', function () {
            anxiety.addStory($('#story4a').val());
            console.log(anxiety.stories);
        });
        $('#4a').on('click', function(){
            constructAnxiety();
        });
    })
}

function constructDepression() {
    $('#infoTittle').html(depression.name).show();
    $('#information').html(buttons).fadeIn("slow").show();
    $('#symptoms').on('click', function () {
        $('#information').html(depression.constructSymTable(depression.allSymptoms));
        $('#infoTittle').html("Symptoms of Depression");
        $('#1a').on('click', function () {
            constructDepression();
        });
    });
    $('#backGround').on('click', function () {
        $('#information').html(depression.constructBkgTable(depression.allBackground));
        $('#infoTittle').html("Background information on Depression");
        $('#1a').on('click', function () {
            constructDepression();
        });
    });
    $('#treatments').on('click', function () {
        $('#information').html(depression.constructTreTable(depression.allTreatments));
        $('#infoTittle').html("Treatments for Depression");
        $('#1a').on('click', function () {
            constructDepression();
        });
    });
    $('#causes').on('click', function () {
        $('#information').html(depression.constructCasTable(depression.allCauses));
        $('#infoTittle').html("Causes of Depression");
        $('#1a').on('click', function () {
            constructDepression();
        });
    });
    $('#stories').on('click', function () {
        $('#infoTittle').html("Personal accounts of Depression");
        $('#information').html(depression.constructStories());
        $('#submitStories').on('click', function () {
            depression.addStory($('#story1a').val());
            console.log(depression.stories);
        });
        $('#1a').on('click', function () {
            constructDepression();
        })
    });
}

function constructADHD (){
    $('#infoTittle').html(adhd.name).show();
    $('#information').html(buttons).fadeIn("slow").show();
    $('#symptoms').on('click',function(){
        $('#information').html(adhd.constructSymTable(adhd.allSymptoms));
        $('#infoTittle').html("Symptoms of ADHD");
        $('#3a').on('click', function(){
            constructADHD();
        });
    });
    $('#backGround').on('click',function(){
        $('#information').html(adhd.constructBkgTable(adhd.allBackground));
        $('#infoTittle').html("Background information on ADHD");
        $('#3a').on('click', function(){
            constructADHD();
        });
    });
    $('#treatments').on('click',function(){
        $('#information').html(adhd.constructTreTable(adhd.allTreatments));
        $('#infoTittle').html("Treatments for ADHD");
        $('#3a').on('click', function(){
            constructADHD();
        });
    });
    $('#causes').on('click',function(){
        $('#infoTittle').html("Causes of ADHD");
        $('#information').html(adhd.constructCasTable(adhd.allCauses));
        $('#3a').on('click', function(){
            constructADHD();
        });
    });
    $('#stories').on('click', function(){
        $('#infoTittle').html("Personal accounts of ADHD");
        $('#information').html(adhd.constructStories());
        $('#submitStories').on('click', function () {
            adhd.addStory($('#story3a').val());
            console.log(adhd.stories);
        });
        $('#3a').on('click', function(){
            constructADHD();
        });
    })
}

function constructAnorexia() {
    $('#infoTittle').html(anorexia.name).show();
    $('#information').html(buttons).fadeIn("slow").show();
    $('#symptoms').on('click', function () {
        $('#information').html(anorexia.constructSymTable(anorexia.allSymptoms));
        $('#infoTittle').html("Symptoms of Anorexia");
        $('#5a').on('click', function () {
            constructAnorexia();
        });
    });
    $('#backGround').on('click', function () {
        $('#infoTittle').html("Background information on Anorexia");
        $('#information').html(anorexia.constructBkgTable(anorexia.allBackground));
        $('#5a').on('click', function () {
            constructAnorexia();
        });
    });
    $('#treatments').on('click', function () {
        $('#infoTittle').html("Treatments for Anorexia");
        $('#information').html(anorexia.constructTreTable(anorexia.allTreatments));
        $('#5a').on('click', function () {
            constructAnorexia();
        });
    });
    $('#causes').on('click', function () {
        $('#infoTittle').html("Causes of Anorexia");
        $('#information').html(anorexia.constructCasTable(anorexia.allCauses));
        $('#5a').on('click', function () {
            constructAnorexia();
        });
    });
    $('#stories').on('click', function () {
        $('#infoTittle').html("Personal accounts of Anorexia");
        $('#information').html(anorexia.constructStories());
        $('#submitStories').on('click', function () {
            anorexia.addStory($('#story5a').val());
            console.log(anorexia.stories);

        });
        $('#5a').on('click', function () {
            constructAnorexia();
        });
        $('#seeStories5a').on('click',function () {
            $('#information').html(anorexia.showStories(anorexia.stories));
        })
    })
}