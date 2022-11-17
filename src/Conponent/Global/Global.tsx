import { atom, selector } from "recoil"
import axios from "axios"
import {myData,myCha} from "../BookShelf/interface"
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const url: string = "https://www.anapioficeandfire.com/api/books"


export const books= atom({
    key: "books",
    default: [] as Array<myData>,
    effects_UNSTABLE: [persistAtom]
})
export const character = atom({
    key: "character",
    default: [] as Array<myCha>,
    effects_UNSTABLE: [persistAtom]
})
