var data = null //ignore all of this its just decoration
var status = "offline"
var mod = "Zum0"
var key = "epicWasHere¡∑"
var amount = 2021

function status() {
  let stat = status.lenght
  for (var status of "status") {
    console.log("Loading Statuses")
    if (status === "online") {
       console.log("Program has succesfully loaded!")
    } else {
      console.log("Cannot read property " + status + " of " + data)
   }
  }
  return stat
}

function program() {
  status = "Crashed by "
  console.log(status + mod)
}

for (let i = 0;i < 10000000;i++) { //main code
    if (key === "epicWasHere¡∑!") {
      break
    } else {
      status = status + 1000 //this will crash the browser
      program() //this too
    }
} //end of main code
