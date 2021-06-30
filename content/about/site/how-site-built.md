---
title: "How this site was built (Technical)"
date: 2021-06-01
tags : [meta, technology]
---

## Goals
As a content author, I should be able to...
* Store content as plain text (Markdown)
* Automatically deploy the site when content is changed
* Edit content “on the fly” using a mobile device 
* Edit content locally when internet is not available

## Overview
* This site is built by the [Hugo](https://gohugo.io/) static site generator —  Hugo allows an author to write text content in the [Markdown](https://en.wikipedia.org/wiki/Markdown) text format, which are converted into HTML files.
* The content of the site is stored in [Github](https://github.com/), in a version control system.
* Amazon [AWS Amplify](https://aws.amazon.com/amplify/) is a service which checks for changes to the content (for example: adding a new blog post to the site, or even fixing a typo). When it detects a new change, the **AWS Amplify** service automatically rebuilds the site (converting Markdown-formatted text into HTML), and then publishes the new/updated files to the public site.

## Adding & publishing content
* Use [Working Copy](https://workingcopyapp.com) to allow an iOS user to connect & push to the GitHub repository. 
* In the iOS “Files” app, enable the Working Copy file storage location. This allows other apps to edit files which are managed by GitHub. 
* Use [1Writer](https://1writerapp.com) to add the Working Copy folder to 1Writer.

Once the above is setup, you can add/edit a file in 1Writer, and then push the changes to GitHub using Working Copy. AWS Amplify will then detect a change, and will re-reploy the updated site.


## Creating the site
Prerequisites:
* AWS account
* Github account
* DNS domain name, preferably hosted on AWS Route 53

Assumptions
* MacOS & iOS
* Using Homebrew for package management

### Install & Configure Hugo
Resources:
* [Hugo Installation](https://gohugo.io/getting-started/installing/)
* [Hugo Getting Started](https://gohugo.io/getting-started/quick-start/)
1.  Download & install Hugo to your computer
	* `brew install hugo`
1. Install a theme, and create some content

### Configure Git & Github
1. Initialize a Git repository in the Hugo project directory
	* Initialize git: `git init` 
	* Add files to version control: `git add -A`
	* Create first commit: `git commit -m "Initial commit"`
1. Create a Github repository (public or private), and add respository as a remote origin
	* Add GitHub as a git remote: `git remote add origin https://github.com/<username>/<repo-name>.git`
1. Push content to Github
	* ` git push -u origin master`

### Configure AWS Amplify
Resources:
* [Guide to hosting Hugo on AWS Amplify](https://gohugo.io/hosting-and-deployment/hosting-on-aws-amplify/)
* Connect AWS Amplify to Github


Go to Amplify console home
- https://console.aws.amazon.com/amplify/home?region=us-east-1&code=a7ff92a322ed3c5cdb99#/

Click New App > Host Web APp

From existing code: Click GitHub

Connec to repository





# Sandbox pages
- [sandbox]({{< ref "sandbox" >}}) 