// qwixx.games.hales.app is where the app used to live. Requests there move to
// the same path under games.hales.app/qwixx; every other request is the app.
const OLD_HOST = "qwixx.games.hales.app"
const NEW_URL = "https://games.hales.app/qwixx"

export default {
    fetch(request, env) {
        const url = new URL(request.url)
        if (url.hostname === OLD_HOST) {
            return Response.redirect(NEW_URL + url.pathname + url.search, 301)
        }
        return env.ASSETS.fetch(request)
    },
}
