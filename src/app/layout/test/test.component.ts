import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test', 
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  timeRem : any = new Date();
  question : any ;
  itr =0;
  questionList =  [
      {
      	 "question" : "1.अशुद्ध विकल्प को पहचानिए  ",
        "options_a" :  "विश्वामित्र = विश्व + मित्र",
        "options_b" :  "मुसलाधार = मूसल + धार",
        "options_c" :   "सभी = सब + ही",
        "options_d" :  "दीनानाथ = दीना + नाथ ",
         "answer" : "d"},
         {	 "question" : "2.\"वह जिस पर हमला किया गया हो \" - के लिए एक शब्द चुने ",
        "options_a" :  "आत्मघात ",
        "options_b" :  "आघात ",
        "options_c" :   "आक्रांत ",
        "options_d" :  "आक्रांता",
         "answer" : "c"},
		 {	 "question" : "3.\"जो नायिका अपने प्रमी से मिलने स्वय जाए\" - के लिए एक शब्द चुने ",
        "options_a" :  "दुहिता ",
        "options_b" :  "अभिसारिका ",
        "options_c" :   "प्रोषिपतिका",
        "options_d" :  "स्व्यगमना",
         "answer" : "b"},
		 {	 "question" : "4.निम्न शब्दों में से कोन सा शब्द 'रूढ़' है ?",
        "options_a" :  "गाय ",
        "options_b" :  "विधालय",
        "options_c" :   "लम्बोदर",
        "options_d" :  "पंकज",
         "answer" : "a"},
		 {	 "question" : "5.\"यदि तुम आते तो में  भी तुम्हारे साथ चलता \" इस वाक्य हेतु सही काल है '",
        "options_a" :  "आसन्न भूतकाल ",
        "options_b" :  "हेतुहेतुमद भूतकाल  ",
        "options_c" :   "संदिग्ध भूतकाल हुआ हो ",
        "options_d" :  "अपूर्ण भूतकाल ",
         "answer" : "b"},
		 {	 "question" : " 6.\"जिसका जन्म अविवाहित कन्या के गर्भ से हुआ हो  \" - के लिए एक शब्द है ",
        "options_a" :  "कन्यापुत्र ",
        "options_b" :  "कानीन ",
        "options_c" :   "अवैध पुत्र ",
        "options_d" :  "कुमारीसुत",
         "answer" : "b"},
         {	 "question" : "किस शब्द से 'वी '  प्रत्यय का प्रयोग शुद्ध रूप से नही हुआ है? ",
         "options_a" :  "ऊर्जस्वी",
         "options_b" :  "साध्वी",
         "options_c" :   "तपस्वी ",
         "options_d" :  "मायावी ",
          "answer" : "b"},
      {	 "question" : "' मै खाना खा चूका हू | ' इस वाकय में भूतकालिक भेद इंगित कीजिये |   ",
         "options_a" :  "पूर्ण भुत ",
         "options_b" :  "सामान्य भुत ",
         "options_c" :   "आसन्न भुत ",
         "options_d" :  "संदिग्ध भुत ",
          "answer" : "a"},
      {	 "question" : "व्याकरण की दृष्टी से 'प्रेम ' शब्द क्या है ?",
         "options_a" :  "अव्यय ",
         "options_b" :  "भाववाचक संज्ञा ",
         "options_c" :   "सर्वनाम",
         "options_d" :  "शुद्धता",
          "answer" : "b"},
      {	 "question" : "कोन सा शब्द 'धनुष ' का पर्यावाची नही हैं ?",
         "options_a" :  "कोदंड ",
         "options_b" :  "विशिखासन",
         "options_c" :   "चाप ",
         "options_d" :  "विशिख ",
          "answer" : "d"},
      {	 "question" : "'गौरव' शब्द की सही व्युत्पति है ",
         "options_a" :  "गुरु + व ",
         "options_b" :  "गुरु + अ ",
         "options_c" :   "गुरु + अव ",
         "options_d" :  "गुरु + व",
          "answer" : "b"},
         {	 "question" : "'योगीश्वर' सब्द का सम्यक संधि विच्छेद होगा ",
         "options_a" :  "योगी + इश्वर ",
         "options_b" :  "योगि + इश्वर ",
         "options_c" :   "योगि + श्वर ",
         "options_d" :  "योगि + इश्वर ",
          "answer" : "d"},
         {	 "question" : "हिंदी की ' क ' ध्वनि व्याकरण की दृष्टी में है ",
         "options_a" :  "अल्पप्राण- सघोष",
         "options_b" :  "महाप्राण - सघोष",
         "options_c" :   "अल्पप्राण - अघोष",
         "options_d" :  "महाप्राण - अघोष",
          "answer" : "c"},
         {	 "question" : "'यघशाला ' शब्द में उपयुक्त समास का चयन करे  ",
         "options_a" :  "दिुतिया तत्पुरुष",
         "options_b" :  "तृतीया तत्पुरुष",
         "options_c" :   "षष्ठी तत्पुरुष",
         "options_d" :  "चतुर्थी तत्पुरुष",
          "answer" : "d"},
         {	 "question" : "'भूल गये रंग भूल गये छकड़ी , तीन चीज यद् रही नून, तेल, लकड़ी'- लोकोक्ति के लिए सही अर्थ का चयन कीजिये ",
         "options_a" :  "महगाई  के आगे की विवशता ",
         "options_b" :  "नून, तेल, लकड़ी के बिना संसार अदूर है ",
         "options_c" :   "अत्यावशक वस्तुओ से ही प्रेम ",
         "options_d" :  "ग्रहस्थी के चक्कर में फँस जाना",
          "answer" : "a"},
       {	 "question" : "उपसर्ग रहित शब्द है ",
         "options_a" :  "सुरेश ",
         "options_b" :  "सुयोग ",
         "options_c" :   "अत्याधिक",
         "options_d" :  "विदेश ",
          "answer" : "a"},
         {	 "question" : "अशुद्ध विकल्प को चुने ",
         "options_a" :  "आर्ष - अनार्ष ",
         "options_b" :  "उद्धधत - समु्द्धत",
         "options_c" :   "उन्मीलन - निमीलन",
         "options_d" :  "अर्पण - ग्रहण",
          "answer" : "b"},
         {	 "question" : "'किताब ' किस भाषा का शब्द है ?",
         "options_a" :  "अरबी ",
         "options_b" :  "फारसी ",
         "options_c" :   "अंग्रेजी ",
         "options_d" :  "हिंदी ",
          "answer" : "a"},
         {	 "question" : "'बंदूक ' एक उपयोगी ...................है |' रिक्त स्थान के लिए उचित शब्द का चयन करे " ,
         "options_a" :  "अस्त्र ",
         "options_b" :  "शस्त्र ",
         "options_c" :   "रक्षक ",
         "options_d" :  "ओजार",
          "answer" : "b"}, 
         {	 "question" : "किस शब्द में कर्मधारय समास का प्रयोग नही हुआ है ?",
         "options_a" :  "कदाचार ",
         "options_b" :  "जवाँमर्द",
         "options_c" :   "क्रोधागिन",
         "options_d" :  "कर्तव्याकर्तव्य",
          "answer" : "d"},
       
         {
        "question": "to cooperatethe adolscent it is essential to ",
        "options_a": "Inspire",
        "options_b": "Indicate his mistakes",
        "options_c": "Criticise him",
        "options_d": "Do negative behaviour",
        "answer": "a"
      },
      {
        "question": "Which of the following is not a suitable technique used by teachers fpr socializing the child ? ",
        "options_a": "Direct teaching",
        "options_b": "Identification",
        "options_c": " Democratic discipline",
        "options_d": " Over-protection",
        "answer": "d"
      },
      {
        "question": "Which of the following a Wrong statement about emotions of an adolescent ? ",
        "options_a": "Emotional expressions are modified by learning.",
        "options_b": "Emotions are permanent",
        "options_c": "Every emotion is accompanied by a feeling",
        "options_d": "Emotions are aroused by external stimuli.",
        "answer": "b"
      },
      {
        "question": "Inclusive education means ",
        "options_a": "Meeting individual difference in general classroom.",
        "options_b": "Meeting individul difference in defferent classroom.",
        "options_c": "Meeting individual differences in special schools.",
        "options_d": "Meeting individual differences in home based instruction.",
        "answer": "a"
      },
      {
        "question": " In adolescence behaviour and attitude are affected mostly by ",
        "options_a": "Teacher",
        "options_b": "Parents",
        "options_c": "Peer Groups",
        "options_d": "Films",
        "answer": "c"
      },
      {
        "question": "Moral values can be effectively inculcated among the students when teachers ",
        "options_a": "Frequently talks about values.",
        "options_b": "Himself practices them.",
        "options_c": "Tells stories of good persons",
        "options_d": "Talks of Gods and Goddnesses.",
        "answer": "b"
      },
      {
        "question": "Critical thinking helps a person in developing abilities and skills for",
        "options_a": "providing concrete experiences.",
        "options_b": "proper interpretation analysis evaluation and inference.",
        "options_c": "Creating and constructing something",
        "options_d": "thinking about ways of reacting.",
        "answer": "b"
      },
      {
        "question": "Best method of dealing with adolescent by parents and teachers is ",
        "options_a": "Autocratic",
        "options_b": "Permissive",
        "options_c": "Democratic",
        "options_d": "Restrictive",
        "answer": "c"
      },
      {
        "question": "Which of the following is not a characteristic of social development in adolesence ?",
        "options_a": "Active member of their peer group ",
        "options_b": "Being an attraction towards opposite sex",
        "options_c": "High decrease in friendly relationship",
        "options_d": "Extension of special interests",
        "answer": "c"
      },
      {
        "question": "An adolence user her/his left hand for performing act like taking food or writing, this is developed due to ",
        "options_a": "Inherited behaviour",
        "options_b": " Developmental behaviour",
        "options_c": "Wrong behaviour",
        "options_d": "All ptions are right",
        "answer": "b"
      },
      {
        "question": "Discalculia is a problem related to the problem of ",
        "options_a": "Speaking accurately",
        "options_b": "Writing without committing mistake",
        "options_c": "Listening message properly",
        "options_d": "Doing mathmatical calculations",
        "answer": "d"
      },
      {
        "question": "Continus and Compreshensive Evaluation aims to evalute ",
        "options_a": "The reasoning of child only.",
        "options_b": "All aspects of development of child",
        "options_c": "The knowledge of child only",
        "options_d": "The understanding of child only",
        "answer": "b"
      },
      {
        "question": "Which of the following is not a trait (ability) of a creative child ? ",
        "options_a": "Elaboration ",
        "options_b": "Originality",
        "options_c": "Accuracy",
        "options_d": "Novelty",
        "answer": "c"
      },
      {
        "question": "Learning outcomes means  ",
        "options_a": "Change in the behaviour of the student.",
        "options_b": "Change in the teaching method of the teacher",
        "options_c": "Recognization of the subject-matter",
        "options_d": "Completion of content.",
        "answer": "a"
      },
      {
        "question": "Differentatin of emotions takes place at the time of ",
        "options_a": "Birth of child",
        "options_b": "During infancy",
        "options_c": "During the period of adoleence",
        "options_d": "During adulthood",
        "answer": "b"
      },
      {
        "question": "Which of the following provision is not suitable to meet individual difference among learners?",
        "options_a": "Their abilitis should be assessed.",
        "options_b": "Adequate facilities and material should be provided",
        "options_c": "Labelling them",
        "options_d": "Making Individualisation necessary.",
        "answer": "c"
      },
      {
        "question": " Working with adolescents particularly maladjusted one ,which is not approprite ?",
        "options_a": "Critical aaproch ",
        "options_b": "Democratic approach",
        "options_c": "Collective approach",
        "options_d": "Ideal approach",
        "answer": "a"
      },
      {
        "question": " Heredity plays most important role in the ",
        "options_a": "Emotional development of the child.",
        "options_b": "Social development of the child",
        "options_c": "Physical development of the child",
        "options_d": "Cultural development of the  child",
        "answer": "c"
      },
      {
        "question": "The knowledge of principles of the learning is must for a good teacher, becouse",
        "options_a": "It helps in maintaining discipline.",
        "options_b": "It helps to make content interesting ",
        "options_c": "It helps to understand the content by simple methods",
        "options_d": "It saves time.",
        "answer": "c"
      },
      {
        "question": "Which of the following characteristic is not correct about objective type testing? ",
        "options_a": "Relialbility.",
        "options_b": "Objectivity",
        "options_c": "Validity",
        "options_d": "Subjectivity",
        "answer": "d"
      },
      {
        "question": "Which of the following is the characteristics of constructive classroom ? ",
        "options_a": "Student design experiments, draws conclusions and compare their findings.",
        "options_b": "Knowledge is objective, universal and complete.",
        "options_c": "Teacher transmits authoritative knowledge to students",
        "options_d": "Students look for the 'right' answer.",
        "answer": "a"
      },
      {
        "question": "Which of the following is the primary law of learning propounded by Thorndike ? ",
        "options_a": "Law of analogy",
        "options_b": "Law of exercise",
        "options_c": "Law of assimilation",
        "options_d": "Law of disposition",
        "answer": "b"
      },
      {
        "question": "According to Piaget the child is able apply logical thoughts to all classes problems, the development occurs which of the following periods ?",
        "options_a": "The formal operational period.",
        "options_b": "The concrete operational period",
        "options_c": "The pre-operational period",
        "options_d": "The sensory motor period",
        "answer": "a"
      },
      {
        "question": "A child is average on creativity , high in academic achivement, poor in social development. this is an example of  ",
        "options_a": "Inter individual differences.",
        "options_b": "Intra individual differences",
        "options_c": "Individual differences",
        "options_d": "Measurable individual differences",
        "answer": "b"
      },
      {
        "question": " That internal state of mind that aouses, direct and maintain behaviour is called as  ",
        "options_a": "Interest.",
        "options_b": "Opinion",
        "options_c": "Attitude",
        "options_d": "Motivation",
        "answer": "d"
      },
      {
        "question": "Some people adjust easily with new people becouse they heve high   ",
        "options_a": "Intelligence Quotient (I.Q).",
        "options_b": "Academic Quotient (A.Q)",
        "options_c": "Emotional Quotient (E.Q)",
        "options_d": "Spirtual Quotient (S.Q)",
        "answer": "c"
      },
      {
        "question": "Development generally proceeds from head to foot, this principle of development is called ",
        "options_a": "Bilaterly to unilateral.",
        "options_b": "Proximodistal",
        "options_c": "General to specific",
        "options_d": "Cephlo caudal",
        "answer": "d"
      },
      {
        "question": "A student is working hard for Board Examination, his father has promised to giv him a motor cycle if he gets good marks .this is ",
        "options_a": "Intrinsic motivation ",
        "options_b": "Extrinsic motivation",
        "options_c": "Mathematical motivation",
        "options_d": "Intrinsic and extrinsic motivation",
        "answer": "d"
      },
      {
        "question": "Which of the following statements is not correct about learner centred approach? ",
        "options_a": "It takes into account learner's caapabilities, capacities and learning styles.",
        "options_b": "It stresses the importance of enquiry, observatio and investigation.",
        "options_c": "It emphasises transmitting knowledge to the learner by the teacher.",
        "options_d": "It used methods like experiential learning, problem solving,concept mapping and creative writing",
        "answer": "c"
      },
      {
        "question": "A child's attitude 'I do not care' is a type of behaviour which can be called  ",
        "options_a": "Aggression",
        "options_b": "Defence",
        "options_c": "Denial",
        "options_d": "Retrogression",
        "answer": "d"
      },
      {
        "question": "Which of the following is not a characteristic of introvert personality?",
        "options_a": "Self centerd",
        "options_b": "Conservative",
        "options_c": "Sociality",
        "options_d": "Submissive",
        "answer": "c"
      },
      {
        "question": "The law of readiness as one of the law of learning has been propounded by : ",
        "options_a": "Edward L. Thorndike",
        "options_b": "John B.Watson",
        "options_c": "Evan Patrovich Pavlov",
        "options_d": "Max-Wertheimer",
        "answer": "a"
      },
      {
        "question": "Which of the following method is not approprite for the teaching at primary level?",
        "options_a": "Problem solving method",
        "options_b": "Activity approach",
        "options_c": "Lecture method",
        "options_d": "Project method",
        "answer": "c"
      },
      {
        "question": "The dynamic force that energises behavior and compels to act to learn is :",
        "options_a": "Goal",
        "options_b": "Drive",
        "options_c": "Barrier",
        "options_d": "All options are right",
        "answer": "b"
      },
      {
        "question": "Which of the following is known as ethical moral arm of the personality",
        "options_a": "Id",
        "options_b": "Ego",
        "options_c": "Super-ego",
        "options_d": "Id and super-ego",
        "answer": "c"
      },
      {
        "question": "The subject matter of educational psychology revolves round which of the following key factor?",
        "options_a": "Learner and learning experiences",
        "options_b": "Teacher and learning process",
        "options_c": "Learning situations",
        "options_d": "All options are right",
        "answer": "d"
      },
      {
        "question": "Which of the following is correct?",
        "options_a": "Maturity has importance of practice ",
        "options_b": "Maturity is a psychological process",
        "options_c": "Maturity continues till death",
        "options_d": "Maturity involves only quanitative change",
        "answer": "b"
      },
      {
        "question": "Educational psychology emphasizes on :",
        "options_a": "Teacher centred education",
        "options_b": "Child centred education",
        "options_c": "curriculum centred education",
        "options_d": "School centred education",
        "answer": "c"
      },
      {
        "question": "Which of the following is the characteristice of the stage of later childhood?",
        "options_a": "Self-assertion",
        "options_b": "Time concept",
        "options_c": "Social tendency",
        "options_d": "Hero worship",
        "answer": "c"
      },
      {
        "question": "How many stages of cognitive development has been narrted by jean piaget?",
        "options_a": "Eight stages",
        "options_b": "Five stages",
        "options_c": "Six stages",
        "options_d": "Four stages",
        "answer": "d"
      },
      {
        "question": "Which of the followig statement is not correct?",
        "options_a": "Intelligence and creativity are synonym",
        "options_b": "An intelligent person may not be creative  ",
        "options_c": "A creative person may have high degree of intelligence ",
        "options_d": "Creativity can be nurtured",
        "answer": "a"
      },
      {
        "question": "Why should co-curricular activities be organized in the school?",
        "options_a": "It help institution to get frame",
        "options_b": "It help in the overall development of child ",
        "options_c": " It help in justification of fee collection",
        "options_d": "It is important for those students who do not take interest in study",
        "answer": "b"
      },
      {
        "question": "Which of the following aspect comes under mental development?",
        "options_a": "Language",
        "options_b": "Size",
        "options_c": "Affection",
        "options_d": "Honesty",
        "answer": "a"
      },
      {
        "question": "A normal child belongs to which of the following I.Q level?",
        "options_a": "70-79",
        "options_b": "80-89",
        "options_c": "90-109",
        "options_d": "110-119",
        "answer": "c"
      },
      {
        "question": "Mental growth and development is controlled by which of the following factor?",
        "options_a": "Heredity",
        "options_b": "Heredity and enviroment factor",
        "options_c": "Enviroment factor only",
        "options_d": "None of the above ",
        "answer": "b"
      },
      {
        "question": "Which of the following play important role in the development of moral values in te child?",
        "options_a": "Prayer assembly",
        "options_b": "Proper socialization",
        "options_c": "Intellect",
        "options_d": "All options are right",
        "answer": "d"
      },
      {
        "question": "Teaching aid is used in the class for:",
        "options_a": "Creating specific learning conditions",
        "options_b": "Reducing burden on the teacher",
        "options_c": "Maintaining discipline in the class",
        "options_d": "Being complulsory in the teaching",
        "answer": "a"
      },
      {
        "question": "Which of the following is an example of intrinsic motivation?",
        "options_a": "Selection in school's football team",
        "options_b": "Solving a problem for its own sake",
        "options_c": "Getting a dress on birthday",
        "options_d": "All options are right",
        "answer": "b"
      },
      {
        "question": "Gagne is his book \" theconditionsoflearning \" has described how may types of learning?  ",
        "options_a": "Five types",
        "options_b": "Eight types",
        "options_c": "Seven types",
        "options_d": "Ten types",
        "answer": "b"
      },
      {
        "question": "The stage when child drives less enjoyment from his parents,is related to his:",
        "options_a": "Physical development",
        "options_b": "Mental development",
        "options_c": "Language development",
        "options_d": "Social development",
        "answer": "d"
      },
      {
        "question": "Which of the following enviromental factors affects the personality?",
        "options_a": "Social factors",
        "options_b": "Cultural factors",
        "options_c": "Economi factors",
        "options_d": "All options are right",
        "answer": "d"
      },
      {
        "question": "Which of the following statement is not correct?",
        "options_a": "Growth and development are two different aspects",
        "options_b": "Growth continuse throughout life",
        "options_c": "Growth is one of the part of development",
        "options_d": "Development is a continuous process",
        "answer": "b"
      },
      {
        "question": "What is parallel play?",
        "options_a": "Playing in groups",
        "options_b": "Participation in small groups",
        "options_c": "Role Play",
        "options_d": "Playing separately",
        "answer": "d"
      },
      {
        "question": "Which of the following action verb is not affective domain?",
        "options_a": "Accept",
        "options_b": "Obey",
        "options_c": "Differentiate",
        "options_d": "Influence",
        "answer": "c"
      },
      {
        "question": "Propounder of model of memory level teaching is :",
        "options_a": "John F.Herbert",
        "options_b": "H.C.Morrison",
        "options_c": "Ned A.Flenders",
        "options_d": "None of above",
        "answer": "a"
      },
      {
        "question": "Which of the following is not a source of informal education?",
        "options_a": "Education given by parents",
        "options_b": "Education given by neighbours",
        "options_c": "Education by peer groups",
        "options_d": "Educattion through class-room teaching",
        "answer": "d"
      },
      {
        "question": "A valid and reliable method to draw conclusion about interest and aptitude of the learner is :",
        "options_a": "Objective observation method",
        "options_b": "Introduction method",
        "options_c": "Experimental method",
        "options_d": "All options are right",
        "answer": "a"
      },
      {
        "question": "Which of the following teaching strategy fulfils learning objectives under cognitive, affective and psychmotor domain?",
        "options_a": "Lectures",
        "options_b": "Group discussion",
        "options_c": "Role playing",
        "options_d": "Programmed instruction",
        "answer": "c"
      },
      {
        "question": "Reinforcement is a part of which of the following process?",
        "options_a": "Teaching",
        "options_b": "Learning",
        "options_c": "Instructions",
        "options_d": "None of the above",
        "answer": "2"
      },
      {
        "question": "Which of the following factor is responsible for individual difference among children?",
        "options_a": "Attitude of parents",
        "options_b": "Intelligence",
        "options_c": "Race",
        "options_d": "Place",
        "answer": "d"
      }
    ]
  constructor(private router: Router) { }

  ngOnInit() {
    setInterval(()=>{
      this.timeRem = new Date();
    },1000);
    this.question = this.questionList[0];
  }


  navigateToTest() {
    this.router.navigate(['/score']);
  }

  saveAndNext(){
    this.question = this.questionList[++this.itr];
  }
  
 
  

}
