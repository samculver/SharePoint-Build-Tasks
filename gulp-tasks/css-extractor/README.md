# SharePoint gulp css extractor

This plugin will export your SPFx styles into a seperate stylesheet which can be uploaded separately to your CDN. The CSS stylesheet is transpiled from SASS, but you can now use standards css class name references in your source code. The stylesheet can be referenced in a master page (on-prem) or combined into a global stylesheet.

## Instructions

- Upload gulp-css-extractor.js to your projects "config" folder.
- Edit your gulpfile and add the following code just before build.initialize(gulp):
```javascript
require('./config/gulp-css-extractor.js');
```
- Locate your web part sass file (.scss) and remove "module" from the file name (e.g. rename to HelloWorld.scss). Also edit the file and remove the import of "SPFabricCore.scss".
- Remove all references/imports to the sass file from your web part TypeScript files.
- You can now use standard class names, for example:
```html
    <div class="helloWorld"></div>
```
- Now, whenever you use 'gulp serve' or 'gulp bundle', a css stylesheet will be extracted.
- To view your custom stylesheet within the local SPFx workbench, you can load it using the SPCompontentLoader module. Here is an example of loading when developing locally:
```javascript
import { Environment, EnvironmentType } from '@microsoft/sp-core-library';
import { SPComponentLoader } from '@microsoft/sp-loader';
```
And add a constructor function to your default class:
```javascript
constructor(){
    super();
    if(Environment.type === EnvironmentType.Local){
        SPComponentLoader.loadCss('../dist/HelloWorld.css');
    }
}
```
