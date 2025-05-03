"use strict";
{
    // spread operator
    // rest operator
    // destructuring assignment
    const arr = ['Ashik', 'Sakib', 'Shakib', 'Sabbir'];
    const arr2 = ['Sabbir', 'Sakib', 'Shakib', 'Ashik'];
    arr.push(...arr2); // ['Ashik', 'Sakib', 'Shakib', 'Sabbir', 'Sabbir', 'Sakib', 'Shakib', 'Ashik']
    const mentors1 = {
        name: 'Ashik',
    };
    const mentors2 = {
        name: 'Sakib',
    };
    const mentorlist = Object.assign(Object.assign({}, mentors1), mentors2);
    // learan about rest operator
    const frieds = (...frd) => {
        frd.forEach((item) => {
            console.log(item);
        });
    };
    frieds('Ashik', 'Sakib', 'Shakib', 'Sabbir');
}
