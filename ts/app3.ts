class BaseObject{
    width:number = 0;
    length:number = 0;
}
class Rectangle extends BaseObject{
    

    calcSize(){
         return this.width*this.length;
    }
    
}
let rectangle = new Rectangle();
rectangle.length=2;
rectangle.width=5;
console.log(rectangle.calcSize());
