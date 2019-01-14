class NPC{
    constructor(){
        this._ABSArray = [0,0,0,0,0,0];     //str, dex, con, int, wis, cha
        this.generateABS();
        this._species;
        this._speed = 30;
        this.getSpecies();
    }
    generateABS(){
        for(let x = 0; x<6;x++){
            this._ABSArray[x]=this.statRoll();
        }
    }
    statRoll(){
        let d1 = Math.ceil(Math.random()*6);
        let d2 = Math.ceil(Math.random()*6);
        let d3 = Math.ceil(Math.random()*6);
        return d1+d2+d3;
    }
    getSpecies(){
        let x = Math.ceil(Math.random()*9);
        switch (x){
            case 1:
                this._species = 'Dragonborn';
                this.generateDragonBorn();
                break;
            case 2:
                this._species = 'Dwarf';
                this.generateDwarf();
                break;
            case 3:
                this._species = 'Elf';
                this.generateElf();
                break;
            case 4:
                this._species = 'Half-Elf';
                this.generateHElf();
                break;
            case 5:
                this._species ='Halfling';
                this.generateHalfling();
                break;
            case 6:
                this._species = 'Half-Orc';
                this.generateHOrc();
                break;
            case 7:
                this._species = 'Human';
                this.generateHuman();
                break;
            case 8:
                this._species = 'Gnome';
                this.generateGnome();
                break;
            case 9:
                this._species = 'Tiefling';
                this.generateTiefling();
                break;
        }
    }

    generateDragonBorn(){
        this._ABSArray[0] += 2;
        this._ABSArray[5] += 1;
        let x = Math.ceil(Math.random()*10);
        switch(x){
            case 1:
                this._species = "Black "+this._species;
                break;
            case 2:
                this._species = "Blue "+this._species;
                break;
            case 3:
                this._species = "Brass "+this._species;
                break;
            case 4:
                this._species = "Bronze "+this._species;
                break;
            case 5:
                this._species = "Copper "+this._species;
                break;
            case 6:
                this._species = "Gold "+this._species;
                break;
            case 7:
                this._species = "Green "+this._species;
                break;
            case 8:
                this._species = "Red "+this._species;
                break;
            case 9:
                this._species = "Silver "+this._species;
                break;
            case 10:
                this._species = "White "+this._species;
                break;

        }

    }
}