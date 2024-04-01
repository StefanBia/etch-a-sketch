
const grid = document.querySelector('.grid');

let clicked = false;

    for (let i = 0; i < 16 * 16; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);

        square.addEventListener('mousedown', function(){
            clicked = true;
            this.classList.add('clicked');
        });
        
        square.addEventListener('mouseup', function(){
            clicked = false;
        });

        square.addEventListener('mouseover', function() {
            
            if(clicked)
                this.classList.add('clicked');            

        });

           
    }
const sizeBut = document.querySelector('#chooseSize');
sizeBut.addEventListener('click', function(){
    let size = parseInt(prompt('Select wanted size', '16'));

    if(size > 100)
        size = 100;

    while(grid.firstChild)
        grid.removeChild(grid.firstChild);

        grid.style.width = `${20 * size}px`;
        grid.style.height = `${20 * size}px`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `20px`;
        square.style.width = `20px`;
        grid.appendChild(square);
    
        square.addEventListener('mousedown', function(){
            clicked = true;
            this.classList.add('clicked');
        });
            
        square.addEventListener('mouseup', function(){
            clicked = false;
        });
    
        square.addEventListener('mouseover', function() {
                
        if(clicked)
            this.classList.add('clicked');            
    
        });
    
               
    }

});

    