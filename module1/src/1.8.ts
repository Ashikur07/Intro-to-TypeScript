{

    const user = {
        id: 345,
        name: {
            firstName: 'Ashik',
            midddleName: 'ur',
            lastName: 'Rahman',
        },
        age: 25,
        isMarried: false,
    }

    const { age, name:{midddleName : midNam} } = user; // destructuring

    // array destructuring
    const myfriends = ['Ashik', 'Sakib', 'Sabbir'];

    const [a,b,c,d] = myfriends; // destructuring

    const [,,...rest] = myfriends; // rest operator
    console.log(rest); // ['Sabbir']
















































}