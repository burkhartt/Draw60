function Canvas(container, toolbar, colorbar) {
	this.canvas = $("<canvas></canvas>");   
	this.context = null;
	this.rectangle = null;
	this.height = 400;
	this.width = 800;
	this.container = container;
	this.inputManager = null;      	
	this.toolbar = toolbar;
    this.colorbar = colorbar;
    this.apiClient = new ApiClient();
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

	this.save = function() {
		var data = self.canvas[0].toDataURL("image/png");
		self.apiClient.post("http://localhost:3000/save", data, self.saveCallback);
    };

    this.saveCallback = function(response) {
		var img = new Image;
		img.onload = function() {
		  base.context.drawImage(img,0,0);
		};
		img.src = response;
    	console.log("DONE");
    };

    this.clear = function() {
		this.context.clearRect(0, 0, this.width, this.height);
    };
};