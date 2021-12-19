let data = [];

document.getElementById("formDeleteFirst").addEventListener("click", function() {
        data.shift();
        displayToDOM();
    });

document.getElementById("formPop").addEventListener("click", function(){
        data.pop();
        displayToDOM();
    });

document.getElementById("formAdd").addEventListener("click", function (){
        let item = document.getElementById("formItem").value;
        data.push(item);
        displayToDOM();
    });

function displayToDOM(){
    document.getElementById("formArrayData").value = data.toString();
}
displayToDOM();

