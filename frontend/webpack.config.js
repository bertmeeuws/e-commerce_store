module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              fallback: require.resolve("responsive-loader"),
              quality: 85,
            },
          },
        ],
      },
    ],
  },
};
