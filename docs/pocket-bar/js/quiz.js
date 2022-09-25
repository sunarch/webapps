/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/


function quizClass() {
    this.currentQuestion = -1;
    this.questions = [
        { id: "1", questionType: "1", drink: new singleDrinkDatabaseClass },
        { id: "2", questionType: "1", drink: new singleDrinkDatabaseClass },
        { id: "3", questionType: "1", drink: new singleDrinkDatabaseClass },
        { id: "4", questionType: "1", drink: new singleDrinkDatabaseClass },
        { id: "5", questionType: "1", drink: new singleDrinkDatabaseClass },
        { id: "6", questionType: "1", drink: new singleDrinkDatabaseClass },
        { id: "7", questionType: "1", drink: new singleDrinkDatabaseClass },
        { id: "8", questionType: "1", drink: new singleDrinkDatabaseClass },
        { id: "9", questionType: "2", drink: new singleDrinkDatabaseClass },
        { id: "10", questionType: "2", drink: new singleDrinkDatabaseClass },
        { id: "11", questionType: "2", drink: new singleDrinkDatabaseClass } ];
}
quiz = new quizClass();


function displayQuiz(part) {
    var quizSectionNewContent;
    var domRef_quizContainer;
    var domRef_quizWrapper;
    var dom_div;
    var dom_input;
    var dom_select;
    var dom_text;
    var xmlhttp;
    var drinkCount = 0;
    var drinkIndexes = [];
    var newRandomIndex = 0;
    var newQuestionValue = "";
    var n1 = 0;
    var n2 = 0;
    
    quizSectionNewContent = document.createElement("div");
    
    // code for IE7+, Firefox, Chrome, Opera, Safari
        if ( window.XMLHttpRequest ) { xmlhttp = new XMLHttpRequest(); }
    // code for IE6, IE5
        else { xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); }
    
    switch(part) {
        case "start":
            
            // copy the drinklist to a new variable - must not be an object reference!
            for (n2 = 0; n2 < DB.drinkListAttrId.length; n2 = n2 + 1) {
                drinkIndexes.push(DB.drinkListAttrId[n2]);
            }
            
            // Set questions randomly
            for (n1 = 0; n1 < quiz.questions.length; n1 = n1 + 1) {
                drinkCount = drinkIndexes.length - 1;
                newRandomIndex = Math.round( drinkCount * Math.random() );
                newQuestionValue = drinkIndexes[newRandomIndex];
                quiz.questions[n1].id = newQuestionValue;
                
                // get and process data for the current drink in this loop
                xmlhttp.onreadystatechange = function() {
                    var newXML;
                    
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    // BEGIN: onReady
                        newXML = xmlhttp.responseXML;
                        quiz.questions[n1].drink.id = quiz.questions[n1].id;
                        processDrinkXML( newXML, quiz.questions[n1].drink );
                    }
                };
                xmlhttp.open("GET", '/resource.php?xml=pocketbar/drink_data/' + quiz.questions[n1].id , false);
                xmlhttp.send();
                
                // advance loop-influenced variables
                drinkIndexes.splice(newRandomIndex,1);
            }
            
            // create Start display
            dom_div = document.createElement("div");
                dom_text = document.createTextNode("Új teszt");
                dom_div.appendChild(dom_text);
            quizSectionNewContent.appendChild(dom_div);
            dom_input = document.createElement("input");
                dom_input.setAttribute("type","button");
                dom_input.setAttribute("value","Indítás");
                dom_input.setAttribute("onClick","displayQuiz('nextQuestion')");
            quizSectionNewContent.appendChild(dom_input);
            
            // Set window title and location hash
            window.location.hash = "quiz";
            document.getElementsByTagName("title")[0].firstChild.nodeValue = "Pocket Bar Quiz";
            // Unset single picture
            document.getElementById("drink_picture").src = "";
            // Display and hide sections as needed
            document.getElementById("section_pocketbar_welcome").style.display = "none";
            document.getElementById("section_pocketbar_drink").style.display = "none";
            document.getElementById("box_pocketbar_picture").style.display = "none";
            document.getElementById("section_pocketbar_list").style.display = "none";
            document.getElementById("section_pocketbar_quiz").style.display = "block";
            break;
            
        case "nextQuestion":
            // advance the pointer variable for the current question
            quiz.currentQuestion = quiz.currentQuestion + 1;
            // display question and answers
            switch(quiz.questions[quiz.currentQuestion]) {
                case "1":
                    
                    break;
                case "2":
                    
                    break;
                default:
                    break;
            }
            // create different bottoms for the last question and all the ones before
            if (quiz.currentQuestion < quiz.questions.length) {
                dom_input = document.createElement("input");
                    dom_input.setAttribute("type","button");
                    dom_input.setAttribute("value","Ellenőrzés");
                    dom_input.setAttribute("onClick","");
                quizSectionNewContent.appendChild(dom_input);
                dom_input = document.createElement("input");
                    dom_input.setAttribute("type","button");
                    dom_input.setAttribute("value","Következő kérdés");
                    dom_input.setAttribute("onClick","");
                quizSectionNewContent.appendChild(dom_input);
            }
            else { // the last question
                dom_input = document.createElement("input");
                    dom_input.setAttribute("type","button");
                    dom_input.setAttribute("value","Ellenőrzés");
                    dom_input.setAttribute("onClick","");
                quizSectionNewContent.appendChild(dom_input);
                dom_input = document.createElement("input");
                    dom_input.setAttribute("type","button");
                    dom_input.setAttribute("value","Eredmény");
                    dom_input.setAttribute("onClick","");
                quizSectionNewContent.appendChild(dom_input);
            }
            break;
        case "summary":
            
            break;
        default:
            break;
    }
    // delete and recreate the list so that it will be empty
    domRef_quizContainer = document.getElementById("quizContainer");
    domRef_quizWrapper = document.getElementById("quizWrapper");
    domRef_quizContainer.removeChild(domRef_quizContainer.childNodes[0]);
    // create a new childnode to replace the one just deleted
    dom_div = document.createElement("div");
        dom_div.setAttribute( "id", "quizWrapper" );
    domRef_quizContainer.appendChild(dom_div);
    // insert newly generated content
    domRef_quizWrapper = document.getElementById("quizWrapper");
    domRef_quizWrapper.appendChild(quizSectionNewContent);
}
