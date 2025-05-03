{
    // spread operator
    // rest operator
    // destructuring assignment

    const arr: string[] = ['Ashik', 'Sakib', 'Shakib', 'Sabbir'];

    const arr2: string[] = ['Sabbir', 'Sakib', 'Shakib', 'Ashik'];

    arr.push(...arr2); // ['Ashik', 'Sakib', 'Shakib', 'Sabbir', 'Sabbir', 'Sakib', 'Shakib', 'Ashik']


    const mentors1 = {
        name: 'Ashik',

    }

    const mentors2 = {
        name: 'Sakib',
    }

    const mentorlist = {
        ...mentors1,
        ...mentors2,
    }


    // learan about rest operator
    const frieds = (...frd: string[]) => {
        frd.forEach((item: string) => {
            console.log(item);
        }
        )
    }

    frieds('Ashik', 'Sakib', 'Shakib', 'Sabbir');






























}