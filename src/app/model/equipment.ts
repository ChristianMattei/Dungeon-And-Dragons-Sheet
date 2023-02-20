export class Equipment { 
    constructor(name: string, type: string, description: string, classArmor?: number, statModifier?: number, attackDice?: string, bonusStat?: string) {
        this.name=name;
        this.type=type;
        this.description=description;
        this.classArmor=classArmor;
        this.statModifier=statModifier;
        this.attackDice=attackDice;
        this.bonusStat=bonusStat;
    }

    name: string;
    type: string;
    description: string;
    classArmor?: number;
    statModifier?: number;
    attackDice?: string;
    bonusStat?: string;
}