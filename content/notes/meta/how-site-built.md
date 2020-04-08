---
title: "How this site was built (Technical)"
date: 2020-04-07
tags : [meta, technology]
---

## Overview
* This site is built by the [Hugo](https://gohugo.io/) static site generator —  Hugo allows an author to write text content in the [Markdown](https://en.wikipedia.org/wiki/Markdown) text format, which are converted into HTML files.
* The content of the site is stored in [Github](https://github.com/), in a version control system.
* Amazon [AWS Amplify](https://aws.amazon.com/amplify/) is a service which checks for changes to the content (for example: adding a new blog post to the site, or even fixing a typo). When it detects a new change, the **AWS Amplify** service automatically rebuilds the site (converting Markdown-formatted text into HTML), and then publishes the new/updated files to the public site.




## Adding & publishing content
1. Open Finder, browse to directory containing Hugo site
	* `git clone https://github.com/Helicer/ro.vu_hugo.git`
1. Drag folder into Sublime text editor for editing
1. Create new content as a nested Markdown file
1. Preview the site content by using `hugo server -d` and visiting http://localhost:1313
1. Verify changes with `git status`
1. Commit changes with `git commit -a -m "<Commit message>"`
1. Push changes to Github using `git push -u origin master`
1. If there are no issues, the AWS Amplify should pick up the changes, rebuild the site, and publish the site



## Creating the site
Prerequisites:
* AWS account
* Github account
* DNS domain name, preferably hosted on AWS Route 53

Assumptions
* MacOS
* Using Homebrew for package management

### Install & Configure Hugo
Resources:
* [Hugo Installation](https://gohugo.io/getting-started/installing/)
* [Hugo Getting Started](https://gohugo.io/getting-started/quick-start/)
1.  Download & install Hugo to your computer
	* `brew install hugo`
1. Install a theme, and create some content
	* Using [Minimo theme](https://minimo.netlify.com/) for this site

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
1. Connect AWS Amplify to Github

