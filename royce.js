function Disorder(image,message){
    this.stories= [];
    this.image=image;
    this.message =message;
    function addStory(story){
        this.stories.push(story);
    }
}
var abrvStart="<table><tr><td>";
var abrv
var cancel = "<span id='closeInfo' class=\"close\" title=\"Close Modal\">&times;</span>";
var anorexia= new Disorder("http://www.masteradiccionesonline.com/media/anorexia985-350x350.jpg");
var adhd =new Disorder("https://docassistillinois.org/wp-content/uploads/2018/03/ADHD.jpg");
var depression = new Disorder("https://s.mxmcdn.net/images-storage/albums4/0/6/1/7/2/6/37627160_350_350.jpg");
var bipolar = new Disorder("https://www.cmeoutfitters.com/wp-content/uploads/2017/06/Featured_WC030series.jpg");
var anxiety = new Disorder("https://www.traditionalacupuncture.com.au/CMS/wp-content/uploads/anxiety.jpg");
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
        $('#information').html("hello").fadeIn("slow");
        $('#exit').html(cancel).show();
    });
    $('#exit').on('click', function () {
        console.log("bye");
        $('#coverflow').show();
        $('#information').hide();
        $(this).hide();
    });
 });
