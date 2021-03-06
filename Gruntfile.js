module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bake: {
      build: {  
        files: {  
          "index.html": "app/index.html",
          "about.html": "app/about.html",
          "janaa.html": "app/janaa.html",
          "rene_prou.html": "app/rene_prou.html",
          "performdoc.html": "app/performdoc.html",
        }
      },
    },
  });
  grunt.loadNpmTasks( "grunt-bake" );
  grunt.registerTask('default', ['bake']);
};
