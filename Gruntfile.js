module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bake: {
      build: {  
        files: {  
          "index.html": "app/index.html",
          "subscription.html": "app/subscription.html",
          "about.html": "app/about.html",
          "janaa.html": "app/janaa.html",
          "rene_prou.html": "app/rene_prou.html",
          "performdoc.html": "app/performdoc.html",
          "overview.html": "app/overview.html",
          "consultancy.html": "app/consultancy.html",
        }
      },
    },
  });
  grunt.loadNpmTasks( "grunt-bake" );
  grunt.registerTask('default', ['bake']);
};
