# MongoDB shell commands guide
If you want to install the MongoDB shell commands (macOS) you can follow the next steps.

### Prerequisites
- Ensure that you have [brew](https://brew.sh/#install) installed on your computer.
- You will also need to have the xcode command line tools up to date, you can find them [here](https://developer.apple.com/download/all/?q=Command%20Line%20Tools%20for%20Xcode%2015)

## Installing the shell commands
Tap the  MongoDB Homebrew Tap to download the official Homebrew formula for MongoDB and the Database Tools, by running the following command in your macOS Terminal:
```
brew tap mongodb/brew
```

If you have already done this for a previous installation of MongoDB, you can skip this step.

To update Homebrew and all existing formulae:
```
brew update
```

To install MongoDB, run the following command in your macOS Terminal application:
```
brew install mongodb-community@7.0
```

## Running MongoDB on shell

To run MongoDB (i.e. the mongod process) as a macOS service, run:
```
brew services start mongodb-community
```

To stop a mongod running as a macOS service, use the following command as needed:
```
brew services stop mongodb-community@7.0
```

### Connect and Use MongoDB
To begin using MongoDB. From a new terminal, issue the following:
```
mongosh
```


