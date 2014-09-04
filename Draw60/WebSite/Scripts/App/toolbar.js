function Toolbar(container) {
	this.container = container;
	this.buttons = [new PencilButton(this.container), new LineJoinButton(this.container)];
	var self = this;

	this.render = function () {
	    var template = $(Template.Toolbar().render());
	    var buttonHtml = "";
		$.each(this.buttons, function(i, button) {   
			buttonHtml += button.render();			
		});
		template.find("#tools").html(buttonHtml);
		self.container.html(template.html());
	    
		$.each(this.buttons, function (i, button) {
		    button.bind();
		});

	    self.buttons[0].select();
	};	
}