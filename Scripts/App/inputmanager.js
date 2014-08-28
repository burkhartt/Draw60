function InputManager(container) {
	this.container = container;
	this.mouse = new Mouse();
	var self = this;

	this.bind = function() {      		
		this.container.on("mousedown", function(e) {
			self.mouse.mouseDown();
		});

		this.container.on("mouseup", function(e) {
			self.mouse.mouseUp();
		});

		this.container.on("mousemove", function(e) {      		
			self.mouse.updatePosition(e, self.container[0]);
		});

		this.container.on("mouseout", function(e) {
			self.mouse.mouseOut();
		});
	};
}