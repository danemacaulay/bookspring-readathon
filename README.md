# BSR

- to install dependencies: `npm install`
- for developement `npm start` and goto [http://localhost:8080](http://localhost:8080)
- for build `npm run build`
- to deploy to [https://danemacaulay.github.io/bsr](https://danemacaulay.github.io/bsr)

```
git branch -D gh-pages
git checkout -b gh-pages
npm run clean && npm run build
git add . --force
git commit -m 'build'
git push --force
```