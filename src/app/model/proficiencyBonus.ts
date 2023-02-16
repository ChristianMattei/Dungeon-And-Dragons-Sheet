export class ProficiencyBonus { 
    constructor(bonus: number, update: boolean) {
        this.bonus=bonus;
        this.update=update;
    }

    bonus: number;
    update: boolean;
}