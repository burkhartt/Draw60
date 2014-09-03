function ProgressBar(actionCount, container) {
    this.maxActionCount = actionCount;
	this.container = container;
	this.actionCount = 0;
	this.onFinish = null;
	var self = this;

	this.render = function () {
	    this.container.find("#progress-bar").css("width", this.getPercentage());
	};

    this.getPercentage = function() {
        return (this.maxActionCount - this.actionCount) / this.maxActionCount * 100 + "%";
    };

	this.start = function(callback) {
		this.onFinish = callback;
	};

	this.actionPerformed = function () {
	    this.actionCount++;
	    this.render();
	    if (this.actionCount >= this.maxActionCount) {
	        this.onFinish();
	    }
	};

    this.reset = function() {
        this.actionCount = 0;
        this.render();
    };
}