function Disorder(image){
    this.stories= [];
    this.image=image;
    this.allSymptoms =[];
    this.allBackground =[];
    this.allTreatments =[];
    this.allCauses = [];
    this.addSymptom = function(symptoms){
        this.allSymptoms =symptoms;
    };
    this.addTreatments = function(treatments){
        this.allTreatments=treatments;
    };
    this.addStory =function(story){
        this.stories=story;
    };
    this.addBackground = function(backgroundInfo) {
        this.allBackground= backgroundInfo;
    };
    this.constructSymTable =function(arry){
        var table = "<table border = '0'>";
        for(var i = 0; i < arry.length; i ++){
            table += "<tr><td>" + this.allSymptoms[i]+ "</td></tr>"
        }
        table += "</table>";
        return table;
    };
    this.constructTreTable =function(arry){
        var table = "<table border = '0'>";
        for(var i = 0; i < arry.length; i ++){
            table += "<tr><td>" + this.allTreatments[i]+ "</td></tr>"
        }
        table += "</table>";
        return table;
    };
    this.constructCasTable =function(arry){
        var table = "<table border = '0'>";
        for(var i = 0; i < arry.length; i ++){
            table += "<tr><td>" + this.allCauses[i]+ "</td></tr>"
        }
        table += "</table>";
        return table;
    };
    this.constructBkgTable =function(arry){
        var table = "<table border = '0'>";
        for(var i = 0; i < arry.length; i ++){
            table += "<tr><td>" + this.allBackground[i]+ "</td></tr>"
        }
        table += "</table>";
        return table;
    }

};
var cancel = "<span id='closeInfo' class=\"close\" title=\"Close Modal\">&times;</span>";

var anorexia= new Disorder("http://www.masteradiccionesonline.com/media/anorexia985-350x350.jpg");


var adhd =new Disorder("https://docassistillinois.org/wp-content/uploads/2018/03/ADHD.jpg");


var depression = new Disorder("https://s.mxmcdn.net/images-storage/albums4/0/6/1/7/2/6/37627160_350_350.jpg");
depression.addBackground(["Depression is one of the most common mental illnesses.", "It affects 6.7% (more than 16 million) of American adults each year.","Depression can cause people to lose pleasure from daily life, complicate other medical conditions, and it can even be serious enough to lead to suicide","Only about a third (35.3%) of those suffering from severe depression seek treatment from a mental health professional, although the majority of people with depression have a full remission." , "Many people resist treatment because they believe depression isn't serious, that they can treat it themselves, or that it is a personal weakness rather than a serious medical illness"]);

var bipolar = new Disorder("https://www.cmeoutfitters.com/wp-content/uploads/2017/06/Featured_WC030series.jpg");


var anxiety = new Disorder("https://www.traditionalacupuncture.com.au/CMS/wp-content/uploads/anxiety.jpg");
