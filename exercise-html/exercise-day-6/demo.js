// grades.js
let grade = [4, 3, 9, 5, 8];

function getGrade() {
  // Select the <ul> element where we will append the grades
  let ul = document.getElementById("pather");

  // Loop through each grade in the array
  for (let value of grade) {
    // Create a new list item element
    let li = document.createElement("li");
    // Set the text content of the list item to the current grade value
    li.textContent = value;
    // Append the list item to the <ul> element
    ul.appendChild(li);
  }
}

function getAverage() {
  let avr = 0;

  for (let x = 0; x < grade.length; x++) {
    avr = grade[x] + avr;
  }
  avr = avr / grade.length;

  document.getElementById("result").value = avr;
}

function getHighestGrade() {
  let notaMasAlta = grade[0]; // Inicializamos con el primer valor del array
  
  let i = 1; // Comenzamos desde el segundo elemento del array

  // Utilizamos un bucle while para recorrer el array de calificaciones
  while (i < grade.length) {
      // Comparamos si la calificación actual es mayor que notaMasAlta y la actualizamos si es necesario
      notaMasAlta = Math.max(notaMasAlta, grade[i]);
      // Pasamos al siguiente elemento del array
      i++;
  }

  // Al finalizar el bucle, la variable notaMasAlta contendrá la calificación más alta del array
  document.getElementById("result").value = notaMasAlta
}

function getHighestGrade2() {
  let notaMasAlta = 0;
  let x = 0; // Initialize index for array traversal

  // Use a while loop to traverse the array of grades
  while (x < grade.length) {
      // Compare if the current grade is greater than notaMasAlta and update it if necessary
     if (grade[x] > notaMasAlta) {
      notaMasAlta = grade[x];
     }
     // Move to the next grade in the array
     x++;
  }

  // Update the result element with the highest grade
  document.getElementById("result").value = notaMasAlta;
}

function existeAplazo(calificaciones) {
  let hayAplazo = false; // Variable para guardar si existe algún aplazo
  
  let i = 0; // Índice para recorrer el array
  
  do {
      if (grade[i] < 4) {
          hayAplazo = true; // Si la calificación es menor a 4, hay un aplazo
          break; // Corta el ciclo ya que encontramos un aplazo
      }
      i++; // Incrementa el índice para pasar a la siguiente calificación
  } while (i < grade.length); // Continúa el ciclo mientras haya elementos en el array
  document.getElementById("result").value = hayAplazo;

  //return hayAplazo; // Devuelve true si hay un aplazo, false en caso contrario
  //document.getElementById("result").value = hayAplazo;

}

// Ejemplo de uso
const calificaciones = [7, 5, 3, 6, 8];
if (existeAplazo(calificaciones)) {
  console.log("Hay al menos un aplazo.");
} else {
  console.log("No hay ningún aplazo.");
}


  // Al finalizar el bucle, la variable notaMasAlta contendrá la calificación más alta del array




// Call the function to populate the list with grades
getHighestGrade2();
