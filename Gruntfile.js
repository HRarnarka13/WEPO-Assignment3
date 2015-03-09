module.exports = function ( grunt ) { 
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.initConfig({
		jshint: {
			src: ['client/js/**/*.js', '!client/js/dest/*.js'],
			gruntfile: ['Gruntfile.js'],
			options: {
				curly:  true,
				immed:  true,
				newcap: true,
				noarg:  true,
				sub:    true,
				boss:   true,
				eqnull: true,
				node:   true,
				undef:  true,
				globals: {
					_:       false,
					jQuery:  false,
					angular: false,
					moment:  false,
					console: false,
					$:       false,
					io:      false
				}
			}
		},
		uglify: {
			my_target: {
		      	files: {
		        	'client/js/dest/output.min.js': ['client/js/dest/built.js']
		      	}
		    }
		},
		concat: {
		    options: {
		    	separator: ';',
		    },
		    dist: {
				src: ['client/js/**/*.js', '!client/js/dest/*.js'],
		      	dest: 'client/js/dest/built.js',
		    },
		 }
	});
	grunt.registerTask('checkjs', ['jshint']);
	grunt.registerTask('minify', ['uglify']);
	grunt.registerTask('makeonefile', ['concat']);
	grunt.registerTask('makejs', ['concat', 'uglify']);
	grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
};