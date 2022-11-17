export  interface DetailsData
{
    url: string,
    name: string,
    isbn: string,
    authors: string[],
    numberOfPages: number,
    publisher: string,
    country: string,
    mediaType: string,
    released: string,
    characters: string[],
    povCharacters:string[],
    to?:any
   
}

export interface detailCharater  {
    characters? : string[],
    url?:any
}
export interface dataCharater  {
    character? : string,
    url?:any
}

export interface iDetail {
    name?: string
    url?: string
}