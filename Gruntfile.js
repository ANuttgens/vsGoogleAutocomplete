module.exports = function(grunt) {

    // ������
    grunt.initConfig({
	    options: {
            separator: ';'
        },
        // ���������
        concat: {			
			vsGoogleAutocomplete: {
			    src: [
				    'src/vsModule.js',
					'src/vsGooglePlaceUtility.js',
					'src/vsGoogleAutocompleteDirective.js'
				],
                dest: 'dist/vs-google-autocomplete.js'
			},
			vsValidator: {
			    src: [
				    'src/validator/vsValidatorsInjector.js',
					'src/validator/vsValidator.js',
					'src/validator/vsGoogleValidatorDirective.js',
					'src/validator/validators/vsGooglePlaceValidator.js',
					'src/validator/validators/vsStreetAddressValidator.js'
				],
                dest: 'dist/vs-google-validator.js'
			}
        },
        // �������
        uglify: {
            vsGoogleAutocomplete: {
                files: {
                    'dist/vs-google-autocomplete.min.js': '<%= concat.vsGoogleAutocomplete.dest %>'
                }
            },
			vsValidator: {
                files: {
					'dist/vs-google-validator.min.js': '<%= concat.vsValidator.dest %>'
                }
            }
        }
    });

    // �������� ��������, ������������� � ������� npm install
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // ������ �� ���������
	grunt.registerTask('build-directive', ['concat:vsGoogleAutocomplete', 'uglify:vsGoogleAutocomplete']);
	grunt.registerTask('build-validator', ['concat:vsValidator', 'uglify:vsValidator']);
	grunt.registerTask('build', ['concat', 'uglify']);
};