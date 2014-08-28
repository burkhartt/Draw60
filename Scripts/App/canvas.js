function Canvas(container, toolbar, colorbar) {
	this.canvas = $("<canvas></canvas>");   
	this.context = null;
	this.rectangle = null;
	this.height = 600;
	this.width = 1000;
	this.container = container;
	this.inputManager = null;      	
	this.toolbar = toolbar;
      this.colorbar = colorbar;
	var self = this;

	this.draw = function(e) {
		if (!this.shouldDraw()){
			return;
		}
            this.colorbar.draw(this.context, this.inputManager);
		this.toolbar.draw(this.context, this.inputManager);
	};

	this.shouldDraw = function() {
		return this.inputManager.mouse.isDown;
	};

	this.render = function() {
		this.canvas.attr({'height' : this.height, 'width' : this.width});
		this.container.html(this.canvas);
		$(this.canvas).on("mousemove", function(e) {
			self.draw(e);
		});      		
		this.context = this.canvas[0].getContext('2d');
		this.inputManager = new InputManager(this.canvas);
		this.inputManager.bind();
		
            this.toolbar.render();
            this.colorbar.render();
	};      	
};