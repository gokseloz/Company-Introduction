## Company-Introduction
<ul>
<li>A website made by following an online course</li>
<li>Vast majority of the codes I implemented by myself.</li>
<li>When I got stuck and could not find out any way to solve the problem, I took a look at the completed project's code or search online</li>
</ul>

## Why did I work on this project?
<ul>
<li>I made this website in order to improve my HTML, CSS and JS skills</li>
</ul>

## What did I learn from this project?

* Difference between **children** and **childNodes**, **parentElement** and **parentNodes**
- Nice effect by using **transform:scale()** and **transform-origin**
  - applied: team section => about me after clicking the button top-right
- Css **shape-outside** property.(letting content to wrap around the objects)
  - applied: team section => about me => first letter
  - firefox has nice visualization for shape-outside property
- Usage of **display:flow-root**
  - applied: team section => about me. Because the first letter of the text has **float:left** property
  - it enables the the container to **clear floats**
- Flipable card eseential properties
  - applied: customer section
  - flipable card container(parent) - must have  **perspective()** value
  - flipable card - must have **transform-style:preserve-3d**
  - flipable card front face - must have **backface-visibility:hidden**
  - flipable card back face - must have **backface-visibility:hidden**
- Usage of **em** unit
  - applied: team and customer section => each team member and customer
- Some **web-accessibility** ideas
  - applied: tab-index, aria-required, aria-label, alerts for contact form
  - webaim.org

## How did I do this?
### Technologies
<ul>
<li>HTML, CSS & JavaScript.</li>
<li>For CSS: LESS preprocessor is applied. In order to compile LESS files to CSS, node-sass with npm is utilized.</li>
<li>For JS: Vanilla JS is applied</li>
</ul>

### Responsivity
<ul>
<li>Fully Responsive</li>
</ul>

## Live demo
<ul> 
<li><a href="https://company-introduction.vercel.app/" target="_blank">See live demo</a></li>
</ul>
