window.setTimeout("waktu()", 1000);

function waktu() {
    var waktu = new Date();
    setTimeout("waktu()", 1000);
    document.getElementById("waktu").innerHTML = `${waktu.getFullYear()}-${waktu.getMonth()+1}-${waktu.getDate()}, ${waktu.getHours()}:${waktu.getMinutes()}:${waktu.getSeconds()}`;

}

function insert(num) {
    document.form.textdisplay.value = document.form.textdisplay.value + num;
}

function clearDisplay() {
    document.form.textdisplay.value = '';
}

function hitung() {
    let exp = document.form.textdisplay.value;
    if (exp) {
        document.form.textdisplay.value = eval(exp);
    }
}