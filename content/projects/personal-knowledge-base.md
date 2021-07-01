---
title: Personal Knowledge Base
---


# Goals
## Author
- As an author, I would like to have a "personal knowledge base" where I can easily contribute and share knowledge - for myself, and for others. 
- As an author, I should be able to easily contribute content to the knowledge base using my mobile phone and tablet.
- As an author, I should be able to easily cross-link pages
- As an author, I should be able to upload video & image files, and have them displayed in a page. I would prefer to use local files when possible, to increase independence from 3rd party services
- As an author, I should be able to embed YouTube videos & Instagram links in pages, and have them displayed in a page

## Reader / Visitor to the site
- As a reader, the site should look great on my phone


# Types of content in the site
(These are not necessarily separate Hugo content types)

- Technical topics - code snippets, how-to guides
- Opinions, essays, ideas - text, occasional diagrams
- Projects - some additional structure in the metadata
- Cooking, recipes - embedded photos & videos
- Travel logs - embedded photos & video


# Current setup
- Hugo site; the code & content is committed to a private git repository hosted on GitHub. I plan to make this repository public in the future, so that other people could contribute content
- On my iPhone & iPad, I am using WorkingCopy.app to access the GitHub repository, edit markdown text, and contribute changes up to the content hosted on the GitHub repository
- When new content is committed to the GitHub repo, AWS Amplify + GitHub Webhooks automatically deploy the Hugo site


# I would like help with

## Templates
- "Content tree" page - Contains nested tree of all pages in a directory. Simply - see all content in the site on one page, with links to individual content
- List of all pages, grouped by tag. A single page. Each header would be the name of a tag used in the site. Within each tag, list all pages with that tag. Duplicates are OK (if a page has 2 tags, "foo" and "bar", then a link to the page should appear under both headings)
- List all pages with no tags
- List all pages with no title
- List all pages with no content ("stubs")
- Pages' date should use the markdown file's last-modified date, instead of specifying the date in the YAML front matter
- Ability to embed Youtube links which render inline
- Ability to embed Instagram links which render inline
- Advice on how to easily & safely cross-link pages


## Style
- Left-align the content. Currently, list content is centered
- Overall, I would prefer the site to be more information dense. I'd like the list pages to be more like UL/LI bullet points - tighter together



# The site
- https://ro.vu

# You
- Experienced Hugo developer, proficient at AWS-hosted Hugo sites, automated "CI/CD" publishing; great at front-end styling, optimizing for mobile visitors
- Please share links to the published sites you have worked on, and (if available) the Github repository where the Hugo site lives



