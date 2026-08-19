// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

ServerEvents.tags('block', event => {
    const conductiveTags = ['/metal/','/iron/','/zinc/','/brass/','/industrial_plating/','/copper/','/gold/']
    conductiveTags.forEach((item => {
        event.add('electroenergetics:earth',item)
    }))
    
})

ColdSweatEvents.registries(event => {
 
    event.addBoilerFuel(fuel =>
        fuel.items("createdieselgenerators:diesel_bucket")
            .fuel(1000) 
    )
    event.addHearthFuel(fuel =>
        fuel.items("createdieselgenerators:diesel_bucket")
            .fuel(1000) 
    )


    event.addBoilerFuel(fuel =>
        fuel.items("createdieselgenerators:gasoline_bucket")
            .fuel(850) 
    )
    event.addHearthFuel(fuel =>
        fuel.items("createdieselgenerators:gasoline_bucket")
            .fuel(850) 
    )
 

    event.addBoilerFuel(fuel =>
        fuel.items("createdieselgenerators:ethanol_bucket")
            .fuel(700) 
    )

    event.addHearthFuel(fuel =>
        fuel.items("createdieselgenerators:ethanol_bucket")
            .fuel(700)
    )
})
 
 



