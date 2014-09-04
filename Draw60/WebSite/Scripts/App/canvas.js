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
    this.isActive = true;
    this.drawFunc = null;
    var self = this;    

    this.eventRegistration = function() {
        EventBus.addEventListener("game_save", self.onGameSave);
        EventBus.addEventListener("game_loaded", self.onGameLoaded);
        EventBus.addEventListener("color_set", self.onColorSet);
        EventBus.addEventListener("tool_selected", self.onToolSelected);
    };

    this.onGameSave = function() {
        self.isActive = false;
    };

    this.onGameLoaded = function(game) {
        var img = $('<img src="' + game.Drawing + '" />').get(0);
        self.context.drawImage(img, 0, 0);
        self.isActive = true;
    };

    this.onColorSet = function (color) {
        self.context.strokeStyle = color.target;
    };

    this.onToolSelected = function (func) {        
        self.drawFunc = func.target;        
    };

	this.draw = function(e) {
		if (!this.shouldDraw()){
			return;
		}
    
		this.drawFunc(self.context, self.inputManager);
        this.progressBar.actionPerformed();
	};

	this.shouldDraw = function () {
	    if (!self.isActive) {
	        return;
	    }
		return this.inputManager.mouse.isDown;
	};

	this.render = function (progressBar) {
	    self.progressBar = progressBar;
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

    this.getImage = function() {
        return self.canvas[0].toDataURL("image/png");
    };	

    this.stop = function() {
        self.isActive = false;
    };

    this.clear = function() {
		this.context.clearRect(0, 0, this.width, this.height);
    };
    
    this.eventRegistration();
};