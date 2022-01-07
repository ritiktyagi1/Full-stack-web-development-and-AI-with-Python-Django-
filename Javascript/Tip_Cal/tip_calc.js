

function find(){
  var total_amount= document.getElementById('total_bill').value;
  var service= document.getElementById('ServiceQual').value;
  var people= document.getElementById('people').value;

  if (total_amount==''){
    alert("Please enter the total amount");
  }
  else if (people=='') {
    alert("Please enter the number of people");

  }
  var res= Math.round((total_amount*service)/people);
  document.getElementById('tip').innerHTML=res+' $ '
}
