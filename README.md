# Learn Hyperledger

Run a React frontend on top of Hyperledger and interact with your blockchain in real time!

# Instructions

This is a fun demo which you can fork and work on to learn how to use React to interact with Hyperledger.

Blockchain technology is often discussed, but rarely demonstrated. Learn Hyperledger aims to resolve that.

Learn Hyperledger as of now is <b>only supported on Linux based operating systems</b>, so do not attempt to run this on Windows unless you know what you are doing.

Before you begin, you will first want to read the Hyperledger Composer documentation here: https://hyperledger.github.io/composer/latest/introduction/introduction

Now that you are familiar with Hyperledger Composer you can find the network files for Learn Hyperledger under `backend/tutorial-network`

We prefer to use yarn to handle our packages, for us this has led to the least amount of problems. Also note that as of now, the LTS version of Node is required to run this project.

Install dependencies with `npm install` or `yarn`
Deploy the Learn Hyperledger frontend on port 5000 with `npm start -- --port 5000` or `yarn start -- --port 5000`
This is very important as Hyperledger Composer will run on port 3000.

# Contribution

Devoteam members are welcome to contribute.

For help, contact <a href="https://github.com/typekev">Kevin Gonzalez</a>.

This project is maintained by Devoteam Luxembourg.