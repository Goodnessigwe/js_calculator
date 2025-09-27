
function clearScreen(){

    document.getElementById("result").value="";
}

function deleteLast(){

    let result = document.getElementById("result").value;
    document.getElementById("result").value=result.slice(0,-1);

}

function display(value){

    document.getElementById("result").value += value;
}

function calculate(){
    
    let answer = document.getElementById("result").value;
    try {
        answer=eval(answer);
        document.getElementById("result").value = answer;
        
    } catch (error) {
        document.getElementById("result").value = "Error";
    }

}