//Pin Generate event handler
document.getElementById("generatePin").addEventListener('click', function() {
    var generateValue = 1000 + Math.floor(Math.random() * 9000);
    document.getElementById("pinInput").value = generateValue;


})




//Button Value  input
function buttonValue(num) {
    document.getElementById('pinGiven').value = document.getElementById('pinGiven').value + num;
}



//submit button
function submitButton() {
    const generatePin = document.getElementById('pinInput').value;
    const inputPin = document.getElementById('pinGiven').value;

    const time = document.getElementById('timer').innerText;
    const timeNumber = parseInt(time);

    if (inputPin == "" && generatePin == "") {
        alert('Please generate a pin and try again......');
        timer(timeNumber);

    } else if (inputPin == generatePin) {
        document.getElementById('pin-match').style.display = 'block';
        document.getElementById('pin-missmatch').style.display = 'none';
        document.getElementById('pinInput').value = "";
        document.getElementById('pinGiven').value = "";
    } else {
        document.getElementById('pin-missmatch').style.display = 'block';
        document.getElementById('pin-match').style.display = 'none';
        timer(timeNumber);


    }

}


//Timer function
function timer(timeNumber) {
    const newTime = timeNumber - 1;
    document.getElementById('timer').innerText = newTime;

    if (newTime <= 0) {
        document.getElementById('submitValue').style.display = 'none';
    }
}


//reset value 
function resetValue() {
    document.getElementById('pinGiven').value = "";
}

//backspace value generate
function backSpace() {
    const originalValue = document.getElementById('pinGiven').value;

    const originalValueNumber = parseInt(originalValue);
    const backspaceValue = originalValueNumber / 10;
    const backspaceValueNumber = parseInt(backspaceValue);
    document.getElementById('pinGiven').value = backspaceValueNumber;

}
