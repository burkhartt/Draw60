function RedColor(container) {
	this.container = container;
	var self = this;

	this.render = function() {
		return self.container.append($("<div id='color-red' />"));
	};

	this.bind = function(callback) {
		self.container.find('#color-red').on("click", function(e) {
			callback();
		});
	};

	this.activate = function() {
		self.container.find($("#color-red").addClass("active"));
	};

	this.deactivate = function() {
		self.container.find($("#color-red").removeClass("active"));
	};

	this.draw = function(context, inputManager) {
	    context.strokeStyle = 'red';
	    context.shadowColor = 'rgb(0, 0, 0)';
	}
}