function Canvas(game, session, container, toolbar, colorbar) {
    this.game = game;
    this.session = session;
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
        this.toolbar.draw(this.context, this.inputManager, e);
	    this.timer.draw();
	};

	this.shouldDraw = function() {
		return this.inputManager.mouse.isDown;
	};

	this.render = function (timer) {
	    self.timer = timer;
	    self.canvas.attr({ 'height': self.height, 'width': self.width });
		self.container.html(this.canvas);
		$(self.canvas).on("mousemove", function (e) {
			self.draw(e);
		});      		
		self.context = self.canvas[0].getContext('2d');
		self.inputManager = new InputManager(self.canvas);
		self.inputManager.bind();
		
        self.toolbar.render();
        self.colorbar.render();
	};      	

	this.save = function() {
	    self.game.setDrawing(self.canvas[0].toDataURL("image/png"));
	    self.apiClient.post("/user/" + session.userId + "/game/" + self.game.id + "/save", JSON.stringify(self.game), self.saveCallback);
    };

	this.saveCallback = function (response) {
	    self.clear();

	    if (response.Drawing) {
	        var img = $('<img src="' + response.Drawing + '" />').get(0);
	        self.context.drawImage(img, 0, 0);
	    }		
    };

    this.clear = function() {
		this.context.clearRect(0, 0, this.width, this.height);
    };
};