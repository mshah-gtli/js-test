

class test{
     //variable = 100;
     myFunction() {
        console.log('test '+ 100);    
    }
	
}

let myTest = new test();
myTest.myFunction();


// unnamed
let Rectangle = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  console.log(Rectangle.name);
  // output: "Rectangle"
  
  // named
  let Rectangle2 = class Rectangle2 {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  console.log(Rectangle2.name);
  // output: "Rectangle2"