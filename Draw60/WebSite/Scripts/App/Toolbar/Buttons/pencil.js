function PencilButton(container) {
	this.container = container;
	var self = this;

	this.render = function () {
	    return Template.PencilButton().render();
	};

	this.bind = function() {
		self.container.find('#pencil').on("click", this.onClick);
	};

    this.onClick = function() {
        EventBus.dispatch("tool_selected", self.draw);
    };

    this.draw = function(context, inputManager) {
        context.beginPath();
        context.moveTo(inputManager.mouse.lastX, inputManager.mouse.lastY);
        context.lineTo(inputManager.mouse.X, inputManager.mouse.Y);
        context.lineCap = 'round';
        context.lineWidth = 15;
        context.stroke();
    };

    this.select = function() {
        self.onClick();
    };
}