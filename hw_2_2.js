let c = prompt("Введіть значення", 17);
let age = Number(c);
      const checkAge = function(age){
    if (age < 18){
        alert( "You don't have access cause your age is " + age + " It's less than");
    } else if (age >= 18 && age < 60){
        alert("Welcome !");
    } else if (age > 60){
        alert( "Keep calm and look culture channel");
    } else {
    alert("Technical work");
    }
  }
  checkAge(age); 