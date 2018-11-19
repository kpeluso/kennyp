## Description

This is my website!

## Deployment References

https://blog.heroku.com/deploying-react-with-zero-configuration

https://devcenter.heroku.com/categories/command-line

https://github.com/nicolewhite/slack-meme/issues/7

## Update Workflow (for my own reference)

$ heroku login

$ heroku git:clone -a kennyp

$ cd kennyp;git remote add kennyp https://github.com/kpeluso/kennyp.git ;git pull kennyp master

$ \#  Make edits, then: npm install --save --save-exact react-scripts@2.0.3 --OR-- npm oudated; npm update;npm outdated

$ git add .;git commit -m 'update';git push -u origin master;git push heroku master

