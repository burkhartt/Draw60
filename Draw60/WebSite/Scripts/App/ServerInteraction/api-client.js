function ApiClient() {
	this.baseUrl = "http://localhost:56057";

	this.post = function(url, data, callback) {
		$.ajax({
			type: "POST",
			url: this.baseUrl + url,
			data: data,
			contentType: "application/json; charset=utf-8",
			dataType: "json",
		}).done(function(msg) {
			console.log(msg);
			callback(msg);
		}).error(function(err) {
		    console.log(err);
		}).always(function () {
		    console.log("complete");
		});;
	}
}