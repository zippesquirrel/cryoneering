// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

ServerEvents.tags('item', event => {
    Item.getTypeList().forEach(item => {
        const id = item

        if (id.includes('slab')) {
            event.add('minecraft:slabs', id)
        }
    })
})

ServerEvents.tags('item', event => {
    const groups = {
        onebytwo: [/chain$/,/curtain$/,/banner$/,/linemans_stick$/,/tall_stool/,/electrical_panel/,/hexafluoride_breaker/],
        twobyone: [/slab$/, /carpet$/, /ice_layer$/, /sleet_layer$/, /^marbledsfirstaid:medical_bag$/,
            /pressure_plate$/,/firewood$/,/daylight_detector$/,/nameplate$/,/pan$/,/stool/,/radiator_panel/],
        one: [/button$/,/lever/,/candle$/,/sea_pickle$/,/kelp$/,
            /another.*lamp/,/world.*lamp/,/createdeco.*lamp/,
            /scape.*lamp/,/bits_n_bobs:headlamp/,/decal/,
            /placard$/,/handle$/,/coin/,/torch$/,/lantern$/,
            /redstone_(?!(torch)|(lamp)|(magnet)|(contact)|(requester))/,
            /repeater/,/comparator/,/bolt$/, /wedge$/, /bobs.*bulb/, /energetics.*bulb/,
            /electroenergetics:connector/,/electroenergetics:double_connector/,
            /electroenergetics:triple_connector/,/electroenergetics:quad_connector/,
            /electroenergetics:momentary_switch/,/electroenergetics:cut_off_switch/,
            /electroenergetics:double_switch/,/electroenergetics:relay/,
            /electroenergetics:buzzer/,/electroenergetics:energy_meter/,
            /electroenergetics:tri_polar_energy_meter/,/electroenergetics:fuse_holder/,
            /electroenergetics:alternator_brushes/,/electroenergetics:accumulator/,
            /electroenergetics:rail_contact_shoe/,/electroenergetics:diode/,
            /electroenergetics:capacitor/,/electroenergetics:inductor/,
            /electroenergetics:potentiometer/,/electroenergetics:variac/,
            /electroenergetics:resistor/,/electroenergetics:creative_resistor/,
            /electroenergetics:three_phase_alternator_brushes/,
            /electroenergetics:synchroscope/,/electroenergetics:frequency_meter/,
            /energetics.*sign/,/receiver/],
        two: [/large_tire$/,/boat$/,/hearth/],
        three: [/monstrous_tire$/,/.*large_(?!metal_(?!cogwheel)).*((cogwheel)|(fan))/,/.*crushing_wheel$/],
        threebyone: [/sleeping_bag/,/hammock/],
        threebytwo: [/_bed$/, /^marbledsfirstaid:medkit$/]
    }

    Item.getTypeList().forEach(id => {
        Object.keys(groups).some(name => {
            const patterns = groups[name]
            if (patterns.some(re => re.test(id))) {
                event.add('invgrid:' + name, id)
                return true 
            }
            return false
        })
    })
})

ServerEvents.tags('item', event => {
    const groups = {
        one: [/minecraft:flowers/],
        twobyone: [/sable:half_volume/,/minecraft:trapdoors/],
        twobythree: [/minecraft:doors/]
    }
    
    Item.getTypeList().forEach(id => {
        if (!id) return

        const itemTags = []
        Item.of(id).item.builtInRegistryHolder().tags().forEach(tagKey => {
            itemTags.push(tagKey.location().toString())
        })
        Object.keys(groups).some(name => {
            const patterns = groups[name]
            if (itemTags.some(tag => patterns.some(re => re.test(tag)))) {
                event.add('invgrid:' + name, id)
                return true
            }
            return false
        })
    })
})

ServerEvents.tags('item', event => {
    const blockIds = new Set(Block.getTypeList().map(b => b.toString()))

    Item.getTypeList().forEach(item => {
        const id = item.toString()
        if (!id) return

        if (blockIds.has(id)) return // skip block items

        event.add('invgrid:item', id)
    })
    
})

