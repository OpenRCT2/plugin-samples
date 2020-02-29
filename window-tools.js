// Sample script that adds functions for managing the player's windows

var organiseWindows = function() {
    var left = 0;
    var top = 28;
    var bottom = 0;
    for (var i = 0; i < ui.windows; i++)
    {
        var window = ui.getWindow(i);

        // Ignore sticky windows (e.g. main window and toolbars)
        if (!window.isSticky) {
            window.x = left;
            window.y = top;
            left += window.width;
            bottom = Math.max(bottom, top + window.height);
            if (left >= ui.width)
            {
                left = 0;
                top = bottom;
            }
        }
    }
};

var main = function() {
    // Add a menu item under the map icon on the top toolbar
    context.registerMenuItem("Organise windows", function() {
        organiseWindows();
    });

    // Register a new intent that calls our function. The player can invoke the intent via the UI or using
    // a keyboard shortcut which the player can configure. Make sure your intent has a unique key that will
    // not clash with any other plugin. Prefixing the key with your plugin name is encouraged.
    context.registerIntent({
        key: 'window-tools.organisewindows',
        title: 'Organises all opened windows',
        shortcut: 'CTRL+SHIFT+O',
        action: organiseWindows
    });
};

registerPlugin({
    name: 'Window Tools',
    version: '1.0',
    authors: ['OpenRCT2'],

    // Our script does not affect the game state so we use the client type which
    // allows players to use the plugin independently from the multiplayer server.
    type: 'local',

    main: main
});
