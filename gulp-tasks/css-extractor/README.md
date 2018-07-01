# SharePoint gulp css extractor

This plugin will export your SPFx styles into a seperate stylesheet which can be uploaded separately to your CDN. The CSS stylesheet is transpiled from SASS, but you can now use standards css class name references in your source code. The stylesheet can be referenced in a master page (on-prem) or combined into a global stylesheet.

## Instructions

- Upload gulp-css-extractor.js to your projects "config" folder.
- Edit your gulpfile and add the following code just before build.initialize(gulp):
```javascript
require('./config/gulp-extract-css.js');
```
- Locate your web part sass file (.scss) and remove "module" from the file name (e.g rename to HelloWorld.scss).
- Remove all references/imports to the sass file from your web part TypeScript files.
- You can now use standard class names, for example:
```html
    <div class="helloWorld"></div>
```
- Now, whenever you use 'gulp serve' or 'gulp bundle', a css stylesheet will be extracted.
