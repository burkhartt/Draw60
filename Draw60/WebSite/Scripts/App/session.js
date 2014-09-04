function Session() {
    this.apiClient = new ApiClient();
    this.userId = $.cookie('userId');
    var self = this;

    this.initialize = function (callback) {
        if (this.userId) {
            callback(self);
            return;
        }

        this.apiClient.post("/user/create", {}, function (user) {
            $.cookie('userId', user.Id);
            self.userId = user.Id;
            callback(self);
            return;
        });
    };
}