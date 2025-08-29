
// returning if true

function seeColor(str){
    let red = str.startsWith("red")
    let blue = str.startsWith("blue")
    if(red){
    return "red"
    }else if(blue){
    return  "blue"
    }else{
    return ""; 
    }

// returning true if last two and starting two are same 
function frontAgain(str) {
  return (
    str.length >= 2 && str.substring(0, 2) === str.substring(str.length - 2)
  );
}
