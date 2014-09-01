function BlueColor(container) {
	this.container = container;
	var self = this;

	this.render = function() {
		return self.container.append($("<div id='color-blue' />"));
	};

	this.bind = function(callback) {
		self.container.find('#color-blue').on("click", function(e) {
			callback();
		});
	};

	this.activate = function() {
		self.container.find($("#color-blue").addClass("active"));
	};

	this.deactivate = function() {
		self.container.find($("#color-blue").removeClass("active"));
	};

	this.draw = function(context, inputManager) {
	    context.strokeStyle = 'blue';
	    context.shadowColor = 'rgb(0, 0, 0)';
	}
}