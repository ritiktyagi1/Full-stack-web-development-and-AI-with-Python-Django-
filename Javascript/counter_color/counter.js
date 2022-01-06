var value=0;
color_arr=['red','blue','green','yellow'];

function inc(){
  value+=1;
  document.getElementById('number').innerHTML=value;
  document.body.style.backgroundColor=color_arr[value];
}

function dec(){
  value-=1;
  document.getElementById('number').innerHTML=value;
  document.body.style.backgroundColor=color_arr[value];
}
