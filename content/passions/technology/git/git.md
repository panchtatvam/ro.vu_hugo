
### Add remote origin
Reference: https://help.github.com/en/github/using-git/adding-a-remote
`git remote add origin https://github.com/Helicer/ios-learning-app.git`
`git push -u origin master`

view & add partial bits to the commit with a prompt yes/no
`git add -p `

remove untracked files (FORCE)
`git clean -f`

destroying changes, but choose from patch
`git checkout -p`

verbose commit, look at changes. ALWYAS DO THIS
`git commit -v `

`git log`
`git log --oneline --graph --decorate`

`git clean -fd` # remove untracked 

## Get a repo from origin
`git clone <REPO URL>`

# Gitignore
- https://github.com/github/gitignore
- Mac: https://github.com/github/gitignore/blob/master/Global/macOS.gitignore


## Force-overwrite local files ##
https://stackoverflow.com/questions/1125968/how-do-i-force-git-pull-to-overwrite-local-files

## Checking out latest changes
https://stackoverflow.com/questions/3334475/git-how-to-update-checkout-a-single-file-from-remote-origin-master
```
git fetch
git checkout origin/master
```

## Large files detected. You may want to try Git Large File Storage.
https://medium.com/@marcosantonocito/fixing-the-gh001-large-files-detected-you-may-want-to-try-git-large-file-storage-43336b983272


## Branching
Create and switch to a new branch
- https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging
- 
```
git checkout -b 'mybranch'
```
Shorthand for
```
git branch mybranch
git checkout mybranch
```

```
git checkout master
git merge mybranch
```

Delete branch
```
git branch -d mybranch
```