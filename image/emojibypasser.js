/*
 ____          _ _ _____                             
|    \ ___ _ _|_| | __  |_ _ ___ ___ ___ ___ ___ ___ 
|  |  | -_| | | | | __ -| | | . | .'|_ -|_ -| -_|  _|
|____/|___|\_/|_|_|_____|_  |  _|__,|___|___|___|_|  
                        |___|_| Made For eCaptcha
*/

function DisplayAlert() {
    var newLine = "\r\n"
    var msg = "🦄eCaptcha Emoji Ripper"
    msg += newLine;
    msg += "⚡Made By : Healer";
    msg += newLine;
    msg += "👷‍♂️Still Working On It";
    msg+= newLine;
    msg += "Enter The Button Number You This is Correct";
    var button = prompt(msg);
    if(button>=1 && button<=4){
        simulateClick(document.getElementById(button));
    }
    else{
        alert("Please Enter Number Only Between 1-4");
        DisplayAlert();
    }
    
 }

function simulateClick(control) {
    if (document.all) {
      control.click();
    } else {
      var evObj = document.createEvent('MouseEvents');
      evObj.initMouseEvent('click', true, true, window, 1, 12, 345, 7, 220, false, false, true, false, 0, null );
      control.dispatchEvent(evObj);
    }
}
DisplayAlert();
