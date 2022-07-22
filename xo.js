var fields = document.querySelectorAll("main section");
var aside = document.querySelectorAll('aside');
var winInfo = document.getElementById("winner");
var again = document.getElementById("again");
var player = Math.round(Math.random());
if(player == 1)
    {
        aside[0].style.display = 'none';
        aside[1].style.display = 'block';
    }else{
        aside[1].style.display = 'none';
        aside[0].style.display = 'block';
    }

var unActive = new Array(fields.length);
for(let i=0; i<unActive.length; i++)
    {
        unActive[i] = true;
    }

function select(nr)
{
    if(unActive[nr])
        {
    if(player%2)
        {
            if((fields[nr].classList.contains('bgRed'))||(fields[nr].classList.contains('bgGreen')))
                {
                    console.log("0");
                }else{
                    fields[nr].classList.toggle('bgRed');
                    fields[nr].innerText = 'X';
                }
            aside[1].style.display = 'none';
            aside[0].style.display = 'block';
        }else{
            if((fields[nr].classList.contains('bgRed'))||(fields[nr].classList.contains('bgGreen')))
                {
                    console.log("0");
                }else{
                    fields[nr].classList.toggle('bgGreen');
                    fields[nr].innerText = 'O';
                }
            aside[0].style.display = 'none';
            aside[1].style.display = 'block';
        }
    
    player++;
    
    if(((fields[0].classList.contains('bgRed'))&&(fields[1].classList.contains('bgRed'))&&(fields[2].classList.contains('bgRed')))||((fields[3].classList.contains('bgRed'))&&(fields[4].classList.contains('bgRed'))&&(fields[5].classList.contains('bgRed')))||((fields[6].classList.contains('bgRed'))&&(fields[7].classList.contains('bgRed'))&&(fields[8].classList.contains('bgRed')))||((fields[0].classList.contains('bgRed'))&&(fields[3].classList.contains('bgRed'))&&(fields[6].classList.contains('bgRed')))||((fields[1].classList.contains('bgRed'))&&(fields[4].classList.contains('bgRed'))&&(fields[7].classList.contains('bgRed')))||((fields[2].classList.contains('bgRed'))&&(fields[5].classList.contains('bgRed'))&&(fields[8].classList.contains('bgRed')))||((fields[0].classList.contains('bgRed'))&&(fields[4].classList.contains('bgRed'))&&(fields[8].classList.contains('bgRed')))||((fields[2].classList.contains('bgRed'))&&(fields[4].classList.contains('bgRed'))&&(fields[6].classList.contains('bgRed'))))
        {
            winInfo.innerHTML = '<h1 class="winRed"> The winner is Red</h1>';
            aside[0].style.display = 'none';
            aside[1].style.display = 'none';
            again.innerHTML = '<div onclick="clearField();">Play Again</div>';
            for(let i=0; i<unActive.length; i++)
            {
                unActive[i] = false;
                fields[i].style.cursor = 'default';

            }
            //alert("Red Player is a Winner!");
            //clearField();
        }
    else if(((fields[0].classList.contains('bgGreen'))&&(fields[1].classList.contains('bgGreen'))&&(fields[2].classList.contains('bgGreen')))||((fields[3].classList.contains('bgGreen'))&&(fields[4].classList.contains('bgGreen'))&&(fields[5].classList.contains('bgGreen')))||((fields[6].classList.contains('bgGreen'))&&(fields[7].classList.contains('bgGreen'))&&(fields[8].classList.contains('bgGreen')))||((fields[0].classList.contains('bgGreen'))&&(fields[3].classList.contains('bgGreen'))&&(fields[6].classList.contains('bgGreen')))||((fields[1].classList.contains('bgGreen'))&&(fields[4].classList.contains('bgGreen'))&&(fields[7].classList.contains('bgGreen')))||((fields[2].classList.contains('bgGreen'))&&(fields[5].classList.contains('bgGreen'))&&(fields[8].classList.contains('bgGreen')))||((fields[0].classList.contains('bgGreen'))&&(fields[4].classList.contains('bgGreen'))&&(fields[8].classList.contains('bgGreen')))||((fields[2].classList.contains('bgGreen'))&&(fields[4].classList.contains('bgGreen'))&&(fields[6].classList.contains('bgGreen'))))
        {
            winInfo.innerHTML = '<h1 class="winGreen"> The winner is Green</h1>';
            aside[0].style.display = 'none';
            aside[1].style.display = 'none';
            again.innerHTML = '<div onclick="clearField();">Play Again</div>';
            for(let i=0; i<unActive.length; i++)
            {
                unActive[i] = false;
                fields[i].style.cursor = 'default';

            }
            //alert("Green Player is a Winner!");
            //clearField();
        }
    else if(((fields[0].classList.contains('bgGreen'))||(fields[0].classList.contains('bgRed')))&&((fields[1].classList.contains('bgGreen'))||(fields[1].classList.contains('bgRed')))&&((fields[2].classList.contains('bgGreen'))||(fields[2].classList.contains('bgRed')))&&((fields[3].classList.contains('bgGreen'))||(fields[3].classList.contains('bgRed')))&&((fields[4].classList.contains('bgGreen'))||(fields[4].classList.contains('bgRed')))&&((fields[5].classList.contains('bgGreen'))||(fields[5].classList.contains('bgRed')))&&((fields[6].classList.contains('bgGreen'))||(fields[6].classList.contains('bgRed')))&&((fields[7].classList.contains('bgGreen'))||(fields[7].classList.contains('bgRed')))&&((fields[8].classList.contains('bgGreen'))||(fields[8].classList.contains('bgRed'))))
        {
            winInfo.innerHTML = '<h1 class="Draw"> It\'s a Draw</h1>';
            aside[0].style.display = 'none';
            aside[1].style.display = 'none';
            again.innerHTML = '<div onclick="clearField();">Play Again</div>';
            for(let i=0; i<unActive.length; i++)
            {
                unActive[i] = false;
                fields[i].style.cursor = 'default';

            }
            //alert("Draw");
            //clearField();
        }
            fields[nr].style.cursor = 'default';
            unActive[nr] = false;
    }
}

function clearField()
{
    for(let i=0; i<fields.length; i++)
        {
            fields[i].innerText = '';
            if(fields[i].classList.contains('bgGreen'))
                {
                    fields[i].classList.toggle('bgGreen');
                }else if(fields[i].classList.contains('bgRed'))
                    {
                        fields[i].classList.toggle('bgRed');
                    }
        }
    aside[0].style.display = 'none';
    aside[1].style.display = 'none';
        
    player = Math.round(Math.random());
        if(player == 1)
        {
            aside[0].style.display = 'none';
            aside[1].style.display = 'block';
        }else{
            aside[1].style.display = 'none';
            aside[0].style.display = 'block';
        }
    again.innerHTML = '';
    winInfo.innerHTML = '';
    for(let i=0; i<unActive.length; i++)
    {
        unActive[i] = true;
        fields[i].style.cursor = 'pointer';
        
    }
}

function unActive()
{
    for(let i=0; i<unActive.length; i++)
    {
        unActive[i] = false;
        fields[i].style.cursor = 'default';
        
    }
}