![Post and delete Slack message](https://miro.medium.com/max/1400/1*QkRk7znrXi5DpYlMMr0hlQ.gif "Post and delete Slack message")


# Nasch-Bot

The Nasch-Bot sends (and deletes) the latest image of the daily changing dish from 'https://cafenasch.de/#mittagstisch' into a predefined Slack channel. This project is an approach of using Slack and especially custom Slack app integrations to receive information from the web without actively searching for them.

## How to install:
Run ```npm install``` to install all project dependencies into your local 'node_modules' folder. Don't forget to edit the '.env' file.

Basic example of .env file:
```
SLACK_TOKEN=xoxb-903999940739-1262682648423-nAzglmz8O9ZlLJGBmk8xyGsY
SLACK_CHANNEL=CTJ1K483J
TIME_ALIVE=10000
```

## Run it:
After all dependencies are successfully installed run ```node index.js``` to start the application. Otherwise you can run ```nodemon index.js``` in order to automatically restart the application when file changes in the directory are detected.


## The story behind:
In case you're interested in reading the story behind this project (there are also some handy tipps and tricks): https://tmjns92.medium.com/using-slack-to-stay-updated-f02fe948e5a
