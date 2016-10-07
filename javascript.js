 var score = 0;
            function startreset(){
                var startresettext = document.getElementById("startreset");
            
                if(startresettext.innerHTML.trim() === "Start Game"){
                    startresettext.innerHTML = "Reset";
                    document.getElementById("timeremaining").style.display = "block";
                     var time = 60;
                     document.getElementById("timeremainingvalue").innerHTML = 60;
                        var counter = setInterval(function(){
                            time--;
                            document.getElementById("timeremainingvalue").innerHTML = time;
                            if(time === 0 ){
                                clearInterval(counter);
                                document.getElementById("gameover").style.display = "block";
                                document.getElementById("finalscore").innerHTML = score;
                                document.getElementById("timeremaining").style.display = "none";
                                document.getElementById("startreset").innerHTML = "Start Game";
                            }  
                },1000);
                    document.getElementById("gameover").style.display= "none";
                    gameLogic();
                }
                else{
                    location.reload();
                }
                
            }
            
            function gameLogic(){
                var x = Math.round(Math.random() * 10);
                var y = Math.round(Math.random() * 10);
                var answer = x*y;
                var wrongAnswers = [];
                var numBoxes =4;
                var correctAnswerPosition = Math.round(Math.random() * (numBoxes-1))+1;
                
                for(let i =0; i<numBoxes; i++){
                    var wrongAns = Math.round(Math.random() * 10) * Math.round(Math.random() * 10);
                                        
                    while((wrongAns == answer) || compareWithWrongAns(wrongAnswers,wrongAns)){
                        wrongAns = Math.round(Math.random() * 10) * Math.round(Math.random() * 10);
                    }
                    wrongAnswers[i] = wrongAns;
                }
                document.getElementById("question").innerHTML = (x + " x " + y);
                
                var currBox = 1;
                var pos = 0;
                
                while(currBox <= numBoxes){
                    if(currBox == correctAnswerPosition){
                        document.getElementById("box"+correctAnswerPosition).innerHTML =  answer ;
                        currBox++;
                        continue;
                    }
                    document.getElementById("box"+currBox).innerHTML = wrongAnswers[pos++];
                    currBox++;
                }
                
                for(let i =1; i<5;i++ ){
                    document.getElementById("box" + i).onclick =
                        function(){
                            checkAnswer(correctAnswerPosition,i)
                    };
                }
            }
            
            function checkAnswer(correct,choice){
                if(correct == choice){
                    document.getElementById("correct").style.display = "block";
                    document.getElementById("scorevalue").innerHTML = ++score;
                    setTimeout(function(){
                        document.getElementById("correct").style.display = "none";

                    },350);
                    gameLogic();
                }else{
                    document.getElementById("wrong").style.display = "block";
                    setTimeout(function(){
                        document.getElementById("wrong").style.display = "none";

                    },350);

                }
            }

            function compareWithWrongAns(wrongAnswers,wrongAnswer){
                for(let i =1;i<wrongAnswers.length;i++){
                    if(wrongAnswer == wrongAnswers[i]){
                       return true;
                    }

                }
                return false;
            }
        