const { WebClient } = require('@slack/web-api');
const sleep = require('util').promisify(setTimeout);
// main config
const dotenv = require('dotenv');
dotenv.config();

// slack settings
const token = process.env.SLACK_TOKEN;
const web = new WebClient(token);
const conversationId = process.env.SLACK_CHANNEL;

// scrape latest image from cafenasch.de
const scrape = require('./scrape.js');
const postImageURL = scrape.scrapeImageURL();

async function postURL() {
  try{
    const res = await web.chat.postMessage({ channel: conversationId, text: await postImageURL });
    await sleep(process.env.TIME_ALIVE);
    const result = await web.chat.delete({ token: process.env.SLACK_TOKEN, channel: conversationId, ts: res.ts });
    // returns the time stamp of the send message
    return res.ts
  }
  catch(err){
    console.log(err); 
  }
}

postURL().then(console.log);