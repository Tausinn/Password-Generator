const mainInput1 =  document.querySelector(".main-input1");
const mainInput2 = document.querySelector(".main-input2");
const checkBoxInput2 = document.querySelector(".checkbox-input2");
let password;

function passwordGen(){
    let genRandomNum = Math.floor((Math.random() * 20000) + 10000);
    let arrSymbol = ["! @ *","@ *","# () &","$ - &^","% =+&","^ %$","& #@","() -^$","+ !~^","= &^%"];
    let mainInput2Value = mainInput2.value;

    let randomSymbol = arrSymbol[Math.floor(Math.random() * arrSymbol.length)]
    let password = randomSymbol + genRandomNum ;
    
    mainInput1.value = password + mainInput2Value;
    
    

}

function copyBtn(){
  mainInput1.select();
  document.execCommand("copy");

  if(mainInput1.value !== ""){
    alert("Copied Password: " + mainInput1.value);
  }
}


    
    
    

    

   

    

  
    

