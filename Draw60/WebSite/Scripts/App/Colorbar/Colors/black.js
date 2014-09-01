function BlackColor(container) {
	this.container = container;
	var self = this;

	this.render = function() {
		return self.container.append($("<div id='color-black' />"));
	};

	this.bind = function(callback) {
		self.container.find('#color-black').on("click", function(e) {
			callback();
		});
	};

	this.activate = function() {
		self.container.find($("#color-black").addClass("active"));
	};

	this.deactivate = function() {
		self.container.find($("#color-black").removeClass("active"));
	};

    this.draw = function(context, inputManager) {
        context.strokeStyle = '#000';
        context.shadowColor = 'rgb(0, 0, 0)';
    };
}