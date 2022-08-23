const playerNameArray = [];
function display(playerName) {
    const playerList = document.getElementById('player-list');
    playerList.innerHTML = '';
    if (playerNameArray.length <= 5) {
        for (let i = 0; i < playerNameArray.length; i++) {
            const name = playerNameArray[i].playerName;
            const li = document.createElement('li');
            li.innerHTML = `
            ${name}
            `;
            playerList.appendChild(li);
        }
    }
    else {
        alert('Five Player already add. no more player will be add')
    }
}

function addToList(element) {
    if (playerNameArray.length <= 4) {
        if (element.disabled = true) {
            console.log(playerNameArray.length)
            element.style.backgroundColor = 'DarkGrey'
            element.style.color = 'white';
        }
    }
    const playerName = element.parentNode.children[0].innerText;
    const playerNameObj = {
        playerName: playerName
    }
    playerNameArray.push(playerNameObj)
    // console.log(playerNameArray)
    // console.log(playerNameArray.length)
    display(playerNameArray);
}






function getInputValueById(inputId) {
    const inputFieldId = document.getElementById(inputId);
    const inputFieldString = inputFieldId.value;
    const inputFieldIdValue = parseFloat(inputFieldString);
    inputFieldId.value = '';
    return inputFieldIdValue;
}

function getTextElementById(textId) {
    const textFieldId = document.getElementById(textId);
    const textFieldString = textFieldId.innerText;
    const textValue = parseFloat(textFieldString);
    return textValue;

}

function setTextElementByValue(elementId, value) {
    const textIdField = document.getElementById(elementId);
    textIdField.innerText = value;
    return textIdField;
}

document.getElementById('calc-btn-player').addEventListener('click', function () {
    const playerInputFieldValue = getInputValueById('player-input');
    const currentPlayerExpenses = playerInputFieldValue * 5;
    // const playerExpensesTextId = document.getElementById('player-expenses');
    // playerExpensesTextId.innerText = currentPlayerExpenses;
    setTextElementByValue('player-expenses', currentPlayerExpenses)
})

document.getElementById('calc-btn-total').addEventListener('click', function () {
    const managerInputFieldValue = getInputValueById('manger-input');
    const coachInputFieldValue = getInputValueById('coach-input');
    const currentAmount = getTextElementById('player-expenses');
    const totalAmount = currentAmount + managerInputFieldValue + coachInputFieldValue;
    setTextElementByValue('calc-total', totalAmount);

})