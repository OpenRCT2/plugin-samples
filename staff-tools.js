// Sample script that adds functions for manipulating staff

var hireNewHandyman = function () {

    // These are arguments to the game action.
    const args = {
        autoPosition: true,
        staffType: 0, // 0: handyman, 1: mechanic, 2: security, 3: entertainer
        entertainerType: 0,
        staffOrders: (1 << 0) | (1 << 2) // Set the handyman to sweep and empty bins. See STAFF_ORDERS in openrct2/entity/Staff.h
    };

    // This function receives the result of the game action.
    const callback = function (result) {
        if (result.error === 0) {
            console.log("Hired a new handyman with ID " + result.peep + ".");
        } else {
            console.log("Failed to hire a new handyman!");
        }
    };

    context.executeAction("staffhire", args, callback);
}

var main = function () {
    // Add menu item under the map icon on the top toolbar
    ui.registerMenuItem("Hire new handyman", hireNewHandyman);
};

registerPlugin({
    name: 'Staff Tools',
    version: '1.0',
    authors: ['OpenRCT2'],
    type: 'remote',
    main: main
});
