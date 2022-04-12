function Validator(formSelector) {
	const getParent = (element, selector) => {
		while (element.parentElement) {
			if (element.parentElement.matches(selector)) {
				return element.parentElement
			}

			element = element.parentElement
		}
	}

	var formRules = {}
	var validatorRules = {
		required: function (value) {
			return value ? undefined : 'Please enter this field!'
		},
		email: function (value) {
			const regex =
				/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
			return regex.test(value)
				? undefined
				: 'Please enter a valid email address!'
		},
		min: function (min) {
			return function (value) {
				return value && value.length >= min
					? undefined
					: `Please enter at least ${min} characters!`
			}
		},
		match: function (value) {
			return value === document.querySelector('#password').value
				? undefined
				: 'Password does not match!'
		},
	}

	var formElement = document.querySelector(formSelector)

	if (formElement) {
		var inputs = formElement.querySelectorAll('[name][rules]')

		for (var input of inputs) {
			var rules = input.getAttribute('rules').split('|')
			for (var rule of rules) {
				var ruleInfo
				var isRuleHasValue = rule.includes(':')

				if (rule.includes(':')) {
					ruleInfo = rule.split(':')

					rule = ruleInfo[0]
				}

				var ruleFunc = validatorRules[rule]

				if (isRuleHasValue) {
					ruleFunc = ruleFunc(ruleInfo[1])
				}

				if (Array.isArray(formRules[input.name])) {
					formRules[input.name].push(ruleFunc)
				} else {
					formRules[input.name] = [ruleFunc]
				}
			}

			input.onblur = handleValidate
			input.oninput = handleClearError
		}

		// function validate
		function handleValidate(event) {
			var rules = formRules[event.target.name]
			var errorMessage

			rules.some(function (rule) {
				errorMessage = rule(event.target.value)
				return errorMessage
			})

			if (errorMessage) {
				var formGroup = getParent(event.target, '.form-group')

				if (formGroup) {
					formGroup.classList.add('invalid')
					var formMessage = formGroup.querySelector('.form-message')
					if (formMessage) {
						formMessage.innerHTML = errorMessage
					}
				}
			}

			return !errorMessage
		}

		function handleClearError(event) {
			var formGroup = getParent(event.target, '.form-group')
			if (formGroup.classList.contains('invalid')) {
				formGroup.classList.remove('invalid')
				var formMessage = formGroup.querySelector('.form-message')
				if (formMessage) {
					formMessage.innerHTML = ''
				}
			}
		}
	}

	// handle submit form
	if (formElement) {
		formElement.onsubmit = function (event) {
			event.preventDefault()

			var inputs = formElement.querySelectorAll('[name][rules]')
			var isValid = true

			for (var input of inputs) {
				if (!handleValidate({ target: input })) {
					isValid = false
				}
			}

			if (isValid) {
				formElement.submit()
			}
		}
	}
}

Validator('#login-form')
Validator('#register-form')
Validator('#forgot-form')
