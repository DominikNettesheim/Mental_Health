var anorexia= "http://www.masteradiccionesonline.com/media/anorexia985-350x350.jpg";
var adhd ="https://docassistillinois.org/wp-content/uploads/2018/03/ADHD.jpg";
var depression ="https://s.mxmcdn.net/images-storage/albums4/0/6/1/7/2/6/37627160_350_350.jpg";
var bipolar ="https://www.cmeoutfitters.com/wp-content/uploads/2017/06/Featured_WC030series.jpg";
var anxiety = "https://www.traditionalacupuncture.com.au/CMS/wp-content/uploads/anxiety.jpg";
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
        if(this.src == anorexia){
            console.log("good");
        }
        $('#information').html("hello").fadeIn("slow");
    });
 });
