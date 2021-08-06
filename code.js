window.onload = function () 
{
    var gio=document.getElementById("h")
    var phut=document.getElementById("m")
    var giay=document.getElementById("s")
    var SEC=document.getElementById("sec")
    var start;
    start=setInterval(call,1000)
    function call() 
    {
        var sec;
        var date = new Date();
        var h = date.getHours(); // 0 - 23
        var m = date.getMinutes(); // 0 - 59
        var s = date.getSeconds(); // 0 - 59
        gio.innerHTML=h;
        phut.innerHTML=m;
        giay.innerHTML=s;
      if(h<=12)
      sec="AM";
      else
      sec="PM";
     SEC.innerHTML=sec
    }

   
   
}