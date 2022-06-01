module.exports = (grunt) => {
    grunt.initConfig({
        sass: {
            development: {
            options: {
            },
            files: {
                'src/main.css': 'scss/main.scss'
            }
            },
    production: {
            options: {
            },
            files: {
                'src/main.css': 'scss/main.scss'
            }
        }
    },
    watch: {
            files: ['<%= sass.files >'],
            tasks: ['sass']
        }
    });   

    grunt.loadNpmTasks('grunt-contrib-sass');
                    grunt.loadNpmTasks('grunt-contrib-wat ch ');
                    grunt.registerTask('default', ['sas']);
                    grunt.registerTask('heroku: production', ' sass ');
    };