function Colorbar(container) {
	this.container = container;
    this.colors = ["black", "red", "blue", "yellow", "green", "white"];
    var self = this;    

	this.render = function () {
	    var colorBar = Template.Colorbar().render(self.colors);
	    self.container.html(colorBar);
	    self.bind();
	};

	this.onColorSet = function (color) {
	    console.log("HI");
        self.container.find('#selected-color').css("color", color.target);
    };

	this.bind = function () {
	    EventBus.addEventListener("color_set", self.onColorSet);
        self.colors.forEach(function(color) {
            self.container.find("#color-" + color).on("click", function (e) {
                EventBus.dispatch("color_set", color);
            });
        });
    };
}