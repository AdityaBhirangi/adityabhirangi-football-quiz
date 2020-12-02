const chalk = require('chalk');
var readlinesync = require('readline-sync');

function log(data){
  console.log(data);
}

var score=0;
var userName = readlinesync.question("What is your name??\n");
log(chalk.bold("Welcome to Aditya's Football Quiz!\n")+ chalk.bgBlue("Let's put your football knowledge to the test!\n"));

var quiz = [
  {
    name: "Which European Club has won the most titles? (Difficulty: Easy)\n a: Real Madrid\n b: Barcelona\n c: Ajax\n d: FC Porto\n\n",
    ans: "a",
  },
  {
    name: "Which country has won the most world cups? (Difficulty: Easy)\n a: Germany\n b: Spain\n c: Brazil\n d: Italy\n\n",
    ans: "c",
  },
  {
    name: 'Which European derby is referred as the "El-Clasico"? (Difficulty: Easy)\n a: Bayern-Dortmund\n b: Barca-Real Madrid\n c: AC Milan-Inter\n d: Man Utd-Man City\n\n',
    ans: "b",
  },
  {
    name: "Which player has won the most UCL titles? (Difficulty: Moderate)\n a: C.Ronaldo\n b: Lionel Messi\n c: Paolo Maldini\n d: Paco Gento\n\n",
    ans: "d",
  },
  {
    name: "Which Player has played for the most number of Clubs?(Difficulty: Hard)\n a: Zlatan Ibrahimovic\n b: John Burridge\n c: Rivaldo\n d: Andy Cole\n\n",
    ans: "b", 
  },
];

function letsPlay(question,answer){
  var playerAns = readlinesync.question(chalk.yellow(question));
  if(playerAns.toUpperCase()==answer.toUpperCase()){
    log(chalk.green("Correct Answer!"));
    score=score+5;
    log("-----------------");
  }
  else{
    log(chalk.red("Wrong answer! ") + chalk.green("Correct answer was option ") + answer);
    score=score-5;
    log("------------------");
  }
}

var scoreBoard = [
  {
    name: "ABC",
    score: "25",
  },
  {
    name: "XYZ",
    score: "19",
  }
];

for(var i=0;i<quiz.length;i++){
  var current = quiz[i];
  letsPlay(current.name,current.ans);
}

log(chalk.bgCyan("Yayy, You scored ") + chalk.black.bold.bgYellowBright(score) + chalk.black.bold.bgYellowBright(" Points!\n"));

function leader(scr){
  if(scr>=scoreBoard[1].score){
    if(scr>=scoreBoard[0].score){
      log(chalk.black.bold.bgYellowBright("You are the NEW LEADER!! " + userName));
    }
    else{
      log(chalk.black.bold.bgYellowBright("You are now at 2nd PLACE!! " + userName));
    }
  }
  else{
    log(chalk.red("Leader is unchanged!"));
  }
};

log(chalk.green("Leaderboard Until Now -"));
for(var j=0;j<scoreBoard.length;j++){
  log(chalk.green(scoreBoard[j].name + " " + scoreBoard[j].score));
}

leader(score);