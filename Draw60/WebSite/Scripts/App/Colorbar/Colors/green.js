function GreenColor(container) {
	this.container = container;
	var self = this;

	this.render = function() {
		return self.container.append($("<div id='color-green' />"));
	};

	this.bind = function(callback) {
		self.container.find('#color-green').on("click", function(e) {
			callback();
		});
	};

	this.activate = function() {
		self.container.find($("#color-green").addClass("active"));
	};

	this.deactivate = function() {
		self.container.find($("#color-green").removeClass("active"));
	};

	this.draw = function(context, inputManager) {
	    context.strokeStyle = 'green';
	    context.shadowColor = 'rgb(0, 0, 0)';
	}
}