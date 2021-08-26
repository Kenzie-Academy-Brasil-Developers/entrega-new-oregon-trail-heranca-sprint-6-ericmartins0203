const { doctor } = require("../app");
const Traveler = require("./Traveler");

class Doctor extends Traveler{
    constructor(name){
        super(name);
        this._food = 1
        this._isHealthy = true
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
        return this._food+=2
    };
    eat() {
        if (this._food>0){
            return this._food-=1
        }
        if (this._food===0){
            this._isHealthy = false
            return `O ${this._name} não está mais saudável`
        }
    }
    heal(traveler){
        if (traveler._isHealthy === false){
            return traveler._isHealthy = true
        }
    }
}



module.exports = Doctor;