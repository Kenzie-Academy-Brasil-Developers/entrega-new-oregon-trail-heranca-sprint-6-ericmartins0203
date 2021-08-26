const Traveler = require("./Traveler");

class Hunter extends Traveler{
    constructor(name){
        super(name);
        this._food = 2;
        this.isHealthy = true
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
    hunt(){
        return this._food+=5
    }
    eat(){
        if (this._food === 2){
            return this._food = 0
        }
        else if (this._food <= 1){
            this.isHealthy = false
            return this._food = 0
        }
        else{
            return this._food-=2
        }
    }
    giveFood(traveler, numOfFoodUnits){
        if (this._food<numOfFoodUnits){
    
        }
        else{
            this._food-=numOfFoodUnits
            traveler._food+=numOfFoodUnits
        }
    }
}


module.exports = Hunter;