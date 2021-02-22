class Form {
    constructor() {

    }

    display() {
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(100, 20);

        var input = createInput("Name");
        input.position(100, 250);

        var button = createButton("Play");
        button.position(270, 270);

        var greeting = createElement("h3");

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var Name = input.value();
            playerCount += 1;
            player.update(Name);
            player.updateCount(playerCount);
            greeting.html("Hello "+Name);
            greeting.position(150, 250);
        });
        
    }
}