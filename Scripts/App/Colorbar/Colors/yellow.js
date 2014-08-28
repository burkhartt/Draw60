function YellowColor(container) {
	this.container = container;
	var self = this;

	this.render = function() {
		return self.container.append($("<div id='color-yellow' />"));
	};

	this.bind = function(callback) {
		self.container.find('#color-yellow').on("click", function(e) {
			callback();
		});
	};

	this.activate = function() {
		self.container.find($("#color-yellow").addClass("active"));
	};

	this.deactivate = function() {
		self.container.find($("#color-yellow").removeClass("active"));
	};

	this.draw = function(context, inputManager) {
		context.strokeStyle = 'yellow';
	}
}