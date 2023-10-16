import { v4 as newId } from 'uuid';

let cats = [
    {
        id: '1',
        name: 'Richard',
        age: '10',
        breed: 'scottish fold',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FScottish_Fold&psig=AOvVaw2f1uZtDwU8kxXqu2mAZJR_&ust=1697544012064000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJiI7LHC-oEDFQAAAAAdAAAAABAJ'
    },
    {
        id: '2',
        name: 'Lilo',
        age: '2',
        breed: 'normal cat',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nationalgeographic.com%2Fanimals%2Fmammals%2Ffacts%2Fdomestic-cat&psig=AOvVaw0avQxfwEHtYVFgyi1fKfgw&ust=1697544082719000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIiTktPC-oEDFQAAAAAdAAAAABAE'
    }
];

class Cat {
    constructor(name, age, breed, img) {
        this.id = newId();
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.img = img;
    }
    static getCats = () => {
        return cats;
    };
    static getCat = (id) => {
        return cats.find((cat) => cat.id === id);
    };
    addCat = () => {
        return cats.push(this);
    };
    static updateCat = (id, updatedCat) => {
        const index = cats.findIndex((cat) => cat.id === id);
        if (index === -1) {
            return false;
        } else {
            cats[index] = { id, ...updatedCat };
            return true;
        }
    };
    static deleteCat = (id) => {
        const catExist = cats.findIndex((cat) => cat.id === id)
        if (catExist === -1) {
            return false;
        } else {
           cats= cats.filter((cat) => cat.id !== id)
            return true
        }

    
    }
}
export default Cat;
