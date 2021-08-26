class Wagon {
    constructor(capacity) {
        this._capacity = capacity;
        this._passageiros = [];
    }
    get capacity(){
        return this._capacity
    }
    set capacity(newCapacity){
        this._capacity = newCapacity
    }
    getAvailableSeatCount() {
        return this._capacity-this._passageiros.length
    };
    join(passageiro) {
        if (this._capacity > this._passageiros.length){
           this._passageiros.push(passageiro)
        }
        if (this._capacity === this._passageiros.length){
           return 'Não tem espaço para ela!'
        }
    }
    shouldQuarantine(){
        let {_passageiros} = this
        for (let i=0;i<_passageiros.length;i++){
            if (_passageiros[i].isHealthy === false){
                return true
            }
        }
        return false
    }
    totalFood(){
        let {_passageiros} = this
        let allFood =0
        for (let i=0;i<_passageiros.length;i++){
            allFood+= _passageiros[i].food
        }
        return allFood
    }
}

module.exports = Wagon;