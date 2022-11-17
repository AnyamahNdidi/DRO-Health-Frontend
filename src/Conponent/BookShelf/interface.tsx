export  interface myData
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
export  interface myCha
{
    url: string,
    name: string,
    gender: string,
    culture: string,
    born: string,
    died: string,
    titles: string[],
    aliases: string[],
    father: string,
    mother: string,
    spouse: string,
    allegiances: [],
    books: string[],
    povBooks: [],
    tvSeries: string[],
    playedBy:string[],
    props?:any[],
    characters?:string[],
   
}