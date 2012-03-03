##### Get the package and run the installer

Download [Sencha SDK](http://www.sencha.com/products/sdk-tools/) and install it.

You will most likely need to **close and reopen Terminal** before you will have access to the sencha command

##### Create you jsb3

    sencha create jsb -a index.html -p app.jsb3

or for an external source

    sencha create jsb -a http://domain.com/index.html -p app.jsb3

The flags passed are:

  * -**a** (required) The location of the HTML file containing the scripts you want to include
  * -**p** (required) The location where the output .jsb3 file should be created (relative to your current terminal path)

##### Your .jsb3

The jsb3 file generated should look something like this:

    {
        "projectName": "aKennedy Project",
        "licenseText": "Copyright(c) 2012 aKennedy",
        "builds": [
            {
                "name": "All Classes",
                "target": "all-classes.js",
                "compress": true,
                "files": [
                    {
                        "path": "js/",
                        "name": "FooBar.js"
                    }
                    // ...
                ]
            }
        ],
        "resources" : []
    }

If you need to make modifications or you are manually creating your jsb3 file, just make sure to include all your files and that they are in the correct order.

##### Build all-classes.js

Combining and Minifying your files from your jsb3 is a cinch

    sencha build -p app.jsb3 -d . -v

The flags passed are:

  * -**p** (required) The location of the .jsb3 file you want to build
  * -**d** (required) The location where you want the output files to be created (relative to your current terminal path)
  * -**v** (optional) For verbose output in your terminal

### And that is it!