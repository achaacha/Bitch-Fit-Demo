# Bitch Fit Demo
[View the live demo](https://achaacha.github.io/Bitch-Fit-Demo/)

1-27-2020@ 109AM: I haven't been able to get around to updating this in a while, should be able to start prog again in Feb.

### Updates and adjustments
###### If list is marked, the feature is live on the demo.
- [x] Included updates and adjustments **AND** suggestions list to README.md
- [ ] Readjusted dimensions to media panel's height from `700px` to `786px`.
- [ ] Added class `.mediapanel` to `#maincontent` div to indicate the actual div panel itself.
- [ ] Included a dataset called `data-background` to actual comic images.

### Current stable, new functionalities:
1. Dynamic Movement between images, no need to have more pages!
2. Shift between images via left and right arrow keys.
3. Remain in the same spot on the y-scroll axis while shuffling through images; page does not bounce.
4. URL remains on same page, but updates with a `#+number` at the end of URL to indicate which page/archive we're on.
5. Media panel resized and permanently stays in place regardless of what image is inside of it. [Reference #2](https://achaacha.github.io/Bitch-Fit-Demo/index.html#2)
   - Smaller image's transparency was also removed, setting them at `524px x 524px` for testing.)
6. Comic images now resize and centers themselves in the middle of the panel but still maintains it's original quality.
7. Background image is now shown completely regardless of screen size.


### Unstable functions and known issues:
- Accessibility to a specific comic through the `# + number` indication of the URL tag sometimes does not update immediately under certain condition **UNLESS** the url is entered again. The website directs you to the appropriate image on the second try.

### Suggestion list:
- [ ] Have the loading screen feature Chloe.
- [ ] Create a background specifically for the media panel. Reference [Ava's Demon](https://www.avasdemon.com/).
- [ ] Tweak header dimensions so the comic is immediately available without needing to scroll down.
- [ ] Make body background either a single color or a smooth linear gradient, move current background to media panel?
- [ ] Linear gradient bounces for page swap! [Reference: Dark Wave Octosynth](https://codepen.io/AchaAcha/full/GRKLLrj)
- [ ] We can do a lot with datasets, and when I start developing the plugin, we can completely warp the website, dynamically, based under the conditions you have listed for the specific image that was uploaded. Possibilities are endless. Lets discuss what all we can do with this.

### On the to do list:
- [ ] Convert menu images to SVGs.
- [ ] Design and develop loading screen for images.
- [ ] [Develop javascript for loading screen.](https://github.com/desandro/imagesloaded)
- [ ] Implement dynamic `about`, `author`, and `archive` sections.
- [ ] Create separate demo reels showcasing different transition effects for various elements.
- [ ] Develop javascript code to indicate first and last chapters via the archive.
- [ ] Implement an `onClick()` function for nav arrows.
- [ ] Apply the full comic gallery with new images.
- [ ] Play around with `datasets` to implement background change functionality.
- [ ] Design caption div and comment area.
- [ ] Troubleshoot known issues.
- [ ] Design dynamic opacity to nav menu buttons when reaching first and last page variables.
- [ ] Design side gallery and it's functions.
- [ ] Start developing wordpress plugin.
