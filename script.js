(function(win){
	'use strict';
	// Choose branch based on query string
	var query = win.location.search;
	var data;
	if (query) {
		var branch = query.replace("?", "");
	} else {
		var branch = "master";
	}

	// Load readme content
	function getData() {
		var url = 'https://rawgit.com/pragmaticivan/guia-do-trabalho-remoto/'+branch+'/README.md';
		var ajax = new XMLHttpRequest();
		ajax.open('GET', url);
		ajax.send();
		ajax.addEventListener('readystatechange', handleRequest, false);
	}

	function handleRequest() {
		if(isRequestOk(this)) {
			data = this.responseText;
			var converter = new Markdown.Converter();
			var $container = document.querySelector('.container');
			$container.innerHTML = converter.makeHtml(data);
		}
	}

	function isRequestOk(ajaxGet) {
		return ajaxGet.readyState === 4;
	}

	getData();
}(window));
