[![Netlify Status](https://api.netlify.com/api/v1/badges/835007e7-56fc-4265-8fd9-cf6487586f24/deploy-status)](https://app.netlify.com/sites/jconan/deploys)

# DevBog - A Developer and Designer Blog
This simple website built with GatsbyJS and Netlify CMS. Deployed on netlify. Starter sponsered by [W3Layouts](https://w3layouts.com) and Gatsby starter demo.

[![DevBlog - A Developer and Designer Blog](https://ibb.co/0QQCH2h)](https://jconan.netlify.app)

## Installation
```bash
git clone 
npm install
gatsby develop
```

More instructions also available at W3Layouts [Delog Launch Article](https://w3layouts.com/articles/delog-gatsby-starter-netlify-cms/).

## Features
- Built with GatsbyJS and Netlify CMS
- Option to Add, Edit, Update and Delete posts via Netlify CMS
- SEO friendly - Option to Add meta description
- In-built contact form powered by [Formspree.io](https://formspree.io) 
- Comes with dark mode

---

## Publish
* Create a new participation on develop or features/ branches
* Compare and create a pull-request on production branch (master)
* Validate merge
* Netlify will start build process, website will be live in a few minutes

### Netlify CMS access
Repo URL is defined at `/static/admin/config.yml`, value `julien-conan/devblog`

### Creating Github OAuth Client ID
* Goto Github [Developer Settings](https://github.com/settings/developers)
* **New OAuth** 
* Enter Application name
* Homepage URL as Netlify URL
* And **Authorization callback URL** to `https://api.netlify.com/auth/done`)
* Once Client ID and Secret token is generated configure same in [Netlify Access Control](#accessing-netlify-cms-admin) as described.

### Accessing Netlify CMS Admin
* Goto your Netlify site admin
* Goto **Access Control** > **OAuth** then **Install Provider** you need to select provider as `Github` as add `Client ID` and `Secret` 
* Your Netlify CMS is ready. Goto you netlify site URL and append `/admin/`. for example `example.netlify.com/admin/`, You will see login with Github button.

### Managing Blog Posts in Netlify CMS
* Once logged in you will find all the blog post listed here.
* You can create, edit, update and delete like any CMS

### Editing Meta Data
Inside you Netlify CMS admin, `Settings > Config` or you can go to `site-meta-data.json`. Here you can edit following details
* Title
* Description
* Site URL
* Homepage Title
* Homepage Description
* To get the Contact form working. you need too add a form at [W3Layouts forms](https://my.w3layouts.com/Forms/). Follow the steps [How to enable W3Layouts Contact form](https://w3layouts.com/articles/introducing-contact-forms-for-static-websites/) instructions to create a form then your contact form is all set.

### Add Google Analytics
Change `trackingId` in `gatsby-config.js` at `gatsby-plugin-google-analytics` plugin

---

I hope you will build a great website with Delog. If you like it please spread the word, Feel free to contribute and raise a pull request :)

For issues,feedback on enhancement or sharing your new awesome website built with delog. [Create New Issue](https://github.com/W3Layouts/gatsby-starter-delog/issues/new) Here

---

## Roadmap
We are maintaining future task in [Github Project](https://github.com/W3Layouts/gatsby-starter-delog/projects/1), even though most changes are instantaious. We try keep them posted here.

---

## Credits
- Awesome image used in demo is from [Unsplash](https://unsplash.com)
- CSS and SVG Icons by [CSS.gg](https://css.gg)

---

## Changelog
All notable changes to this project are listed here.

### [1.6.0] - 2020-05-03
#### Added
- Custom 404 page.
- Site name will be appended in blog posts and contact page.
- Reordering fields in Netlify CMS for better flow of post creation.
- Validation for path in Netlify CMS

### [1.5.0] - 2020-05-03
#### Added
- Settings page in Netlify CMS to customize site meta data.
- Site meta data is pulled from `site-meta-data.json`. maintained via Netlify CMS

### [1.4.0] - 2020-05-01
#### Added
- `gatsby-plugin-sitemap` Creates a sitemap for your Gatsby site in production.

#### Changed
- Changelog improvements
- Comments on `gatsby-config.js`
- Comments on `static/admin/config.yml`

### [1.3.0] - 2020-04-30
#### Added
- `gatsby-plugin-offline` drop-in support for making a GatsbyJS site work offline and more resistant to bad network connections.
- `gatsby-plugin-manifest` configures GatsbyJS to create a manifest.webmanifest file on every site build

### [1.2.0] - 2020-04-28
#### Added 
- GatsbyJS Increment builds with Netlify deployment

### [1.1.0] - 2020-04-21
#### Added 
- Dark mode compatibitly and toggle for user preference

### [1.0.0] - 2020-03-14
- Launch of GatsbyJS and Netlify CMS based starter `gatsby-starter-delog`
