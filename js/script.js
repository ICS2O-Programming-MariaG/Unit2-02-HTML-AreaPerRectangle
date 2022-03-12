// Copyright (c) 2022 Maria Goemans All rights reserved
// Created by: Maria Goemans
// Created on: March 11 2022
// This file contains the JS functions for index.html

function AreaClicked() {
  // this function calculates the area of the rectangle
  document.getElementById('area').innerHTML = 'The area is ' + (7 * 4) + 'cm' + '2'.sup(2) + '.'
}

function PerimeterClicked() {
  // this function calculates the perimeter of the rectangle
  document.getElementById('perimeter').innerHTML = 'The perimeter is ' + (7 + 7 + 4 + 4) + 'cm.'
}