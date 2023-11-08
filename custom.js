const plus = document.querySelector(".plus"),
      minus = document.querySelector(".minus"),
      num = document.querySelector(".num");

      let i = 1

      plus.addEventListener("click",()=>{
        i++;
        num.innerText = i;
      });

      minus.addEventListener("click",()=>{
        if(i > 1){
          i--;
          num.innerText = i;
        }

      });