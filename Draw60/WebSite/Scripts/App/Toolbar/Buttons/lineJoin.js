function LineJoinButton(container) {
    this.container = container;
    var self = this;
    var isDrawing = false;
    var points = [];
    this.render = function () {
        return self.container.append($("<div id='line-join' />"));
    };

    this.bind = function (callback) {
        self.container.find('#line-join').on("click", function (e) {
            callback();
        });
        $("canvas").on("mousedown", function (e) {
            points = [];
            isDrawing = true;
            points.push({ x: e.offsetX, y: e.offsetY });
        });
        $("canvas").on("mouseup", function (e) {
            points.length = 0;
            isDrawing = false;
        });
    };

    this.activate = function () {
        self.container.find($("#line-join").addClass("active"));
    };

    this.deactivate = function () {
        self.container.find($("#line-join").removeClass("active"));
    };

    this.draw = function(context, inputManager, e) {
        if (!isDrawing) return;
        context.lineWidth = 1;
        points.push({ x: e.offsetX, y: e.offsetY });

        context.beginPath();
        context.moveTo(points[points.length - 2].x, points[points.length - 2].y);
        context.lineTo(points[points.length - 1].x, points[points.length - 1].y);
        context.stroke();

        for (var i = 0, len = points.length; i < len; i++) {
            dx = points[i].x - points[points.length - 1].x;
            dy = points[i].y - points[points.length - 1].y;
            d = dx * dx + dy * dy;

            if (d < 1000) {
                context.beginPath();
                context.strokeStyle = 'rgba(0,0,0,0.3)';
                context.moveTo(points[points.length - 1].x + (dx * 0.2), points[points.length - 1].y + (dy * 0.2));
                context.lineTo(points[i].x - (dx * 0.2), points[i].y - (dy * 0.2));
                context.stroke();
            }
        }
    };
}