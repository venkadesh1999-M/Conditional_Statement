let marks = 
    {
      m:90,
      t:80,
      e:60,
      s:70,
      ss:50
      
  }

let total = marks.m+marks.t+marks.e+marks.s+marks.ss

let amount = total /5 * 100

console.log(amount)


if(amount > 60){
  console.log("You are Eligible")
}else{
  console.log("You are Not Eligile")
}



