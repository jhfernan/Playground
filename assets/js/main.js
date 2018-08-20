// Our Javascript page
var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello from Mike and Jon',
		counter: 0,
		form: {}
	},
	methods: {
		updateMessage () {
			this.message = this.form.message
		}
	}
})
