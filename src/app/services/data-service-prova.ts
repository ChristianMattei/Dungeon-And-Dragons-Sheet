import { Stat } from "../model/stat";

export class DataServiceProva {

    public getStat(){
        let stats: Stat[];

        stats=[
            {nameStat: 'Strength', mod: 0},
            {nameStat:'Dexterity', mod: 0},
            {nameStat:'Constitution', mod: 0},
            {nameStat:'Intelligence', mod: 0},
            {nameStat:'Wisdom', mod: 0},
            {nameStat:'Charisma', mod: 0}
        ];
        return stats;
    }

}