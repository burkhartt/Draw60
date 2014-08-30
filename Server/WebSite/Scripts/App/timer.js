function Timer(drawCount, container) {
    this.maxDrawCount = drawCount;
	this.container = container;
	this.drawCount = 0;
	this.onFinish = null;
	var self = this;

	this.render = function () {
	    this.container.find("#timer-progress").css("height", this.getPercentage());
	};

    this.getPercentage = function() {
        return (this.maxDrawCount - this.drawCount) / this.maxDrawCount * 100 + "%";
    };

	this.start = function(callback) {
		this.onFinish = callback;
	};

	this.draw = function () {
	    this.drawCount++;
	    this.render();
	    if (this.drawCount >= this.maxDrawCount) {
	        this.onFinish();
	    }
	};

    this.reset = function() {
        this.drawCount = 0;
        this.render();
    };
}