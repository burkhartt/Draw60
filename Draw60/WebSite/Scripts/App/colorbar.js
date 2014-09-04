function Colorbar(container) {
	this.container = container;
    this.colors = ["black", "red", "blue", "yellow", "green", "white"];
	var self = this;

	this.render = function () {
	    var colorBar = Template.Colorbar().render(self.colors);
	    self.container.html(colorBar);
	    self.bind();
	};

    this.bind = function() {
        self.colors.forEach(function(color) {
            self.container.find("#color-" + color).on("click", function (e) {
                EventBus.dispatch("color_set", color);
            });
        });
    };
}