let count = 0;
function increment() {
    count = count + 1;
    document.getElementById("count-el").innerText = count;
}
function save() {
    document.getElementById("save-el").innerText += count+" - ";
    count=0
    document.getElementById("count-el").innerText = count;
    console.log(count)
}