const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let displayPasswordOne = document.getElementById("password-one")
let displayPasswordTwo = document.getElementById("password-two")

function generatePasswordOne(){
    
    let password =""
    
    for(let i = 0 ; i < 15 ; i++){        
        let randomNumberOne = Math.floor(Math.random()*characters.length)
         password += characters[randomNumberOne]
        }
        displayPasswordOne.textContent = password;
    }


function generatePasswordTwo(){
    
    let password =""
    
    for (let i = 0; i < 15 ; i++){
        let randomNumberTwo = Math.floor(Math.random()*characters.length)
         password += characters[randomNumberTwo]
        }
        displayPasswordTwo.textContent = password;
}

function copyToClipboardOne() {
    
    let copyTextOne = document.getElementById("password-one");
    copyTextOne.select();// Select the text field
    navigator.clipboard.writeText(copyTextOne.value); // Copy the text inside the text field
    alert("Copied the text: " + copyTextOne.value);// Alert the copied text
}





