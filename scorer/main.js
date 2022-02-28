$("input:checkbox").on('click', function () {
    // in the handler, 'this' refers to the box clicked on
    var $box = $(this);
    if ($box.is(":checked")) {
        // the name of the box is retrieved using the .attr() method
        // as it is assumed and expected to be immutable
        var group = "input:checkbox[name='" + $box.attr("name") + "']";
        // the checked state of the group/box on the other hand will change
        // and the current value is retrieved using .prop() method
        $(group).prop("checked", false);
        $box.prop("checked", true);
    } else {
        $box.prop("checked", false);
    }
});
const score1 = document.getElementById('score1')
const score2 = document.getElementById('score2')
const plus0 = document.getElementById("plus0")
const plus1 = document.getElementById("plus1")
const plus2 = document.getElementById("plus2")
const plus3 = document.getElementById("plus3")
const plus4 = document.getElementById("plus4")
const plus6 = document.getElementById("plus6")
const wide = document.getElementById("wide")
const noBall = document.getElementById("noBall")
const wicket = document.getElementById("wicket")
const inningsOver = document.getElementById("over")
const allOut = document.getElementById("allOut")
const allOut2 = document.getElementById("allOut2")
const over2 = document.getElementById("over2")
const overs1 = document.getElementById("overs1")
const overs2 = document.getElementById("overs2")
const result = document.getElementById("result")
const extras = document.getElementById("extras")
let noball = false
let wideCheckbox = false
let over = false
let team1Stats = {
    score: 0,
    wickets: 0,
    overs: 0,
    balls: 0
}
let team2Stats = {
    score: 0,
    wickets: 0,
    overs: 0,
    balls: 0
}
wide.addEventListener("click", () => {
    if (wide.checked) {
        wideCheckbox = true
    } else {
        wideCheckbox = false
    }
})
noBall.addEventListener("click", () => {
    if (noBall.checked) {
        noball = true
    } else {
        noball = false
    }
})
function run0() {
    if (!wideCheckbox && !noball) {
        overUpdater()
    } else {
        if (!over) {
            team1Stats.score++;
            updateTeam1()
        }
        if (over) {
            team2Stats.score++;
            updateTeam2()
            if (team2Stats.score > team1Stats.score) {
                result.innerHTML = "Team 2 Won"
                hide()
            }
        }
    }
}
function hide() {
    plus1.classList.add("hide")
    plus2.classList.add("hide")
    plus3.classList.add("hide")
    plus4.classList.add("hide")
    plus6.classList.add("hide")
    allOut2.classList.add("hide")
    over2.classList.add("hide")
    noBall.classList.add("hide")
    wide.classList.add("hide")
    wicket.classList.add("hide")
    plus0.classList.add("hide")
    extras.classList.add("hide")

}
function overUpdater() {
    if (!over) {
        team1Stats.balls++;
        if (team1Stats.balls === 6) {
            team1Stats.balls = 0;
            team1Stats.overs++
            overs1.innerText = `(${team1Stats.overs}.${team1Stats.balls})`
        } else {
            overs1.innerText = `(${team1Stats.overs}.${team1Stats.balls})`
        }
    }
    if (over) {
        team2Stats.balls++;
        if (team2Stats.balls === 6) {
            team2Stats.balls = 0;
            team2Stats.overs++
            overs2.innerText = `(${team2Stats.overs}.${team2Stats.balls})`
        } else {
            overs2.innerText = `(${team2Stats.overs}.${team2Stats.balls})`
        }
    }
}
function winner() {
    if (team1Stats.score === team2Stats.score) {
        result.innerHTML = "Tie"
        hide()
    }
    if (team1Stats.score > team2Stats.score) {
        result.innerHTML = "Team 1 Won"
        hide()
    } else if (team1Stats.score < team2Stats.score) {
        result.innerHTML = "Team 2 Won"
        hide()
    }
}
function fristInningsOver() {
    over = true
    inningsOver.classList.add("hide")
    allOut.classList.add("hide")
    allOut2.classList.remove("hide")
    inningsOver.classList.add("hide")
    over2.classList.remove("hide")
}

