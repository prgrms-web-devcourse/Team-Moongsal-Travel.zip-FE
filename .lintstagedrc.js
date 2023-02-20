module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

  // Lint & Prettify TS and JS files
  '**/*.(ts|tsx)': (filenames) => {
    return [
      `yarn eslint --fix ${filenames.join(' ')}`,
      `yarn prettier --write ${filenames.join(' ')}`,
    ];
  },

  '**/*.tsx': (filenames) => {
    return `yarn stylelint --ignore-path .gitignore ${filenames.join(' ')}`;
  },
};
