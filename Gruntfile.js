module.exports = function(grunt) {
	grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        nodewebkit: {
            options: {
                build_dir: './build',
                mac: true,
                win: true,
                linux32: false,
                linux64: false
            },
            src: ['./www/**/*']
        }
	})

	grunt.loadNpmTasks('grunt-node-webkit-builder');
	grunt.registerTask('default', ['nodewebkit']);

}

// vim: set nolist ts=4 sw=4 expandtab :
