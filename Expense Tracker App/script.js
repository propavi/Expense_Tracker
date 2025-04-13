

let totalIncome = 0;
let totalExpense = 0;
let totalBalance = 0;

function addTransaction()
{
    const description = document.querySelector("#desc").value;
    const amount = document.querySelector("#amnt").value;

    if(description === "" || amount === "")
    {
        window.alert("Please Enter The description and Salary");
    }
    const transactionList = document.querySelector(".transaction-list");
    const box = document.createElement("div");
    box.style.fontWeight = "bold";
    box.style.display = "flex";
    box.style.justifyContent = "space-between";
    box.style.alignItems = "center";
    const desc = description.toLowerCase();
    if(desc === "salary" || desc === "bonus")
    {
        box.style.border = "3px solid green";
        box.style.borderRadius = "5%";
        box.style.backgroundColor = "#28a745";
        box.innerHTML = `<span style = "color:white";>${desc}</span> <span style = "color:white";>+ Rs : ${amount}</span>`;
        totalIncome +=   parseFloat(amount);
        document.getElementById("incomep1").innerText = `${totalIncome}`;


    
    }
    else{
        box.style.border = "3px solid red";
        box.style.borderRadius = "5%";
        box.style.backgroundColor = "#dc3545";
        box.innerHTML = `<span style = "color:white";>${desc}</span> <span style = "color:white";>- Rs : ${amount}</span>`;
        totalExpense += parseFloat(amount);
        document.getElementById("expensep2").innerText = `${totalExpense}`;

    }
    totalBalance = totalIncome - totalExpense;
    document.querySelector("h2").innerText = `Rs : ${totalBalance.toFixed(2)}`;

    box.style.padding = "5px";
    box.style.marginLeft = "6%";
    box.style.marginTop = "3%";
    transactionList.appendChild(box);
    document.querySelector("#desc").value = "";
    document.querySelector("#amnt").value = "";
    

}
