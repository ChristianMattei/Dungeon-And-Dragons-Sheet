export class Stat { 
    constructor(nameStat: string, mod: number, modProficiencyBonus: number, checked: boolean) {
        this.nameStat=nameStat;
        this.mod=mod;
        this.modProficiencyBonus=modProficiencyBonus;
        this.checked=checked;
    }

    nameStat: string;
    mod?: number;
    modProficiencyBonus? :number;
    checked?: boolean;
}