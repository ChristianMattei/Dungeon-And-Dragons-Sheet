import { Stat } from "./stat";

export class Skill { 
    constructor(nameSkill: string, statType: string, stat: Stat) {
        this.nameSkill=nameSkill;
        this.statType=statType;
        this.stat=stat;
    }

    nameSkill: string;
    statType: string;
    stat?: Stat;
}