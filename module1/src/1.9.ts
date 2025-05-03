{
// type alias
type Student = {
    name: string,
    age: number,
    gender: string,
    contractNo?: number,
    address: string,
}
// type alias for student with optional contractNo

const student1: Student= {
    name: 'Ashik',  
    age: 23,
    gender: "Male",
    contractNo: 1234567890,
    address: "Dhaka",
}

const student2: Student = {
    name: 'Sakib',
    age: 23,
    gender: "Male",
    address: "Dhaka",
}

type Add = (num1: number, num2: number) => number; // function type alias

const add: Add = (num1, num2) => num1 + num2; 































}