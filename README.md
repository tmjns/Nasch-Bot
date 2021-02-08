# Nasch-Bot

The Nasch-Bot writes (and deletes) the latest image of the daily changing dish from 'https://cafenasch.de/#mittagstisch' into a predefined Slack channel. This project is a approach of using Slack and especially custom Slack app integrations to receive information from the web without actively searching for them.

### How to install:
Run ```npm install``` to install all project dependencies into your local 'node_modules' folder. Don't forget to edit the '.env' file.

Basic example of .env file:
```
SLACK_TOKEN=xoxb-903999940739-1262682648423-nAzglmz8O9ZlLJGBmk8xyGsY
SLACK_CHANNEL=CTJ1K483J
TIME_ALIVE=10000
```

### Run it:
After all dependencies are successfully installed run ```node index.js``` to start the application. Otherwise you can rund ```nodemon index.js``` in order to automatically restart the application when file changes in the directory are detected.
