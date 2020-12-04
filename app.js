const logo = document.querySelectorAll('#text path');

for(let i = 0; i < logo.length; i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}