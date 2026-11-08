export default {
  '*.{js,jsx,ts,tsx,vue}': [
    'oxlint --fix',
    'eslint --fix --cache',
    'prettier --write --experimental-cli',
  ],

  '*.{json,jsonc,md,mdx,css,scss,html,yml,yaml}': ['prettier --write --experimental-cli'],
}
