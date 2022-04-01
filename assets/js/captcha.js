initGeetest(
	{
		product: 'float',
	},
	function (captchaObj) {
		captchaObj.appendTo('#captchaBox') //Embed CAPTCHA button into "captchaBox" of the host page
		captchaObj
			.onReady(function () {
				//your code
			})
			.onSuccess(function () {
				//your code
			})
			.onError(function () {
				//your code
			})
	}
)
