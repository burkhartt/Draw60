function App() {
	this.toolbar = new Toolbar($("#toolbar"));
  	this.colorbar = new Colorbar($("#colorbar"));
    this.canvas = null;
  	this.timer = new Timer(100, $("#timer"));  	
  	this.session = new Session();
    this.game = new Game();
  	var self = this;

	this.run = function() {
	    this.session.initialize(function (session) {	        
	        self.game.initialize(session, function () {
	            self.canvas = new Canvas(self.game, session, $("#container"), self.toolbar, self.colorbar);
	            self.canvas.render(self.timer);
	            self.timer.render();
	            self.timer.start(function () { self.drawingComplete(); });
	        });			
		});	    
	};

	this.drawingComplete = function () {
	    self.canvas.save();
	    self.timer.reset();
	    self.canvas.clear();
	};
}

function Session() {
	this.apiClient = new ApiClient();
	this.userId = $.cookie('userId');
	var self = this;

	this.initialize = function(callback) {
		if (this.userId) {
		    callback(self);
		    return;
		}

		this.apiClient.post("/user/create", {}, function(user) {
			$.cookie('userId', user.Id);
			self.userId = user.Id;
			callback(self);
		    return;
		});
	};
}

function Game() {
    this.apiClient = new ApiClient();
    this.id = "";
    this.drawing = "";
    var self = this;

    this.initialize = function(session, callback) {
        this.apiClient.post("/user/" + session.userId + "/game/create", {}, function (game) {
            self.id = game.Id;
            self.drawing = game.Drawing;
            callback();
        });
    };

    this.setDrawing = function(drawing) {
        self.drawing = drawing;
    };
}