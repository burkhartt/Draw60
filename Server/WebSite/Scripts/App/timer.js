function Timer(seconds, container) {
	this.originalSeconds = seconds;
	this.container = container;
	this.seconds = seconds;
	this.onFinish = null;
	var self = this;

	this.render = function() {
		this.container.html(this.seconds);
	}

	this.start = function(callback) {
		this.onFinish = callback;
		window.setInterval(function() { self.tick(); }, 1000);
	};

	this.tick = function() {		
		this.seconds--;		

		this.render();

		if (this.seconds == 0) {
			this.onFinish();
		}
	}

	this.reset = function() {
		this.seconds = this.originalSeconds;
		this.render();
	}
}