function Game() {
    this.apiClient = new ApiClient();
    this.id = "";
    this.drawing = "";
    var self = this;

    this.initialize = function (session, callback) {
        this.apiClient.post("/user/" + session.userId + "/game/create", {}, function (game) {
            self.id = game.Id;
            self.drawing = game.Drawing;
            callback();
        });
    };
    
    this.save = function (userId, img) {
        EventBus.dispatch("game_saved");
        self.drawing = img;
        self.apiClient.post("/user/" + userId + "/game/" + self.id + "/save", JSON.stringify({ Drawing: encodeURIComponent(img) }), self.saveCallback);
    };

    this.saveCallback = function (response) {
        self.id = response.Id;
        self.drawing = response.Drawing;
        EventBus.dispatch("game_loaded", self);
    };
}