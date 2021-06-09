const buttons = document.querySelectorAll("button");// selects all items with the button node
const screen = document.querySelector(".screen");//selects the screen id in div
let pixel = ""; //pixels will be each square that we hope to change the colour of
let gridsize = 50;

const drawGrid = (screenSize) => {
    for (i = 0; i < screenSize ** 2; i++) {
        pixel = document.createElement('div')//creating a div call pixel
        pixel.classList.add("pixel");//adding the pixel class to the div named pixel
        pixel.style.backgroundColor = "white";//making the pixel white
        screen.appendChild(pixel);//append the pixel div element with the white background to the screen
        pixel.addEventListener('mouseover',function (e){
            e.target.style.backgroundColor = `darkGrey`;
        });
    }

    screen.style.gridTemplateColumns = `repeat(${screenSize}, auto)`;//repeat(number of columns, size of columns)
    screen.style.gridTemplateRows = `repeat(${screenSize}, auto)`;//repeat(number of Rows, size of rows)

}
drawGrid(gridsize);




const clearGrid = () =>{
    
    let gridsize = prompt("Enter a gridsize, maximum size 100");   
    if (gridsize != null && gridsize<=100) { 
        drawGrid(gridsize);
    }
    screen.innerHTML = '';
    drawGrid(gridsize);
    
}
    


