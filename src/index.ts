class Human {
  public name: string;
  public age: number;
  public gender: string;

  constructor(name: string, age: number, gender?: string){
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const JW = new Human("JW", 25, "female");

const sayHi = (person: Human): string => {
 return `Hello ${person.name}, u r ${person.age} old ${person.gender}`;
};

console.log(sayHi(JW));

export {};