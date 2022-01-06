var hr = new Date().getHours();


if (hr>=4 && hr<11) {
  document.getElementById('message').innerHTML='Good Morning';
  document.body.style.backgroundColor='#e0750a';
  document.getElementById('message').src="morning.jfif"
}
else if (hr>=12 && hr<16) {
document.getElementById('message').innerHTML='Good afternoon!!';
document.body.style.backgroundColor='#f6b907';
document.getElementById('message').src="noon.jfif"
}
else if (hr>=16 && hr<19) {
document.getElementById('message').innerHTML='Good evening!!';
document.body.style.backgroundColor='#ae7335';
document.getElementById('message').src="evening.jfif"
}
else {
  document.getElementById('message').innerHTML='Good Night!!';
  document.body.style.backgroundColor='#56554e';
  document.getElementById('message').src="night.jfif"
}
