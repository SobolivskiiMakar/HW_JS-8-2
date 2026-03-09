// 1

const friends = ["Mango", "Poly", "Kiwi", "Ajax"]
let string = ""
for (let i = 0; i < friends.length; i++) {
    if (i !== 0) {
        string += ", "
    }
    string +=  friends[i]
}
console.log(string)

string = friends.join(", ")
console.log(string)


// 2

const cards = ["Карточка-1", "Карточка-2", "Карточка-3", "Карточка-4", "Карточка-5"]
const cardToRemove = cards.splice(2, 1)
console.log(cards)
const cardToInsert = cards.splice(4, 0, "Карточка-6")
console.log(cards)
const cardToUpdate = cards.splice(2, 1, "Найс")
console.log(cards)