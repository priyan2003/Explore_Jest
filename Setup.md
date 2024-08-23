1. Install package of jest
```
npm install --save-dev jest
```

2. Addind a script in package.json file
```
"test": "jest"
```

3. To see a good interface of test 
```
npm install --save-dev jest-html-reporter
```

4. Add a dependencies in package.json
```
"jest": {
    "reporters": [
      "default", [
        "./node_modules/jest-html-reporter",
        {
          "pageTitle": "Test Report"
        }
      ]
    ]
  }
```  

