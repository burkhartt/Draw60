function App() {
	this.toolbar = new Toolbar($("#toolbar"));
  	this.colorbar = new Colorbar($("#colorbar"));
  	this.canvas = new Canvas($("#container"), this.toolbar, this.colorbar);
  	this.timer = new Timer(60, $("#timer"));  	
  	var self = this;

	this.run = function() {
		this.canvas.render();
	  	this.timer.render();
	  	this.timer.start(function() { self.drawingComplete(); });
	};

	this.drawingComplete = function() {
		this.canvas.save();
		this.timer.reset();
		this.canvas.clear();
	}
}