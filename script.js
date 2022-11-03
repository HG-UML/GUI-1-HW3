/*
Hannah Guillen, UMass Lowell Computer Science
  hannah_guillen@student.uml.edu, hguillen@cs.uml.edu
Date: November 1, 2022
File: script.js
GUI Assignment: Creating an Interactive Dynamic Table
  This JavaScript file contains all necessary functions for the table.

Copyright (c) 2022 by Hannah Guillen. All rights reserved. May be freely
copied or excerpted for educational purposes with credit to the author.
*/

function setArray(min, max) {
  let array = [];     // First value in array is 0
  if (min !== 0) {
    array.push(0);
  }
  for (let i = min; i <= max; i++) {
    array.push(i);
  }
  return array;
}

function genTable() {
  // Remove table if existing
  if (document.querySelector("table")) {
    document.querySelector("table").remove();
  }

  const table = document.createElement('table');

  // Store variable values; use Number to check if value is number
  const min_c = Number(document.getElementById("min_c").value);
  const max_c = Number(document.getElementById("max_c").value);
  const min_r = Number(document.getElementById("min_r").value);
  const max_r = Number(document.getElementById("max_r").value);

  // Initialize arrays
  const colArray = setArray(min_c, max_c);
  const rowArray = setArray(min_r, max_r);

  for (let i = 0; i < rowArray.length; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < colArray.length; j++) {
      const column = document.createElement('td');

      // Multiply given values
      let val = rowArray[i] * colArray[j];

      // Set initial row and column
      if (i === 0 || j === 0) {
        val = rowArray[i] || colArray[j];
        column.classList.add('initial_xy');
      }

      // Leave first cell blank
      if (i === 0 && j === 0) val = '';

      column.innerHTML = val;
      row.appendChild(column);
    }
    table.appendChild(row);
  }
  const container = document.getElementById("tableBox");
  container.appendChild(table);
  event.preventDefault();

  // EXCEPTION HANDLING
  tests(min_c, max_c, min_r, max_r);
}

// EXCEPTION HANDLING
function tests(minR, maxR, minC, maxC) {

  // Make sure all input values are valid integers
  if (
    !(Number.isInteger(minC)) ||
    !(Number.isInteger(maxC)) ||
    !(Number.isInteger(minR)) ||
    !(Number.isInteger(maxR))
  ) {
    throw new Error("[TYPE_ERROR] Please enter valid numbers!")

    // Make sure all values are valid numbers between -50 and 50
  } else if (
    (minR < -50 || minR > 50) ||
    (maxR < -50 || maxR > 50) ||
    (minC < -50 || minC > 50) ||
    (maxC < -50 || maxC > 50)
  ) {
    throw new Error("[BOUNDS_ERROR] Input values must be between -50 to 50!")
  }
}
