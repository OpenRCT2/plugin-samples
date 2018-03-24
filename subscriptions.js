// Sample script that adds demonstrates subscriptions to events

var main = function() {
    // We can not change the game state in the main function, therefore
    // we defer our logic to an initialisation routine that is called
    // from the start event.
    context.subscribe('plugin.start', function() {
        park.postMessage({
            type: "award",
            text: "{RED}subscriptions.js has been initialised!"
        });
    });

    // Create a new subscription for the day interval event
    var daySubscription =
        context.subscribe('interval.day', function() {
            // Give the player 10 units of currency each day
            park.cash += 100;

            // If the park rating falls below 400, cancel the subscription
            if (park.rating < 400) {
                daySubscription.dispose();
            }
        });
};

return {
    name: 'Subscriptions',
    version: '1.0',
    authors: ['Ted John'],
    type: 'default',
    main: main
};
