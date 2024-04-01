
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
            
            // grid.addEventListener('mouseover', onMouseOver);

        });

           
    }

    