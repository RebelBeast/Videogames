import { Game } from "./game"


/*Creates a new Game entry and stores it*/ 
export function createGame(newGame: Game, storagekey: string): void {
    let storage: string | null = localStorage.getItem(storagekey)
    if (storage !== null) {
        let json = JSON.parse(storage)
        let jsonadd = {
            id: json.length,
            gamename: newGame.gamename,
            genre: newGame.genre,
            price: newGame.price,
        }
        json.push(jsonadd)
        let newstorage: string = JSON.stringify(json)
        localStorage.setItem(storagekey, newstorage)
    }
}


/* Function to read stored games from localstorage and delte the right one*/
export function deleteGameEntry(id: number, storagekey: string): void {
    let storage: string | null = localStorage.getItem(storagekey)
    if (storage !== null) {
        let json: any = JSON.parse(storage)
        for (let i: number = 0; i < json.length; i++) {
            if (json[i].id === id) {
                json.splice(i, 1)
                localStorage.setItem(storagekey, JSON.stringify(json))
                return
            }
        }
        console.error("The Game you wanted to delete could not be found")
        return
    } else {
        console.error("There is something really wrong!!!")
        return
    }
}