function updateTeam1() {

    score1.innerText = `${team1Stats.score}/${team1Stats.wickets}`
}
function updateTeam2() {
    score2.innerText = `${team2Stats.score}/${team2Stats.wickets}`
}
function run1() {
    if (wideCheckbox || noball) {
        if (!over) {
            team1Stats.score += 2;
            updateTeam1()
        }
        if (over) {
            team2Stats.score += 2;
            updateTeam2()
            if (team2Stats.score > team1Stats.score) {
                result.innerHTML = "Team 2 Won"
                hide()
            }
        }
    } else {

        if (!over) {
            team1Stats.score++;
            updateTeam1()
        }
        if (over) {
            team2Stats.score++;
            updateTeam2()
            if (team2Stats.score > team1Stats.score) {
                result.innerHTML = "Team 2 Won"
                hide()
            }
        }
        overUpdater()
    }

}
function run2() {
    if (wideCheckbox || noball) {
        if (!over) {
            team1Stats.score += 3;
            updateTeam1()
        }
        if (over) {
            team2Stats.score += 3;
            updateTeam2()
            if (team2Stats.score > team1Stats.score) {
                result.innerHTML = "Team 2 Won"
                hide()
            }
        }
    } else {
        if (!over) {
            team1Stats.score += 2;
            updateTeam1()
        }
        if (over) {
            team2Stats.score += 2;
            updateTeam2()
            if (team2Stats.score > team1Stats.score) {
                result.innerHTML = "Team 2 Won"
                hide()
            }
        }
        overUpdater()
    }
}
function run3() {
    if (wideCheckbox || noball) {
        if (!over) {
            team1Stats.score += 4;
            updateTeam1()
        }
        if (over) {
            team2Stats.score += 4;
            updateTeam2()
            if (team2Stats.score > team1Stats.score) {
                result.innerHTML = "Team 2 Won"
                hide()
            }
        }
    } else {
        if (!over) {
            team1Stats.score += 3;
            updateTeam1()
        }
        if (over) {
            team2Stats.score += 3;
            updateTeam2()
            if (team2Stats.score > team1Stats.score) {
                result.innerHTML = "Team 2 Won"
                hide()
            }
        }
        overUpdater()
    }
}
function run4() {
    if (wideCheckbox || noball) {
        if (!over) {
            team1Stats.score += 5;
            updateTeam1()
        }
        if (over) {
            team2Stats.score += 5;
            updateTeam2()
            if (team2Stats.score > team1Stats.score) {
                result.innerHTML = "Team 2 Won"
                hide()
            }
        }
    } else {
        if (!over) {
            team1Stats.score += 4;
            updateTeam1()
        }
        if (over) {
            team2Stats.score += 4;
            updateTeam2()
            if (team2Stats.score > team1Stats.score) {
                result.innerHTML = "Team 2 Won"
                hide()
            }
        }
        overUpdater()
    }
}
function run6() {
    if (wideCheckbox || noball) {
        if (!over) {
            team1Stats.score += 7;
            updateTeam1()
        }
        if (over) {
            team2Stats.score += 7;
            updateTeam2()
            if (team2Stats.score > team1Stats.score) {
                result.innerHTML = "Team 2 Won"
                hide()
            }
        }
    } else {
        if (!over) {
            team1Stats.score += 6;
            updateTeam1()
        }
        if (over) {
            team2Stats.score += 6;
            updateTeam2()
            if (team2Stats.score > team1Stats.score) {
                result.innerHTML = "Team 2 Won"
                hide()
            }
        }
        overUpdater()
    }
}
function out() {
    if (wideCheckbox || noball) {
        if (!over) {
            team1Stats.wickets++;
            updateTeam1()
        }
        if (over) {
            team2Stats.wickets++;
            updateTeam2()
        }
    } else {

        if (!over) {
            team1Stats.wickets++;
            updateTeam1()
        }
        if (over) {
            team2Stats.wickets++;
            updateTeam2()
        }
        overUpdater()
    }
}
function wideRun() {
    if (!over) {
        team1Stats.score++;
        updateTeam1()
    }
    if (over) {
        team2Stats.score++;
        updateTeam2()
        if (team2Stats.score > team1Stats.score) {
            result.innerHTML = "Team 2 Won"
            hide()
        }
    }
}
function noBallRun() {
    if (!over) {
        team1Stats.score++;
        updateTeam1()
    }
    if (over) {
        team2Stats.score++;
        updateTeam2()
        if (team2Stats.score > team1Stats.score) {
            result.innerHTML = "Team 2 Won"
            hide()
        }
    }
}
function Allout() {
    if (wideCheckbox || noball) {
        score1.innerText = `${team1Stats.score} All Out`
    } else {
        score1.innerText = `${team1Stats.score} All Out`
        overUpdater()
    }
    fristInningsOver()

}
function Allout2() {
    if (wideCheckbox || noball) {
        score2.innerText = `${team2Stats.score} All Out`
    }
    else {
        score2.innerText = `${team2Stats.score} All Out`
        overUpdater()
    }
    winner()
}




