var rect = require('./rectangle');


function solveRect(l, b) {
    console.log("Solving for rectangle with l = " + l + "and b = " + b);

    if( l <= 0 || b <= 0) {
        console.log("Rectangle dimensions should be greater than zero:  l = "
        + l + ",  and b = " + b);
    } else {
        console.log("The area of the rectangle is " + rect.area(l , b));
	    console.log("The perimeter of the rectangle is " + rect.perimeter(l , b));
    }

}

solveRect(5, 6);
solveRect(3, 5);
solveRect(5, 0);
solveRect(5, -3);
solveRect(-10, 6);