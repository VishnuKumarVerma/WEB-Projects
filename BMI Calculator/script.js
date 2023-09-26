function result() {
  var name = document.getElementById("name").value;
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;

  document.getElementById("info").innerHTML = name;

  var result = weight / (((height / 100) * height) / 100);
  var bmi = result.toFixed(1);
  document.getElementById("about-bmi").innerHTML = "Your BMI is " + bmi;

  if (bmi < 16) {
    document.getElementById("conclude").style.color = "#950101";
    document.getElementById("conclude").innerHTML =
      "You are sufffered from Severe Thinness";
  } else if (bmi >= 16 && bmi < 17) {
    document.getElementById("conclude").style.color = "#BE3144";
    document.getElementById("conclude").innerHTML =
      "You have moderate thinness";
  } else if (bmi >= 17 && bmi < 18.5) {
    document.getElementById("conclude").style.color = "#FA7D09";
    document.getElementById("conclude").innerHTML = "You have Mild Thinnesss";
  } else if (bmi >= 18.5 && bmi < 25) {
    document.getElementById("conclude").style.color = "#1b9c85";
    document.getElementById("conclude").innerHTML = "Congrats! you are Normal";
  } else {
    document.getElementById("conclude").style.color = "#D21312";
    document.getElementById("conclude").innerHTML = "You are Overweight";
  }
}
