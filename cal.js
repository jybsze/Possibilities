const numDraw = 15;

let total = 0;
let numFavors = 0;

genDraw([]);

function genDraw(draw) {
    if(draw.length == numDraw) {
        total++;
        
        for(let i = 0; i < draw.length; i++) {
            if(draw[i] == 1) {
                numFavors++;
                break;
            }
        }
    } else {
        for(let i = 1; i <= 10; i++) {
            const newDraw = draw.slice();
            newDraw.push(i);
            genDraw(newDraw);
        }
    }
}

console.log("Total = " + total);
console.log("Num Favors = " + numFavors);