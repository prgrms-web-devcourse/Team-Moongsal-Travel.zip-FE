module.exports = {
  plugins: [
    [
      'postcss-preset-env',
      {
        browsers: '> 5% in KR, defaults, not IE < 11',
        // CSS Grid 활성화 [false, 'autoplace', 'no-autoplace']
        autoprefixer: { grid: 'autoplace' },
      },
    ],
  ],
};
