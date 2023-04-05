function insert(num) {
    document.getElementById('textView').value = document.getElementById('textView').value + num;
}

function ac() {
    document.getElementById('textView').value = "";
}

function add() {
    var x = document.getElementById('textView').value;
    if (x) {
        document.getElementById('textView').value = eval(x);
    }      
}     