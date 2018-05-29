function Disorder(image){
    this.stories= [];
    this.image=image;
    this.allSymptoms =[];
    this.allBackground =[];
    this.allTreatments =[];
    this.allCauses = [];
    this.addSymptom = function(symptoms){
        this.allSymptoms.push(symptoms);
    }
    this.addTreatments = function(treatments){
        this.allTreatments.push(treatments);
    }
    this.addStory =function(story){
        this.stories.push(story);
    }
    this.addBackground = function(backgroundInfo){
        this.allBackground.push(backgroundInfo);
    }
    function constructSymTable (arry){
        var table = "<table border = '0'>";
        for(var i = 0; i < arry.length; i ++){
            table += "<tr><td>" + this.allSymptoms[i]+ "</td></tr>"
        }
        table += "</table>";
        return table;
    }
    function constructTreTable (arry){
        var table = "<table border = '0'>";
        for(var i = 0; i < arry.length; i ++){
            table += "<tr><td>" + this.allTreatments[i]+ "</td></tr>"
        }
        table += "</table>";
        return table;
    }
    function constructCasTable (arry){
        var table = "<table border = '0'>";
        for(var i = 0; i < arry.length; i ++){
            table += "<tr><td>" + this.allCauses[i]+ "</td></tr>"
        }
        table += "</table>";
        return table;
    }
    function constructBkgTable (arry){
        var table = "<table border = '0'>";
        for(var i = 0; i < arry.length; i ++){
            table += "<tr><td>" + this.allBackground[i]+ "</td></tr>"
        }
        table += "</table>";
        return table;
    }

}
var cancel = "<span id='closeInfo' class=\"close\" title=\"Close Modal\">&times;</span>";
var anorexia= new Disorder("http://www.masteradiccionesonline.com/media/anorexia985-350x350.jpg");
var adhd =new Disorder("https://docassistillinois.org/wp-content/uploads/2018/03/ADHD.jpg");
var depression = new Disorder("https://s.mxmcdn.net/images-storage/albums4/0/6/1/7/2/6/37627160_350_350.jpg");
var bipolar = new Disorder("https://www.cmeoutfitters.com/wp-content/uploads/2017/06/Featured_WC030series.jpg");
var anxiety = new Disorder("https://www.traditionalacupuncture.com.au/CMS/wp-content/uploads/anxiety.jpg");
