{
    // function 
    // normal function and arrow function

    function add(x: number, y: number): number {
        return x + y;
    }

    add(10, 10); // 
    console.log(add(10, 10)); // 20

    const addArrow = (x: number, y: number): number => x + y;

    // object --> function method

    const obj = {
        name: 'Ashik',
        balance: 1000,
        add(balance: number): string {
            return `My New balance is  ${this.balance + balance}`;  
        }
    };


    const arr : number[] = [1, 2, 3, 4, 5];

    const newArr : number[] = arr.map((item: number): number => item * 2);






}