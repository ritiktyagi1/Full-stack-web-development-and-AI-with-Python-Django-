var id="ritik";
var pass=1234;
var amount=500;
function returnM(){
  var temp_id= document.getElementById('email').value;
  var temp_pass= document.getElementById('pass').value;
  var temp_amount=document.getElementById('amount').value;
  amount-=temp_amount
  if (temp_id==id && temp_pass==pass && amount<100 && amount>=0) {
  document.getElementById('output').innerHTML='output'.innerHTML=("You are succesfully made the withdrawl  "+temp_id+"Your new balance is:"+amount);
  document.body.style.backgroundColor='grey';

  }
  else if (temp_id==id && temp_pass==pass && amount>100) {
    document.getElementById('output').innerHTML='output'.innerHTML=("Your withdrawl is failed  "+temp_id+"Your don't have enough balance"+amount);
    document.body.style.backgroundColor='green';
  }
  else if (temp_id!=id || temp_pass!=pass || amount>100) {
    document.getElementById('output').innerHTML='output'.innerHTML=("Your withdrawl is failed, try agian!!");
    document.body.style.backgroundColor='blue';
  }

}
