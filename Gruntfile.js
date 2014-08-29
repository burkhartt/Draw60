module.exports = function(grunt) {
  grunt.initConfig({
    express: {
      options: {
        port: 3000
      },
      dev: {
        options: {
          script: 'Server/server.js'
        }
      },      
    },
    watch: {
      express: {
        files:  [ '**/*.js' ],
        tasks:  [ 'express:dev' ],
        options: {
          spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');    

  grunt.registerTask('server', [ 'express:dev', 'watch' ]);
}