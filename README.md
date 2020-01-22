# Bitch Fit Demo
#### Demo Reel


[View the live demo](https://achaacha.github.io/Bitch-Fit-Demo/)

###### Current stable, new functionalities:
1. Dynamic Movement between images, no need to have more pages!
2. Shift between images via left and right arrow keys.
3. Remain in the same spot on the y-scroll axis while shuffling through images; page does not bounce.
4. URL remains on same page, but updates with a `#+number` at the end of URL to indicate which page/archive we're on.
5. Media panel resized and permanently stays in place regardless of what image is inside of it. [Reference #2](https://achaacha.github.io/Bitch-Fit-Demo/index.html#2)
   - Smaller image's transparency was also removed, setting them at `524px x 524px` for testing.)
6. Comic images now resize and centers themselves in the middle of the panel but still maintains it's original quality.
7. Background image is now shown completely regardless of screen size.


###### Unstable functions and known issues:
- Accessibility to a specific comic through the `# + number` indication of the URL tag sometimes does not update immediately under certain condition **UNLESS** the url is entered again. The website directs you to the appropriate image on the second try.

###### On the to do list:
- [ ] Convert menu images to SVGs.
- [ ] Design and develop loading screen for images.
- [ ] [Develop javascript for loading screen.](https://github.com/desandro/imagesloaded) 
- [ ] Implement dynamic `about`, `author`, and `archive` sections.
- [ ] Create separate demo reels showcasing different transition effects for various elements.
- [ ] Develop javascript code to indicate first and last chapters via the archive.
- [ ] Implement an `onClick()` function for nav arrows.
- [ ] Apply the full gallery with new images.
- [ ] Play around with `datasets` to implement background change functionality.
- [ ] Design caption and comment area.
- [ ] Troubleshoot issues.
- [ ] Start developing wordpress plugin.
