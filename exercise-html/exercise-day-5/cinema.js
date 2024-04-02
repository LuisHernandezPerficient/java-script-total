function recommend(genre) {
  let age = document.getElementById("age").value;

  switch (genre) {
    case "comedy":
      if (age < 13) {
        document.getElementById("result").value = "Shreck";
      } else if (age >= 13 && age < 16) {
        document.getElementById("result").value = "Ophenhimer";
      } else {
        document.getElementById("result").value = "Monjas calvadas";
      }
      break;

    case "drama":
      break;
    case "musical":
      break;
    case "crime":
      break;

    default:
      break;
  }
}
