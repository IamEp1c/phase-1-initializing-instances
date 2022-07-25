class Breakfast {
    constructor(food, drink){
        this.food = food
        this.drink = drink
    }
}

let breakfast1 = new Breakfast("eggs", "Orange Juice")

class Lunch {
    constructor(salad, soup, drink){
        this.salad = salad 
        this.soup = soup 
        this.drink = drink
    }
}

let lunch1 = new Lunch("greek salad", "onion soup", "coke")


class Dinner {
    #dessert; 
    constructor(salad, soup, entree, dessert){
        this.#dessert = dessert
        this.salad = salad 
        this.soup = soup 
        this.entree = entree
    }
}

let dinner1 = new Dinner("balsamic salad", "potato soup", "steak", "Cookies")