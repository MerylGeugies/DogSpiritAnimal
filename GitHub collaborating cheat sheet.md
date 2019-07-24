How to collaborate on GitHub cheatsheet


00. If you did not clone the repository yet, clone it!
- Git clone [url of repository]

01. We use the developer branch for the development.

02. Check if developer is up-to-date with your local files.
- Got to the developer branch and pull updates.
- Git pull origin developer.
- Check if your local files are up-to-date.

03. Make a new feature branch for the changes you’re going to make. Ex.: “cleanupapp”
- Git checkout -b nameofyourfeaturebranch, for example: feature/cleanupapp

04. Make the changes you wanted to make.

05. Go to your feature branch, add the changed files and commit it.
- Git checkout feature/cleanupapp.
- Git add .
- Git commit -m “message”.

06. Push the changes to the your feature branch.
- Git push origin feature/cleanupapp.

07. Pull request and compare feature branch to the developer branch.
- Go to GitHub, click the compare & pull request button. Make sure you compare the feature to the developer. Don’t compare to master!
- Add a title to the request and if you want you can add a comment.
- Click create pull request button.
- Assign the two other teammates as reviewers of the pull.
- Your reviewers (and you) check if the request has any conflicts or not.
- The reviewers can add comments to your request. So you maybe change your request.
- If you want, you can check the files (green/red part), images et cetera, reviewers can leave a single comment in your code if they want.

08. Merge (Only done by one of the reviewers!)
- You don’t merge yourself, only one of your other teammates are allowed to merge. Otherwise you are a cowboy!
- Merge to the developer branch, not the master branch.
- Don’t delete the developer branch, if you want to delete a branch, only your feature branch ex: cleanupapp.

09. Work on a new feature!
- Start all over again.
- First pull the developer to your local files.
- Git checkout developer.
- Git pull developer

10. New feature work branch, and work on your project.

