class LineManager {
    constructor(stops) {
        this.stops = stops;
        this.currentStop = 0;
        this.duration = 0;
    }

    get currentStop(){
        return this._currentStop
    }

    set currentStop(value){
        if(value > 0 && value <= this.stops.length-1){
            this._currentStop = value;
        }
    }

    get duration() {
        return this._duration
    }

    set duration(value){
        if(value > 0){
            this._duration = value;
        }
    }

    get stops() {
        return this._stops
    }

    set stops(value) {
        let isValid = false;
       for(let stop of value){
           let keys = Object.keys(stop);
           if(keys[0] !== 'name' && keys[1] !== 'timeToNext'){
               throw new Error('Incorrect input')
           }else {
               let name = stop.name;
               let time = Number(stop.timeToNext);

               if(name !== '' && time >= 0){
                   isValid = true;
               }else {
                   throw new Error('Incorrect input')
               }
           }
           if(isValid){
               this._stops = value;
           }
       }

    }

    get nextStopName(){
        if(this.currentStop === this.stops.length - 1){
            return 'At depot.'
        }else {
            let currentStop = this.currentStop;
            return this.stops[currentStop + 1]
        }
    }

    get atDepot() {
        let isArrived = false;
        if(this.currentStop === this.stops.length - 1){
            isArrived = true;
        }
        return isArrived

    }

    arriveAtStop(minutes){
        if(minutes<0 || this.currentStop===this.stops.length-1){
            throw new Error('incorrect input')
        }
        else{
            this.stops.timeToNext+=this.duration;
            this.currentStop = this.currentStop+1;
            return this.currentStop !== this.stops.length - 1 ? false : true;
        }
    }

    toString(){
        let result = '';
        let stopsCovered = 0;
        let nextStop;
        let timeOnCourse;
        for (let i = 0; i < this.stops.length; i++) {
            nextStop = this.stops[i + 1];
            stopsCovered++;
            timeOnCourse = this.stops[i].timeToNext;
        }
        result += 'Line summary' + '\n';
        result += `- Next stop: ${this.currentStop + 1}` + '\n'

        return result
    }
}

const man = new LineManager([
    {name: 'Depot', timeToNext: 4},
    {name: 'Romanian Embassy', timeToNext: 2},
    {name: 'TV Tower', timeToNext: 3},
    {name: 'Interpred', timeToNext: 4},
    {name: 'Dianabad', timeToNext: 2},
    {name: 'Depot', timeToNext: 0},
]);
while(man.atDepot === false){
    console.log(man.toString())
    man.arriveAtStop(4)
}
console.log(man.toString());


