var d = new Date()

var h = d.getHours()

var a;

if( h > 18 )
{
  a = "Boa Noite!"
}
else if( h > 12)
{
  a = "Boa Tarde!"
}
else{
  a = "Bom Dia!"
}

var s = document.getElementById("hor")

s.innerHTML = a