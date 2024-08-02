 let Result = document.getElementById("result");

 function insertValue(value){
    Result.value += value;
 }

 function ClearAll(value){
    Result.value = '';
 }

 function DeleteResult(value){
    Result.value = Result.value.slice(0, -1);
 }

 function GetResult(value){
    try{
        Result.value = eval(Result.value)
    }
    catch(error){
        Result.value ="error";
    }
 }