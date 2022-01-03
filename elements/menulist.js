import { atom } from "recoil"

export const Menulist = atom({
    key: 'menuitems',
    default:[]
})

export const MucMenu = atom ({
    key: 'Muc',
    default:{
        id:0
    },
})

export const Menulistclick = atom({
    key: 'Menuonclick',
    default:{
        list: []
    }
})