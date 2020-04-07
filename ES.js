    //creates grid
    let grid = document.querySelector('#container');
    function mkGrid(){
    grid.innerHTML="";
    for(i=0;i<256;i++){
    const block = document.createElement('div');
    block.classList.add('block');
    grid.appendChild(block);
    //console.log(mkGrid);
    };
};
    
        //changes square color
    const square = document.querySelector('#container');
    square.addEventListener("mouseover" , function(e){
        let hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        document.documentElement.style.setProperty("--hue",hue);
        e.target.classList.replace("block","color");

    });

    mkGrid();

    //resets canvas
    document.getElementById('reset').addEventListener('click',userInput);
    
    function userInput(){
        grid.innerHTML="";
       let uInput=parseInt(prompt('Enter size of grid(eg: 16)'));
       document.documentElement.style.setProperty("--uInput",uInput);
       for(i=0;i<(uInput*uInput);i++){
        const block = document.createElement('div');
        block.classList.add('block');
        grid.appendChild(block);
        console.log(uInput);

    };
};

