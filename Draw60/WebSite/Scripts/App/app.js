function App() {
	this.toolbar = new Toolbar($("#toolbar"));
  	this.colorbar = new Colorbar($("#colorbar"));
    this.canvas = null;
  	this.progressBar = new ProgressBar(100, $("#progress"));  	
  	this.session = new Session();
    this.game = new Game();
  	var self = this;

  	this.run = function () {
  	    $(document).ajaxStart(function () {
  	        $('#loading').show();
  	    }).ajaxStop(function () {
  	        $('#loading').hide();
  	    });

	    this.session.initialize(function (session) {	        
	        self.game.initialize(session, function () {
	            self.canvas = new Canvas($("#canvas"), self.toolbar, self.colorbar);
	            self.canvas.render(self.progressBar);
	            self.progressBar.render();
	            self.progressBar.start(function () { self.drawingComplete(); });
	        });			
		});	    
	};

	this.drawingComplete = function () {
	    self.canvas.stop();
	    self.game.save(self.session.userId);
	    self.progressBar.reset();
	    self.canvas.clear();
	};
}

