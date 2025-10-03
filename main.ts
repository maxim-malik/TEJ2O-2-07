/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Max
 * Created on: Oct 2025
 * This program functions as a simple number counter
*/

basic.showIcon(IconNames.Happy)

let clicks = 0 //creates "clicks" variable

input.onButtonPressed(Button.A, () => { 
basic.clearScreen(); //clears screen
clicks = clicks + 1 //adds 1 to clicks
basic.showNumber(clicks) //displays value of clicks
})

input.onButtonPressed(Button.B, () => {
clicks = 0 //resets the number of clicks
basic.showNumber(clicks) //displays value of clicks
})