let count = 0;

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        const result = math.evaluate(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}

function increment() {
    count += 1;
    document.getElementById('counter').textContent = count;
}

function decrement() {
    count -= 1;
    document.getElementById('counter').textContent = count;
}
function resetCounter() {
    count = 0;
    document.getElementById('counter').textContent = count;
}