// Sample script that adds functions for manipulating peeps

// #5827: change guest's clothes colours 
var setGuestClothing = function(tshirtColour, trousersColour) {
    for (var i = 0; i < map.numEntities; i++) {
        var entity = map.getEntity(i);
        if (entity && entity.type === 'peep') {
            entity.tshirtColour = tshirtColour;
            entity.trousersColour = trousersColour;
        }
    }
}

var main = function() {
    // Add a menu item under the map icon on the top toolbar
    ui.registerMenuItem("Set guest clothes", function() {
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
