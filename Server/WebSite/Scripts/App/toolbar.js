function Toolbar(container) {
	this.container = container;
	this.buttons = [new PencilButton(this.container), new EraserButton(this.container), new LineJoinButton(this.container)];
	this.activeButton = this.buttons[0];
	var self = this;

	this.render = function() {
		$.each(this.buttons, function(i, button) {   
			button.render();
			button.bind(function() {
				self.activeButton.deactivate();
				self.activeButton = button;
				self.activeButton.activate();
			});
		});
	};

	this.draw = function(context, inputManager, event) {
	    this.activeButton.draw(context, inputManager, event);
	};
}