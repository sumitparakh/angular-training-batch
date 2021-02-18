# Notes
#### 17 Feb 2021

1. Traditional Web Development

HTML, javascript, css and so on.

```html
<script src="js"></script>
<link href="css" />
```

2. Modern Web Development (Angular)

> Architecture (Scalable)
> Command line tools
> Routing, Forms Validation,
> Complete package to create SPA application

## Angular Dependencies

1. Node
2. npm
3. Angular CLI 

```
npm i -g @angular/cli (Optional)
```

```
ng
```

4. vscode

#### Create angular application

1. 
```
ng new <app-name>
```

2. Alternate approach:-

```
npx @angular/cli new <app-name>
```
### Start angular application

```bash
npm run start

or

ng serve (if @angular/cli is globally installed)
```

#### Install an npm package/library

Every installed packages is stored under node_modules directory

```
npm install <package-name>
```

```
npm install -g <package-name>
```

#### Initialize NPM:-

```
npm init -y
```

### Typescript

https://www.typescriptlang.org/

Typescript compiler (tsc) transpiles typescript programs into its JS equivalent, which we can run in browser.

```java
javac  <source-file>
// compiles into byte-code
java <class-file>
```

```typescript
tsc <source-file.ts>
// compiles into
.js
```

### Difference between Angular & rest of the frameworks

Angular - framework,


React - UI library  (Minimal framework and less footprint)
1. Routing => 3rd party
2. Forms handling => 3rd party



#### Routing

Default routing is always:-

```
/
```

```
/<routing1>/<routing2>......<routing-n>
```
