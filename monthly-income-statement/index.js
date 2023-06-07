// ***********  Variables **********

let inputIncome = document.getElementById("add-income")
let inputAddButton = document.getElementById("button-addon2")
let expensesType = document.getElementById("choose")
let dateTime = document.getElementById("date-time")
let amount = document.getElementById("amount")
let saveButton = document.getElementById("save")


let jSonArr = []

// ****** Eventlistener *******

inputAddButton.addEventListener("click",() => {


   console.log(inputIncome.value);
}) 

saveButton.addEventListener("click", (e) => {
   e.preventDefault
   let jSonObj = {

      dt:dateTime.value,
      exp:expensesType.value,
      amnt:amount.value
   }

   jSonArr.push(jSonObj)
   console.log(jSonArr);
})

