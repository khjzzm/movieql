export const people = [
    {
        id : 0,
        name: "kim",
        age: 32,
        gender: "male"
    },
    {
        id : 1,
        name: "lee",
        age: 22,
        gender: "male"
    },
    {
        id : 2,
        name: "park",
        age: 12,
        gender: "male"
    },
];

export const getById = (id:number) => {
    console.log(id === people[0].id);
    const filteredPeople = people.filter((person:any) => person.id === id);
    console.log(filteredPeople[0]);
    return filteredPeople[0];
}