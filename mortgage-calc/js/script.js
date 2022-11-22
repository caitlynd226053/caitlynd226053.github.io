function doMath(){
    var P = document.getElementById("princ").value;
               P= Number(P);
   var r = document.getElementById("intrat").value;
               r=Number(r);
   var t = document.getElementById("numy").value;
               t=Number(t);
   var m = document.getElementById("mon").value;
               m=Number(m);
   var n = document.getElementById("n").value;
               n=Number(n);

     var B = P * (1 + r/n);
     var nroot = m * (1 + r/n)**n*t -1 / r/n;

     var out= document.getElementById("out");
     out.innerHTML = B + "      " -nroot;
       }