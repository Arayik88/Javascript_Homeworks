class Account {

    constructor(id, name, balance) {
        this._id = id;
        this._name = name;
        this._balance = balance;
    }


    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get balance() {
        return this._balance;
    }

    set balance(value) {
        this._balance = value;
    }

    credit(amount){
        if(amount >= 0) {
            this._balance += amount;
        }
        return this._balance;
    }

    debit(amount){
        if(amount >= 0) {
            if(this._balance >= amount){
                this._balance -= amount;
            }
            else{
                alert("Amount exceeded balance.");
            }
        }
        return this._balance;
    }

    transferTo(anotherAccount, amount){
       if(amount <= this._balance){
           this.debit(amount);
           anotherAccount += amount;
       }
       else {
           alert("Amount exceeded balance.");
       }
        return this._balance;
    }

    static identifyAccounts(accountFirst, accountSecond){
        if (Object.keys(accountFirst).length !== Object.keys(accountSecond).length)
            return false;
        for(let key in accountFirst){
            if(accountFirst[key] !== accountSecond[key]) {
                return false;
            }
        }
        return true;
    }

    toString(){
        return `id: ${this._id}, name: ${this._name}, balance: ${this._balance}`;
    }
}