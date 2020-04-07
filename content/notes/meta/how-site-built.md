---
title: "How this site is built"
date: 2020-04-07
tags : [meta, technology]
---

# Overview
* This site is built by the [Hugo](https://gohugo.io/) static site generator —  Hugo allows an author to write text content in the [Markdown](https://en.wikipedia.org/wiki/Markdown) text format, which are converted into HTML files.
* The content of the site is stored in [Github](https://github.com/), in a version control system.
* Amazon [AWS Amplify](https://aws.amazon.com/amplify/) is a service which checks for changes to the content (for example: adding a new blog post to the site, or even fixing a typo). When it detects a new change, the **AWS Amplify** service automatically rebuilds the site (converting Markdown-formatted text into HTML), and then publishes the new/updated files to the public site.




