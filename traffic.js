const i = -700;

class Traffic{
    constructor(){
        this.dumbcars = [
            new Car(road.getLaneCenter(1),-100,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(0),-300,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(2),-300,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(0),-500,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(1),-500,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(1),-700,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(2),-700,30,50,"DUMMY",2,getRandomColor()),

            new Car(road.getLaneCenter(1),-100 + 2 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(0),-300 + 2 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(2),-300 + 2 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(0),-500 + 2 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(1),-500 + 2 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(1),-700 + 2 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(2),-700 + 2 * i,30,50,"DUMMY",2,getRandomColor()),
            
            new Car(road.getLaneCenter(1),-100 + 3 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(0),-300 + 3 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(2),-300 + 3 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(0),-500 + 3 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(1),-500 + 3 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(1),-700 + 3 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(2),-700 + 3 * i,30,50,"DUMMY",2,getRandomColor()),
            
            new Car(road.getLaneCenter(1),-100 + 4 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(0),-300 + 4 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(2),-300 + 4 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(0),-500 + 4 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(1),-500 + 4 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(1),-700 + 4 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(2),-700 + 4 * i,30,50,"DUMMY",2,getRandomColor()),
            
            new Car(road.getLaneCenter(1),-100 + 5 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(0),-300 + 5 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(2),-300 + 5 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(0),-500 + 5 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(1),-500 + 5 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(1),-700 + 5 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(2),-700 + 5 * i,30,50,"DUMMY",2,getRandomColor()),
            
            new Car(road.getLaneCenter(1),-100 + 6 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(0),-300 + 6 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(2),-300 + 6 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(0),-500 + 6 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(1),-500 + 6 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(1),-700 + 6 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(2),-700 + 6 * i,30,50,"DUMMY",2,getRandomColor()),
            
            new Car(road.getLaneCenter(1),-100 + 7 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(0),-300 + 7 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(2),-300 + 7 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(0),-500 + 7 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(1),-500 + 7 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(1),-700 + 7 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(2),-700 + 7 * i,30,50,"DUMMY",2,getRandomColor()),
            
            new Car(road.getLaneCenter(1),-100 + 8 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(0),-300 + 8 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(2),-300 + 8 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(0),-500 + 8 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(1),-500 + 8 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(1),-700 + 8 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(2),-700 + 8 * i,30,50,"DUMMY",2,getRandomColor()),
            
            new Car(road.getLaneCenter(1),-100 + 9 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(0),-300 + 9 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(2),-300 + 9 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(0),-500 + 9 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(1),-500 + 9 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(1),-700 + 9 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(2),-700 + 9 * i,30,50,"DUMMY",2,getRandomColor()),
            
            new Car(road.getLaneCenter(1),-100 + 10 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(0),-300 + 10 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(2),-300 + 10 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(0),-500 + 10 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(1),-500 + 10 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(1),-700 + 10 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(2),-700 + 10 * i,30,50,"DUMMY",2,getRandomColor()),
            
            new Car(road.getLaneCenter(1),-100 + 11 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(0),-300 + 11 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(2),-300 + 11 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(0),-500 + 11 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(1),-500 + 11 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(1),-700 + 11 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(2),-700 + 11 * i,30,50,"DUMMY",2,getRandomColor()),
            
            new Car(road.getLaneCenter(1),-100 + 12 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(0),-300 + 12 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(2),-300 + 12 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(0),-500 + 12 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(1),-500 + 12 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(1),-700 + 12 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(2),-700 + 12 * i,30,50,"DUMMY",2,getRandomColor()),
            
            new Car(road.getLaneCenter(1),-100 + 13 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(0),-300 + 13 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(2),-300 + 13 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(0),-500 + 13 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(1),-500 + 13 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(1),-700 + 13 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(2),-700 + 13 * i,30,50,"DUMMY",2,getRandomColor()),
            
            new Car(road.getLaneCenter(1),-100 + 14 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(0),-300 + 14 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(2),-300 + 14 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(0),-500 + 14 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(1),-500 + 14 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(1),-700 + 14 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(2),-700 + 14 * i,30,50,"DUMMY",2,getRandomColor()),
            
            new Car(road.getLaneCenter(1),-100 + 15 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(0),-300 + 15 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(2),-300 + 15 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(0),-500 + 15 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(1),-500 + 15 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(1),-700 + 15 * i,30,50,"DUMMY",2,getRandomColor()),
            new Car(road.getLaneCenter(2),-700 + 15 * i,30,50,"DUMMY",2,getRandomColor()),
            
        
            
        ];
    }
}