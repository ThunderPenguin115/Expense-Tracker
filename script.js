let nameInput = document.getElementById("nameInput");
let amountInput = document.getElementById("amountInput");
let category = document.getElementById("category");
let output = document.getElementById("output");
let expenses = [];
let html = '';

function addExpense(){
    expenses.push({
        expenseName: nameInput.value, 
        amount: Number(amountInput.value),
        category: category.value
    });
    console.log(expenses);
    displayExpenses()
}

function displayExpenses() {
    html = `
        <tr>
            <th> Expense Name</th>
            <th> Amount </th>
            <th> Category </th>
            <th> Action </th>
        </tr>

        
    
    `
    let total = 0;
    for(let i = 0; i < expenses.length; i++){
        total += expenses[i].amount;
        html += `
        <tr>
            <td>${expenses[i].expenseName}</td>
            <td>${expenses[i].amount}</td>
            <td>${expenses[i].category}</td>
            <td> <button onclick="edit(${i})"> Edit </button>
            <button onclick="bDelete(${i})"> Delete </button>
            </td>
        </tr>
        
        `;
    }
    document.getElementById("total").innerHTML = `
        Total: $${total}
    `;
    console.log(html);
    output.innerHTML = html;
}

function edit(index){
    let editN = prompt("What will this expense be called?")
    let editA = prompt("How much will it cost now?")
    let editC = prompt("What category will it fall under? (Food, Transportation, Entertainment, Other")

    expenses[index].expenseName = editN;
    expenses[index].amount = editA;
    expenses[index].category = editC;
    displayExpenses()
}

function bDelete(index){
    expenses.splice(index,1)
    displayExpenses()
}
