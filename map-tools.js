// Sample script that adds functions for manipulating the park

// #3526: Make vandalism
var destroyAllFootpathItems = function() {
    // Iterate every tile in the map
    for (var y = 0; y < map.size.y; y++) {
        for (var x = 0; x < map.size.x; x++) {
            var tile = map.getTile(x, y);

            // Iterate every element on the tile
            for (var i = 0; i < tile.numElements; i++) {
                var element = tile.getElement(i);

                // If the element is a footpath, set the broken flag to true
                if (element.type === 'footpath') {
                    element.isAdditionBroken = true;
                }
            }
        }
    }
}

var main = function() {
    // In JavaScript, the var keyword is used to define a new variable in the current closure. Functions
    // are the only closure in ES5, braces do not create new scope. You can think of var as an equivalent
    // of the local keyword from other scripting languages such as LUA.

    // If we do not use the var keyword then the variable acts as a global shared between all plugins and
    // the console. The following code allows the console and other plugins to use our functions.
    if (typeof samples === 'undefined') {
        samples = {};
    }
    samples.map_tools = {
        destroyAllFootpathItems: destroyAllFootpathItems
    };

    // Add a menu item under the map icon on the top toolbar
    ui.registerMenuItem("Destory all footpaths", function() {
        destroyAllFootpathItems();
    });
};

registerPlugin({
    name: 'Map Tools',
    version: '1.0',
    authors: ['OpenRCT2'],
    type: 'remote',
    main: main
});
