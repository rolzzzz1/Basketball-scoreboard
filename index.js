let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let homeCount = 0
let guestCount = 0

function homePlus1() {
    homeCount += 1
    homeEl.textContent = homeCount;
    console.log("Home +1 => " + homeCount)
}

function homePlus2() {
    homeCount += 2
    homeEl.textContent = homeCount;
    console.log("Home +2 => " + homeCount)
}

function homePlus3() {
    homeCount += 3
    homeEl.textContent = homeCount;
    console.log("Home +2 => " + homeCount)
}

function guestPlus1() {
    guestCount += 1
    guestEl.textContent = guestCount;
    console.log("Guest +1 => " + guestCount)
}

function guestPlus2() {
    guestCount += 2
    guestEl.textContent = guestCount;
    console.log("Guest +2 => " + guestCount)
}

function guestPlus3() {
    guestCount += 3
    guestEl.textContent = guestCount;
    console.log("Guest +3 => " + guestCount)
}
