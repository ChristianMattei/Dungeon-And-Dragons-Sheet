export class ProficiencyBonus { 
    constructor(bonus: number, update: boolean, changed: boolean) {
        this.bonus=bonus;
        this.update=update;
        this.changed=changed;
    }

    bonus: number;
    update: boolean;
    changed: boolean;
}