const input = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

input.oninput = function () {
    if (input.value.replaceAll(" ", "") === "") {
       nameOutput.innerHTML = 'Anonymous';
    } else{
    nameOutput.innerHTML = input.value;
    }
}