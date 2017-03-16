/*
  [ + AUTH.JS + ]

  + entry point for the authentication
  + how to sign people in.
*/

// export a deafult 'AUTH' object with these general functions (can be swapped later)
export default {
    /* LOGIN */
    login (email, pass, cb) {
        // 0.
        cb = arguments[arguments.length - 1]
        if (localStorage.token) {
            if (cb) cb(true)
            this.onChange(true)
            return
        }

        // 1.
        pretendRequest(email, pass, (res) => {
            if (res.authenticated) {
                localStorage.token = res.token
                if (cb) cb(true)
                this.onChange(true)
            } else {
                if (cb) cb(false)
                this.onChange(false)
            }
        })
    },

    /* GET CREDS */
    getToken () {
        return localStorage.token
    },

    /* LOGOUT */
    logout (cb) {
        delete localStorage.token
        if (cb) cb()
        this.onChange(false)
    },

    /* CHECK IF LOGGED IN */
    loggedIn () {
        return !!localStorage.token
    },

    /* DO SOMETHING ON LOGIN STATUS CHANGE (notify,alert,...etc) */
    onChange () {}
}

// Helper Functions
function pretendRequest (email, pass, cb) {
    setTimeout(() => {
        if (email === 'joe@example.com' && pass === 'password1') {
            cb({
                authenticated: true,
                token: Math.random().toString(36).substring(7)
            })
        } else {
            cb({ authenticated: false })
        }
    }, 0) // end the timeout
}
