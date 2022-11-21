 function doMath() {
            var num1= document.getElementById("num1").value;
                num1= Number(num1);
            var num2= document.getElementById("num2").value;
                num2= Number(num2);
            var add = num1+num2;
            var sub = num1-num2;
            var mul = num1 * num2;
            var div = num1 / num2;
            var mod = num1 % num2;
           var pow = num1 ** num2; 
           var sqn1 = Math.sqrt(num1);
           var sqn2 = Math.sqrt(num2);
           
           var p = document.getElementById("output");
           var out = "";
           out = out + "Add:" + add + "</br>";
           out = out + "Subtract:" + sub + "</br>";
           out = out + "Multiply:" + mul + "</br>";
           out = out + "Divide:" + div + "</br>";
           out = out + "Modulus:" + mod + "</br>";
           out = out + "Pow:" + pow + "</br>";
           out = out + "sqrt(num1):" +sqn1 + "</br>";
           out = out + "sqrt(num2):" +sqn2 + "</br>";
           p.innerHTML = out;
           
       }
