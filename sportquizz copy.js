let k = 0; // количество баллов

class Change {
  constructor(ques, ans1, ans2, ans3, ans4, corr, Imag) {
    this.ques = ques;
    this.ans1 = ans1;
    this.ans2 = ans2;
    this.ans3 = ans3;
    this.ans4 = ans4;
    this.corr = corr;
    this.Imag = Imag;
  }

  sayHi() {
    document.getElementById("question").innerHTML = this.ques;
    document.getElementById("button1").innerHTML = this.ans1;
    document.getElementById("button2").innerHTML = this.ans2;
    document.getElementById("button3").innerHTML = this.ans3;
    document.getElementById("button4").innerHTML = this.ans4;
    document.getElementById("photo").setAttribute("src", this.Imag);
  }
}

let quis1 = new Change(
  "Who is this greatest hockey player of all-time by total point?",
  "Alexandr <br> Ovechkin",
  "Wayne <br> Gretsky",
  "Brian <br> Leech",
  "Patrick <br> Kane",
  "Wayne <br> Gretsky",
  "images/ans2.jpg"
);

let quis2 = new Change(
  "Which player has the TD passes in NFL history?",
  "Patrick <br> Mahomes",
  "Aaron <br> Rodgers",
  "Tom <br> Brady",
  "Teddy <br> Bridgewater",
  "Tom <br> Brady",
  "images/ans3.jpg"
);

let quis3 = new Change(
  "Which soccer football team win the Champions League titles?",
  "Chelsea FC",
  "FC Real <br> Madrid",
  "AC Milan",
  "FC Liverpool",
  "FC Real <br> Madrid",
  "images/ans4.jpg"
);

let quis4 = new Change(
  "Which soccer player had scored the most goals?",
  "Diego <br> Maradonna",
  "Pele",
  "Alessandro <br> del <br> Pierro",
  "Roberto <br> Carlos",
  "Pele",
  "images/ans5.jpg"
);

let quis5 = new Change(
  "How many end have the regular MLB game?",
  "17",
  "4",
  "9",
  "3",
  "9",
  "images/ans6.jpg"
);

let quis6 = new Change(
  "Sidney Crosby which nhl team player of?",
  "Montreal <br> Canadiens",
  "Dallas <br> Stars",
  "Pittsburg <br> Pinguins",
  "Winnipeg <br> Jets",
  "Pittsburg <br> Pinguins",
  "images/ans7.jpg"
);

let quis7 = new Change(
  "Which player has sobriquet 'His Highnest'?",
  "Bill <br> Russell",
  "Michael <br> Jordan",
  "Isiah <br> Thomas",
  "Jonh <br> Stockton",
  "Michael <br> Jordan",
  "images/ans8.jpg"
);

let a = [quis1, quis2, quis3, quis4, quis5, quis6, quis7];

let i = 0;
let str = 0;

let but = document.getElementById("next");

but.addEventListener("click", function () {
  a[i].sayHi();
  i++;
  if (i === 7) {
    but.innerHTML = "new game";
    str = 0;
    k = 0;
  } else {
    but.innerHTML = "next question";
  }
});

function Checktest(clicked_id) {
  if (
    clicked_id.innerHTML === "Lebron <br> James" ||
    clicked_id.innerHTML === a[i - "1"].corr
  ) {
    k = k + 1;
    str = str + 1;

    clicked_id.style.border = "5px solid rgb(47, 243, 73)";
  } else {
    clicked_id.style.border = "5px solid #ff0000";
    str = 0;
  }

  but.addEventListener("click", () => (clicked_id.style.border = "1px"));

  document.getElementById("sum").innerHTML = "Your total score : " + k;
  document.getElementById("streak").innerHTML = "Your streak : " + str;
}
