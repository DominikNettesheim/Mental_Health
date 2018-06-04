function Disorder(image,name){
    this.name =name;
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
    this.addCauses = function(causes){
        this.allCauses=causes;
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
            table += "<tr><td>'/u2022'</td><td>" + this.allSymptoms[i]+ "</td></tr>"
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

}
var cancel = "<span id='closeInfo' class=\"close\" title=\"Close Modal\">&times;</span>";

var anorexia= new Disorder("http://www.masteradiccionesonline.com/media/anorexia985-350x350.jpg", "Anorexia");


var adhd =new Disorder("https://docassistillinois.org/wp-content/uploads/2018/03/ADHD.jpg", "Attention Deficit Hyperactivity Disorder (ADHD)");


var depression = new Disorder("https://s.mxmcdn.net/images-storage/albums4/0/6/1/7/2/6/37627160_350_350.jpg", "Depression");
depression.addBackground(["Depression is one of the most common mental illnesses.", "It affects 6.7% (more than 16 million) of American adults each year.","Depression can cause people to lose pleasure from daily life, complicate other medical conditions, and it can even be serious enough to lead to suicide","Only about a third (35.3%) of those suffering from severe depression seek treatment from a mental health professional, although the majority of people with depression have a full remission." , "Many people resist treatment because they believe depression isn't serious, that they can treat it themselves, or that it is a personal weakness rather than a serious medical illness"]);
depression.addCauses(["Biological - People with depression may have too little or too much of certain brain chemicals, called 'neurotransmitters.'  Changes in these brain chemicals may cause or contribute to depression.", "Cognitive - People with negative thinking patterns and low self-esteem are more likely to develop clinical depression.","Gender - More women experience depression than men. The reasons behind this are still unclear, they may include the hormonal changes women go through during menstruation, pregnancy, childbirth and menopause.","Co-occurrence - Depression is more likely to occur along with certain illnesses, such as heart disease, cancer, Parkinson's disease, diabetes, Alzheimer's disease, Multiple Sclerosis, and hormonal disorders.","Medications - Many medications have side effects of depression.","Genetic - A family history of depression increases the risk for developing the illness. Some studies also suggest that a combination of genes and environmental factors work together to increase risk for depression. ", " Situational - Difficult life events, including divorce, financial problems, or the death of a loved one can contribute to depression."]);
depression.addSymptom(["Persistent sad, anxious or 'empty' mood","Sleeping too much or too little, waking up in the middle of the night or early in the morning.","Reduced appetite and weight loss, or increased appetite and weight gain.", "Loss of pleasure and interest in activities once enjoyed, including sex. ", "Restlessness and irritability.", "Persistent physical symptoms that do not respond to treatment (such as chronic pain or digestive disorders).", "Feeling guilty, hopeless, or worthless and thoughts about suicide or death." ]);

var bipolar = new Disorder("https://www.cmeoutfitters.com/wp-content/uploads/2017/06/Featured_WC030series.jpg", "Bipolar");


var anxiety = new Disorder("https://www.traditionalacupuncture.com.au/CMS/wp-content/uploads/anxiety.jpg","Anxiety");
