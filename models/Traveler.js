class Traveler {
    constructor(name) {
        this._name = name;
        this._food = 1;
        this._isHealthy =true;
    }
    get name(){
        return this._name
    }
    set name(newName){
        this._name = newName
    }
    get food(){
        return this._food
    }
    set food(newFood){
        if (newFood === Number){
            if (newFood>=0){
                this._food = newFood
            }
        } 
    }
    get isHealthy(){
        return this._isHealthy
    }
    set isHealthy(newIsHealthy){
        if (newIsHealthy=== true || newIsHealthy === false){
            this._isHealthy = newIsHealthy
        }
    }
    hunt() {
        this._food+=2
    };
    eat() {
        if (this._food>0){
            return this._food-=1
        }
        if (this._food===0){
            this._isHealthy =false
            return `O ${this._name} não está mais saudável`
        }
    }
}

module.exports = Traveler;