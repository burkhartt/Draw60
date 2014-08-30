function EraserButton(container) {
	this.container = container;
	var self = this;

	this.render = function() {
		return self.container.append($("<div id='eraser' />"));
	};

	this.bind = function(callback) {
		self.container.find('#eraser').on("click", function(e) {
			callback();
		});
	};

	this.activate = function() {
		self.container.find($("#eraser").addClass("active"));
	};

	this.deactivate = function() {
		self.container.find($("#eraser").removeClass("active"));
	};

	this.draw = function(context, inputManager) {
		context.beginPath();
		context.strokeStyle = '#ffffff';
      	context.moveTo(inputManager.mouse.lastX, inputManager.mouse.lastY);
      	context.lineTo(inputManager.mouse.X, inputManager.mouse.Y);
      	context.lineWidth = 50;
      	context.stroke();
	}
}