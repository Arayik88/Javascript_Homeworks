class Person{

    constructor(firstName, lastName, gender, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._gender = gender;
        this._age = age;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    toString(){
        return `firstName: ${this._firstName}, lastName: ${this._lastName}, gender: ${this._gender}, age: ${this._age}`;
    }
}

class Student extends Person{
    constructor(firstName, lastName, gender, age, programs, year, fee) {
        super(firstName, lastName, gender, age);
        if(Array.isArray(programs)){
            this._programs = programs;
        }
        this._year = year;
        this._fee = fee;
        this._exams = [];
    }

    get programs() {
        return this._programs;
    }

    set programs(value) {
        if(Array.isArray(value)){
            this._programs = value;
        }
    }

    get year() {
        return this._year;
    }

    set year(value) {
        this._year = value;
    }

    get fee() {
        return this._fee;
    }

    set fee(value) {
        this._fee = value;
    }

    get exams() {
        return this._exams;
    }

    set exams(value) {
        if(Array.isArray(value)){
            this._exams = value;
        }
    }

    passExam(program, grade){
        if(!this._programs.contains(program)){
            alert("There is no such a program in student's programs");
            return;
        }
        else{
            if(grade >= 50){
                this._exams.push(true);
                return true;
            }
            return false;
        }
    }

    canGraduete(){
        if(this._programs.length !== this._exams.length){
            return false;
        }
        return true;
    }


    toString(): string {
        return (super.toString() + ` programs: ${this._programs}, year: ${this._year}, fee: ${this._fee}, exams: ${this._exams}`);
    }
}

class Staff{

}

class Teacher extends Person{

    constructor(firstName, lastName, gender, age, program, pay) {
        super(firstName, lastName, gender, age);
        this._program = program;
        this._pay = pay;
    }

    get program() {
        return this._program;
    }

    set program(value) {
        this._program = value;
    }

    get pay() {
        return this._pay;
    }

    set pay(value) {
        this._pay = value;
    }

    toString(): string {
        return (super.toString() + ` program: ${this._program}, pay: ${this._pay}`);
    }
}