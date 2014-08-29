function ApiClient() {
	this.post = function(url, data, callback) {
		$.ajax({
			type: "POST",
			url: url,
			contentType: "application/json",
			data: data
		}).done(function(msg) {
			console.log(msg);
			callback(msg);
		}).always(function() {
		    console.log("complete");
		});;
	}
}