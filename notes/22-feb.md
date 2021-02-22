# Notes

#### 22 Feb 2021

1. Building blocks of Angular

> Modules

Whatever component, directive and pipe you are creating, must be declared in any Angular module(@NgModule)

> Components

It is important to make sure that any component is not declared multiple times

> Services (Optional)
> Directives (Optional)
> Pipes (Optional)
> etc.

Create modules feature-wise

> Account (account.module.ts) => mybiz.com/account
> Dashboard (dashboard.module.ts) => mybiz.com/dashboard
> Sales (sales.module.ts) => mybiz.com/dashboard
> Purchase (purchase.module.ts) => mybiz.com/dashboard

When we bundle our application using `ng build`
command:

Before:-
```
vendor.js  
polyfills.js  
main.js  - 110 kb // Loaded at once
runtime.js
styles.css
```

After lazy-loading (Enables on-demand script loading):-
Improves page-load performance

```
vendor.js  
polyfills.js  
main.js  - 40 kb
account-32452345254345.js  - 15 kb (Feature module chunk)
dashboard-32342345254345.js - 20 kb (Feature module chunk)
sales-32342345254345.js - 25 kb (Feature module chunk)
purchase-32342345254345.js - 10kb (Feature module chunk)
runtime.js
styles.css
```
