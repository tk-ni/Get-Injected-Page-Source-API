# Dynamically injected web page source API with Node JS & Puppeteer <span align="right"><img src="https://developers.google.com/web/tools/images/puppeteer.png" width="25" href="#"/> <img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" width="60" href="#"/></span>


I recently came across an issue where I had to use a fetch request to get the source of a web page but couldn’t get the actual content because it loaded dynamically.

Some websites (mostly single page apps that are built using React/Angular/Vue) will give you a basic index.html template file and inject the actual content of the site using Javascript after the initial loading.

Sending a request to such a website using fetch or ajax will only get you the initial source without the dynamically injected content.

If you guys just want a quick solution to get a dynamically injected source, just fork/clone my repository, upload it to Heroku or any other cloud service and make a request that looks like this.

```bash
curl -XGET 'https://your_server_url/?url=webpage_url'
```
You will get the webpage_url’s source as a response.

Like it and want to support me? [<img src="https://uploads-ssl.webflow.com/5c14e387dab576fe667689cf/5cbee341ae2b8813ae072f5b_Ko-fi_logo_RGB_Outline.png" width="20"/> Buy me a coffee!](https://ko-fi.com/tk_ni)


# Running the API locally
 **Step 1** Clone the repo.
 ```bash
 git clone https://github.com/tk-ni/Get-Dynamically-Injected-Source-API.git
```

**Step 2** In the main repo directory open a CMD/Terminal and type in these commands.

```bash
npm install
npm start
```
The API server will run on port ***3201***.

Open up Postman (or any other API development tool) and send a GET request to the main route, Example using fetch.
```javascript
fetch("http://localhost:3201/?url=https://google.com", {
  method: 'GET',
}).then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

# Uploading to Heroku

Puppeteer won’t work out of the box with Heroku, in order to upload our project to Heroku we need to make sure that ***1.*** We enabled the ***‘--no-sandbox’*** tag in our puppeteer.launch options. ***2.*** We included the puppeteer build pack in our Heroku app.

Buildpack URL https://github.com/jontewks/puppeteer-heroku-buildpack

Add this URL to the buildpacks in your Heroku app settings and rebuild the app! (Heroku won’t use the newly added pack unless we rebuild our app, so make sure to commit and push).

<img src="https://theconsoleblog.com/wp-content/uploads/2021/01/heroku-puppeteer-buildpacks-1024x355.png">

---
If you have any questions, comments or improvements, feel free to contact me!