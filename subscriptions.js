// Sample script that adds demonstrates subscriptions to events

var main = function() {
    // This message will appear when the script is loaded but will error
    // in multiplayer as the game state is not mutable in the main function.
    try {
        park.postMessage({
            type: "award",
            text: "subscriptions.js has been initialised!"
        });
    } catch (error) {
        console.log(error);
    }

    // Create a new subscription for the day interval event
    var daySubscription =
        context.subscribe('interval.day', function() {
            // Events such as this can modify the game state as they
            // will for every client on the same tick.
            // Do not use any per-client logic here!

            // Give the player 10 units of currency each day
            park.cash += 100;

            // If the park rating falls below 400, cancel the subscription
            if (park.rating < 400) {
                daySubscription.dispose();
            }
        });
};

registerPlugin({
    name: 'Subscriptions',
    version: '1.0',
    authors: ['Ted John'],
    type: 'remote',
    main: main
});
