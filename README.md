Etch-a-Sketch Project

In this project, I used what I've learned so far to create a drawing webpage, similar to a very basic ms paint. Knowledge of html, css, javascript functions, and DOM manipulation was utilized in the making of this project.

This webpage contains a square grid containing smaller squares. Each small square changes to be incrementally darker with each mouseover event. There is a Change Resolution button that allows the number of smaller squares to be adjusted. There is also a reset button that resets the canvas back to blank without resetting the resolution.

DOM manipulation was utilized to generate the canvas. Starting with a "container" div in index.html, a function is run that creates "column" divs, then "row" divs. The "row" divs are appended to a "column" div, then that div appended to the "container" div. Initially, it creates a 16x16 canvas, but the same function is utilized to create a user-specified canvas size between of 1x1 to 100x100.

Each small square has an eventListener for mouseover. When a mouseover event is detected, DOM manipulation is also utilized to change the style of that square. Its opacity is increased by 0.1, up to an opacity setting of about 1.0.

The reset button uses DOM manipulation to change the opacity of each small square back to 0.

This project also required eventListeners for each button, and CSS flexbox styling. In particular, flexbox allowed each smaller div to be square in shape, regardless of canvas resolution.