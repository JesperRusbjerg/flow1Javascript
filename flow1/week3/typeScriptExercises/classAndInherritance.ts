class Shape {
    constructor(public _color: string){
    }  
    getArea() {
      return undefined;
    }
    getPerimeter() {
      return undefined;
    }
    toString(){
        console.log(`The color is ${this._color}`)
    }
  }

  const shape = new Shape('blue')
  shape.toString()


  class Circle extends Shape{
      constructor(_color: string, private _radius: number){
          super(_color)
      }
      getArea() {
        return undefined;
      }
      getPerimeter() {
        return undefined;
      }
      toString(){
          console.log(`The color is ${this._color}`)
      }
      get radius() : number {
          return this._radius
      }
      set radius(radius){
        this.radius = radius
      }

  }