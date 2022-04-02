function Circle(radius) {
    this.radius = radius;
    this.circumference = () => {
        return Math.floor(this.radius * 2 * Math.PI);
    };
    this.area = () => {
        return Math.floor(Math.pow(this.radius, 2) * Math.PI);
    };
}

var r = prompt('원의 반지름은? (cm)');
var circle1 = new Circle(r);

document.write(`반지름이 ${circle1.radius}cm일 때<br>`);
document.write(`원의 둘레 : 약 ${circle1.circumference()}cm<br>`);
document.write(`원의 넓이 : 약 ${circle1.area()}cm2<br>`);
