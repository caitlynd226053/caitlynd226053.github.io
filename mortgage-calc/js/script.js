function doMath(){
    var P = document.getElementById("princ").value;
               P= Number(P);
   var r = document.getElementById("intrat").value;
               r=Number(r);
   var t = document.getElementById("numy").value;
               t=Number(t);
   var m = document.getElementById("mon").value;
               m=Number(m);
   var n = 12;
     var B = P * (1 + r/n)**n*t;
     var nroot = m * (1 + r/n)**n*t -1 / r/n;

     var out= document.getElementById("out");
     out.innerHTML = B-nroot.toFixed(2);
       }
   
       function reset(){
        document.getElementById("princ").innerHTML="";
        document.getElementById("numy").innerHTML="";
        document.getElementById("mon").innerHTML="";
        document.getElementById("intrat").innerHTML="";

    }