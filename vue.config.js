module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/Portfolio" : "/",
  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
}
