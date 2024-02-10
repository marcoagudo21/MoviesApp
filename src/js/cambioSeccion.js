
export const cambioSeccionSearch = (heroContainer,nav,hero,hero2,list) => {
    
    heroContainer.classList.add("hero_container2")
    nav.classList.replace("nav", "nav2")
    hero.classList.replace("hero", "d-none")
    hero2.classList.replace("d-none", "hero2")
    list.classList.add("d-none")
}
export const cambioSeccionHome = (heroContainer,nav,hero,hero2,list) => {
    console.log(heroContainer,nav,hero,hero2,list)
    heroContainer.classList.remove("hero_container2")
    nav.classList.replace("nav2", "nav")
    hero.classList.replace("d-none", "hero")
    hero2.classList.replace("hero2", "d-none")
    list.classList.remove("d-none")
}