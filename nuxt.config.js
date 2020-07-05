export default {
  modules: ["@nuxtjs/device"],
  components: true,
  plugins: [{ src: "~/plugins/vue-lazyload.js" }],
  target: "static",
};
