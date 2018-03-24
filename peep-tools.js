// Sample script that adds functions for manipulating peeps

// #5827: change guest's clothes colours 
var setGuestClothing = function(tshirtColour, trousersColour) {
    for (var i = 0; i < map.things; i++) {
        var thing = map.getThing(i);
        if (thing && thing.type === 'peep') {
            thing.tshirtColour = tshirtColour;
            thing.trousersColour = trousersColour;
        }
    }
}

var main = function() {
    context.registerIntent({
        key: 'random.setguestclothing',
        title: 'Set guest clothes',
        action: function() {
            setGuestClothing(14, 17);
        }
    });
};

return {
    name: 'Peep Tools',
    version: '1.0',
    authors: ['OpenRCT2'],
    type: 'default',
    main: main
};
