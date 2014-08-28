function PencilButton(container) {
	this.container = container;
	var self = this;

	this.render = function() {
		return self.container.append($("<div id='pencil' />"));
	};

	this.bind = function(callback) {
		self.container.find('#pencil').on("click", function(e) {
			callback();
		});
	};

	this.activate = function() {
		self.container.find($("#pencil").addClass("active"));
	};

	this.deactivate = function() {
		self.container.find($("#pencil").removeClass("active"));
	};

	this.draw = function(context, inputManager) {
		context.beginPath();
		context.strokeStyle = '#000000';
      	context.moveTo(inputManager.mouse.lastX, inputManager.mouse.lastY);
      	context.lineTo(inputManager.mouse.X, inputManager.mouse.Y);
      	context.lineWidth = 15;
      	context.stroke();	      	
	}
}