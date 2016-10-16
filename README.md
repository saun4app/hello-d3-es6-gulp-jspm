# hello-d3-es6-gulp-rollup

`hello-d3-es6-gulp-rollup` provides an example of using the following to display text on the screen:
- `d3.js` (v4)
- `es6` (`ES2015`)
- `rollup.js`
- `gulp` (**without** `rollup.config.js`)
- `w3css`

#### Example
<a href="https://saun4app.github.io/hello-d3-es6-rollup" target="_blank">
    <img src="https://raw.github.com/saun4app/hello-d3-es6-gulp-rollup/master/demo-screen.png"
         alt="Demo screen"/>
</a>

#### Install
```
$ git clone git@github.com:saun4app/hello-d3-es6-gulp-rollup.git demo-app
$ cd demo-app/
$ npm install
```

##### Build
```
$ gulp
```
or
```
$ gulp build
```

##### Build uglified version
```
$ gulp ugly
```
The resulting files are in `build` directory.

##### Run on web server
```
$ npm start
```
or
```
$ http-server ./build -p 3020
```
View the page on `http://localhost:3020/`
<a href="https://saun4app.github.io/hello-d3-es6-rollup" target="_blank">
    <img src="https://raw.github.com/saun4app/hello-d3-es6-gulp-rollup/master/demo-screen.png"
         alt="Demo screen"/>
</a>

#### Resources
- https://d3js.org
- http://jspm.io
- https://github.com/jspm/jspm-cli
- http://jspm.io/docs/production-workflows.html
- https://github.com/systemjs/builder
- https://github.com/jspm/jspm-cli/blob/master/docs/api.md
- https://github.com/systemjs/builder
- https://github.com/OrKoN/jspm-ember-playground
- https://60devs.com/optimizing--default-jspm-workflow-with-gulp-and-nginx.html
- https://github.com/jspm/registry/issues/431
- http://stackoverflow.com/questions/34444641/jspm-bundle-code-in-subdirectory-that-is-served-as-root
- https://github.com/53seven/d3-svg
- http://www.w3schools.com/w3css
