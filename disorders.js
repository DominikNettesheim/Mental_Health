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
        var table = "<table border = '0'><tr><td><ul>";
        for(var i = 0; i < arry.length; i ++){
            table += "<li>" + this.allSymptoms[i]+ "</li>"
        }
        table += "</ul></td></tr></table>";
        return table;
    };
    this.constructTreTable =function(arry){
        var table = "<table border = '0'><tr><td><ul>";
        for(var i = 0; i < arry.length; i ++){
            table += "<li>" + this.allTreatments[i]+ "</li>"
        }
        table += "</ul></td></tr></table>";
        return table;
    };
    this.constructCasTable =function(arry){
        var table = "<table border = '0'><tr><td><ul>";
        for(var i = 0; i < arry.length; i ++){
            table += "<li>" + this.allCauses[i]+ "</li>"
        }
        table += "</ul></td></tr></table>";
        return table;
    };
    this.constructBkgTable =function(arry){
        var table = "<table border = '0'><tr><td><ul>";
        for(var i = 0; i < arry.length; i ++){
            table += "<li>" + this.allBackground[i]+ "</li>"
        }
        table += "</ul></td></tr></table>";
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
depression.addTreatments(["The main treatment for depression is usually antidepressant medication, psychotherapy (talk therapy), or a combination of the two.","Research suggests these treatments may normalize brain changes associated with depression.","Many people hesitate to use antidepressant medication because of the side effects such as nausea, increased appetite and weight gain, loss of sexual desire and other sexual problems such as erectile dysfunction and decreased orgasm, fatigue and drowsiness, insomnia, dry mouth, blurred vision, and constipation.","As with many illnesses, early treatment is more effective and helps prevent the likelihood of serious recurrences.  Depression must be treated by a physician or qualified mental health professional.", "The majority of those who seek treatment show improvement in their depression."]);
var bipolar = new Disorder("https://www.cmeoutfitters.com/wp-content/uploads/2017/06/Featured_WC030series.jpg", "Bipolar");
bipolar.addBackground(["Bipolar disorder, also known as manic-depressive illness, is a brain disorder that causes unusual shifts in mood, energy, activity levels, and the ability to carry out day-to-day tasks.","Bipolar I Disorder— defined by manic episodes that last at least 7 days, or by manic symptoms that are so severe that the person needs immediate hospital care. Usually, depressive episodes occur as well, typically lasting at least 2 weeks. Episodes of depression with mixed features (having depression and manic symptoms at the same time) are also possible.","Bipolar II Disorder— defined by a pattern of depressive episodes and hypomanic episodes, but not the full-blown manic episodes described above.","Cyclothymic Disorder (also called cyclothymia)— defined by numerous periods of hypomanic symptoms as well numerous periods of depressive symptoms lasting for at least 2 years (1 year in children and adolescents). However, the symptoms do not meet the diagnostic requirements for a hypomanic episode and a depressive episode.","Other Specified and Unspecified Bipolar and Related Disorders— defined by bipolar disorder symptoms that do not match the three categories listed above."]);
bipolar.addCauses(["People with bipolar disorder experience periods of unusually intense emotion, changes in sleep patterns and activity levels, and unusual behaviors. These distinct periods are called “mood episodes.” Mood episodes are drastically different from the moods and behaviors that are typical for the person. Extreme changes in energy, activity, and sleep go along with mood episodes."]);
bipolar.addTreatments(["There is no cure for this disorder but treatment can help to lessen the symptoms.","Treatment is usually lifelong and often involves a combination of medications and psychotherapy.","Talking with a doctor or other licensed mental health professional is the first step for anyone who thinks he or she may have bipolar disorder. The doctor can complete a physical exam to rule out other conditions. If the problems are not caused by other illnesses, the doctor may conduct a mental health evaluation or provide a referral to a trained mental health professional, such as a psychiatrist, who is experienced in diagnosing and treating bipolar disorder."]);
bipolar.addSymptom(["Mood: mood swings, sadness, elevated mood, anger, anxiety, apathy, apprehension, euphoria, general discontent, guilt, hopelessness, loss of interest, or loss of interest or pleasure in activities.","Behavioral: irritability, risk taking behaviors, disorganized behavior, aggression, agitation, crying, excess desire for sex, hyperactivity, impulsivity, restlessness, or self-harm.","Cognitive: unwanted thoughts, delusion, lack of concentration, racing thoughts, slowness in activity, or false belief of superiority.","Psychological: depression, manic episode, agitated depression, or paranoia.","Also common: fatigue or rapid and frenzied speaking."]);
var anxiety = new Disorder("https://www.traditionalacupuncture.com.au/CMS/wp-content/uploads/anxiety.jpg","Anxiety");
anxiety.addBackground(["Anxiety disorders are the most common psychiatric illnesses affecting children and adults.","An estimated 44 million American adults suffer from anxiety disorders.","Only about one-third of those suffering from an anxiety disorder receive treatment, even though the disorders are highly treatable.","Anxiety can be an excessive, irrational dread of everyday situations, and it can be disabling.","When anxiety interferes with daily activities, you may have an anxiety disorder."]);
anxiety.addCauses(["Certain mental conditions that can lead to anxiety such as: Panic disorders, Generalized anxiety disorder, Phobic disorders, and Stress orders","Some common external factors that contribute to anxiety are: Stress from work, school, personal relationships, finances, emotional trauma, and medical illness, side effects of medication, use of an illicit drug, such as cocaine, symptoms of a medical illness (such as a heart attack, heat stroke, hypoglycemia), lack of oxygen in circumstances such as high altitude sickness"]);
anxiety.addSymptom(["Panic, fear, and uneasiness.","Sleep problems.","Not being able to stay calm and still.","Cold, sweaty, numb or tingling hands or feet.","Shortness of breath.","Heart palpitations.","Dry mouth.","Nausea and dizziness.","Tense muscles."]);
anxiety.addTreatments(["Cutting back on foods or drinks that have caffeine, such as coffee, tea, cola, energy drinks, and chocolate. Caffeine is a mood-altering drug, and it can make symptoms of anxiety disorders worsen.","Eating right, exercising, and getting better sleep. Aerobic exercises such as jogging or biking help release brain chemicals that can reduce stress and improve your mood.","Follow a relaxing bedtime routine","Over the counter meds or herbal remedies."]);