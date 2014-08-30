function Mouse() {
	this.lastX = null;
	this.lastY = null;
	this.X = null;
	this.Y = null;
	this.isDown = false;
	var self = this;

	this.updatePosition = function(e, canvas) {
		var rectangle = canvas.getBoundingClientRect();
		this.lastX = this.X;
		this.lastY = this.Y;
		this.X = e.clientX - rectangle.left;
		this.Y = e.clientY - rectangle.top;
	}

	this.mouseDown = function() {
		this.isDown = true;
	}

	this.mouseUp = function() {
		this.isDown = false;
	}

	this.mouseOut = function() {
		this.isDown = false;
	}
}