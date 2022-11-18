# NodeJS CI/CD Pipeline create and Deploying Node application on server

### GitHub Actions - NodeJS Project | CI/CD Pipeline and Deploying on Heroku | DevOps Tutorial

I  introduce how you can set up Github Actions for a NodeJS project that allows you to include CI/CD capabilities to Build, Test and Auto Deploy our NodeJS project.

GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline. You can create workflows that build and test every pull request to your repository or deploy merged pull requests to production.

NodeJS GitHub action: https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs


# This workflow will do a clean installation of node dependencies, cache/restore them, build the source code and run tests across different versions of node
# For more information see: https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs

name: NodeJS GitHub Action

on: push

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3 #checkout the repository
      - name: Use Node
     
        uses: actions/setup-node@v3
        with:
          node-version: 16
      - name: Install dependencies
        run: npm install
      - name: Run test
        run: npm test
