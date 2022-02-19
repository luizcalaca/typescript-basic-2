enum STATUS{
    force,
    notforce
}

class Car {

    velocity: number;
    color: string;
    status: STATUS

    constructor(velocity: number, color:string) {
        this.velocity = velocity;
        this.color = color
        this.status = STATUS.force
    }

    buzinar() {
        console.log('Be be');
    }
    
      // vamos aproveitar e modificar os métodos para usarem nossa variável:
    freiar() {
        console.log('Go back');
        this.velocity - 10;
        console.log(`${this.velocity}`);
    }

}
const obj1 = new Car(50, "red")
console.log(obj1.color)
