module.exports = function ( grunt ) { 
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-karma');
	grunt.initConfig({
		jshint: {
			src: ['src/js/**/*.js', '!src/js/dest/*.js'],
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
		        	'src/js/dest/output.min.js': ['src/js/dest/built.js']
		      	}
		    }
		},
		concat: {
		    options: {
		    	separator: ';',
		    },
		    dist: {
				src: ['src/js/**/*.js', '!src/js/dest/*.js'],
		      	dest: 'src/js/dest/built.js',
			},
		},
		karma: {
		 	unit: {
		 		options: {
		 			files: ['test/**/*.js']
		 		}
		 	}
		}
	});
	grunt.registerTask('checkjs', ['jshint']);
	grunt.registerTask('minify', ['uglify']);
	grunt.registerTask('makeonefile', ['concat']);
	grunt.registerTask('makejs', ['concat', 'uglify']);
	grunt.registerTask('test', ['karma']);
	grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
};