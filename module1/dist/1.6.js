"use strict";
{
    // function 
    // normal function and arrow function
    function add(x, y) {
        return x + y;
    }
    add(10, 10); // 
    console.log(add(10, 10)); // 20
    const addArrow = (x, y) => x + y;
    // object --> function method
    const obj = {
        name: 'Ashik',
        balance: 1000,
        add(balance) {
            return `My New balance is  ${this.balance + balance}`;
        }
    };
    const arr = [1, 2, 3, 4, 5];
    const newArr = arr.map((item) => item * 2);
}
