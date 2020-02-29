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
    // Add a menu item under the map icon on the top toolbar
    context.registerMenuItem("Set guest clothes", function() {
        setGuestClothing(14, 17);
    });
};

registerPlugin({
    name: 'Peep Tools',
    version: '1.0',
    authors: ['OpenRCT2'],
    type: 'remote',
    main: main
});
