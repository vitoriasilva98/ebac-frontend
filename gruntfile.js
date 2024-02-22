module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        less: {
            development: {
                files: {
                    'main.css': 'main.less'
                }
            }, production: {
                options: {
                    compress: true
                },
                files: {
                    'main.min.css': 'main.less'
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'main2.css': 'main.scss'
                }
            }
        }
    });

    // Tarefa assincrona
    grunt.registerTask('olaGrunt', function () {
        const done = this.async();
        setTimeout(function () {
            console.log("Olá Grunt");
            done();
        }, 3000);
        console.log("olá Grunt");
    });

    // config do LESS
    grunt.loadNpmTasks('grunt-contrib-less');

    // config do SASS
    grunt.loadNpmTasks('grunt-contrib-sass');


    // função padrão
    grunt.registerTask('default', ['less', 'sass']);

}