<img src="https://github.com/zhivou/my_portfolio/blob/master/app/assets/images/favicon.png?raw=true" alt="My Portfolio logo" title="My Portfolio" align="right" height="60" />

# My Portfolio Web

![GitHub top language](https://img.shields.io/github/languages/top/zhivou/my_portfolio?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/zhivou/my_portfolio?style=for-the-badge)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/zhivou/my_portfolio?style=for-the-badge)

Inspired by LinkedIn interface
Rails 6.1.4

[Click to see Portfolio](https://www.skrdev.com/ "Click to see Portfolio")

| Dependences    |
|----------------|
| Devise         |
| Bootstrap      |
| React JS       |
| Chart JS       |
| Jquery         |
| Active Storage |
| Active Text    |
| WebPack        |
| Docker         |
| Docker Compose |

#Deployment instruction
Use docker file to build heroku env. It helps to control the versions of dependencies and makes it easier to start 
development server.

###Install the Heroku CLI
Download and install the Heroku CLI.
If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.

```
$ heroku login
```
Log in to Container Registry
You must have Docker set up locally to continue. You should see output when you run this command.
```
$ docker ps
```
Now you can sign into Container Registry.
```
$ heroku container:login
```
Push your Docker-based app
Build the Dockerfile in the current directory and push the Docker image.
```
$ heroku container:push web
```
Deploy the changes
Release the newly pushed images to deploy your app.
```
$ heroku container:release web
```
