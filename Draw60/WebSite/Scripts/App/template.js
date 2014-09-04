function Template(template) {
    this.template = template;

    this.render = function(model) {
        return this.template(model);
    };
}

Template.Colorbar = function() {
    var templateScript = $("#colorBar").html();
    var template = Handlebars.compile(templateScript);
    return new Template(template);
};

Template.PencilButton = function() {
    var templateScript = $("#pencilButton").html();
    var template = Handlebars.compile(templateScript);
    return new Template(template);
};

Template.Toolbar = function() {
    var templateScript = $("#toolbarTemplate").html();
    var template = Handlebars.compile(templateScript);
    return new Template(template);
};

Template.EraserButton = function () {
    var templateScript = $("#eraserButton").html();
    var template = Handlebars.compile(templateScript);
    return new Template(template);
};