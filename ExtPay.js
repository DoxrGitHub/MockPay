var ExtPay = (function() {

	function fetch_fake_user() {
		return {
			paid: true,
			paidAt: new Date(),
			installedAt: new Date(), 
			trialStartedAt: null,
			email: "master@bait.com",
			subscriptionStatus: "active",
			subscriptionCancelAt: new Date()
		}
	}

	function background_nothing() {
		// lol what does it even do
	}

	return {
		getUser: function() {
            return Promise.resolve(fetch_fake_user());
		},
		startBackground: function() {
			return background_nothing()
		},
		openPaymentPage: function() {
			return window.open("https://example.com")
		},
		openTrialPage: function() {
			return window.open("https://example.com")
		},
		openLoginPage: function() {
			return window.open("https://example.com")
		},
	}
})