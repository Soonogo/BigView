pnpm run build &&
cd dist &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin git@github.com:songenen/BigView-website.git &&
git push -f origin master:gh-pages &&
cd -