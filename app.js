
//Using this we can calculate the stroke dashoffset that is the perimeter of each letter

const logo = document.querySelectorAll('#text path');

for(let i = 0; i < logo.length; i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}
