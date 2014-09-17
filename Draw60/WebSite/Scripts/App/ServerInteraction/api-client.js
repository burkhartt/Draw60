function ApiClient() {
	this.baseUrl = "http://localhost:56057";

	this.post = function (url, data, callback) {
	    Pace.start();
        $.ajax({
            type: "POST",
            url: this.baseUrl + url,
            data: data,
            contentType: "application/json",
            dataType: "json",
        }).done(function(msg) {
            callback(msg);
        }).error(function(err) {
            console.log(err);
        }).always(function() {
            Pace.stop();
        });
    };
}