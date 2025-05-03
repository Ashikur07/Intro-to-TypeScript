{

// union type

// type FrontendDeveloper = "fakibazdeveloper" | "juniorDeveloper";

// const newDeveloper: FrontendDeveloper = "juniorDeveloper"// valid

type User ={
    name: string,
    age: number,
    gender: "Male" | "Female",
}


type FrontendDeveloper={
    skills: string[],
    designation: "Fontend Developer",
}

type BackendDeveloper={
    skills: string[],
    designation: "Backend Developer",
}

type fullStackDeveloper= FrontendDeveloper & BackendDeveloper; // intersection type



































}