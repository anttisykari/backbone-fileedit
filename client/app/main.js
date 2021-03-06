require.config({
	baseUrl: 'app',

	paths: {
		jquery: '../components/jquery/jquery.min',
		modernizr: '../components/modernizr/modernizr',
		underscore: '../components/underscore/underscore',
		backbone: '../components/backbone/backbone',
		codemirror: '../components/codemirror/lib/codemirror'
	},

	shim: {
		'underscore': {
			exports: '_'
		},

		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},

		'codemirror': {
			exports: 'CodeMirror'
		}
	}
});

require(
	['jquery', 'modernizr', 'underscore', 'backbone',
		'models/directoryentry',
		'collections/directory',
		'views/filecontentview', 'views/directoryview',
		'router',
		'app'
	],
	function($, modernizr, _, Backbone,
		DirectoryEntry,
		Directory,
		FileContentView, DirectoryView,
		Router,
		app) {

	var root = new Directory({ path: '/' });
	app.directoryView = new DirectoryView({ model: root, $parent: $('#root') });
	app.directoryView.show();

	app.fileContentView = new FileContentView();
	app.router = new Router();

	app.once('initialLoad', function() {
		Backbone.history.start();
	});
});

