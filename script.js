function calc(e){
var operacao = e.value;
var res = window.document.querySelector('p.result');
var n1 = parseFloat(document.getElementById("n1").value);
var n2 = parseFloat(document.getElementById("n2").value);

var calculo = eval(n1 + operacao + n2);

if (!isNaN(calculo) && operacao == '+'){

  res.textContent = calculo
  //alert('soma')
}
else if (!isNaN(calculo) && operacao == '-'){
  res.textContent = calculo
  //alert('soma')
}
else if (!isNaN(calculo) && operacao == '*'){
  res.textContent = calculo
  //alert('soma')
}
else if (!isNaN(calculo) && operacao == '/'){
  res.textContent = calculo
  //alert('soma')
}
else{
  res.innerHTML = `adicione 2 valores`
  res.style.color = 'black'
  res.style.fontSize = '0.8em'
}

}











/*let res = window.document.querySelector('p.result')

let textn1 = window.document.getElementById('n1')
let nu1 = Number(textn1.value)

let textn2 = window.document.getElementById('n2')
let nu2 = Number(textn2.value)

let addcont =0;
function calc(){

}
  function add(){
    if(textn1 > 0){
       addcont =  nu1 + nu2
      res.innerHTML = `${addcont}`
    }
    else{
        res.innerHTML = `adicione valores`
        res.style.color = 'black'
        res.style.fontSize = '0.8em'
    }
}  */