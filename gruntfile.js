module.exports = function(grunt) {


grunt.initConfig({
  concat: {
    js: {
      src: ['js/Vendor/1.js', 'js/Vendor/2.js', 'js/main.js'],
      dest: 'dist/built.js',
    },
    css: {
      src: ['css/Vendor/1.css', 'css/Vendor/2.css', 'css/main.css'],
      dest: 'dist/style.css',
    },
  },
  watch: {
  js: {
    files: ['js/**/*.js','js/*.js'],
    tasks: ['concat:js'],
  },
  css: {
    files: ['css/**/*.css','css/*.css'],
    tasks: ['concat:css'],
  },
},
});

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.registerTask('default',['concat','watch']);
};