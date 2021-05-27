# Awards

## Grand Certificate of Awfulness for Worst Website
### 
[Nicole Chan](https://github.com/RileyHunter/best-worst-website/pull/8)

### Most Hideous
#### Most hideous to look at
[Emily Byron-Brodie](https://github.com/RileyHunter/best-worst-website/pull/5)

### Most Wasted Effort 
#### Implemented with the highest standards of code or the most complexity
[Mathew Donley](https://github.com/RileyHunter/best-worst-website/pull/3)

### Least Legible
#### Most difficult or frustrating to try and read
[Michael O'Hara](https://github.com/RileyHunter/best-worst-website/pull/7)

### Most Creative
#### Very creative (in a nasty way)
[Emily Byron-Brodie](https://github.com/RileyHunter/best-worst-website/pull/5)

### Least Changes
#### Proved how efficiently they could showcase bad code and design
[Jagmeet Kaur](https://github.com/RileyHunter/best-worst-website/pull/6)

### Worst User Experience
#### Flagrantly violated Nielsen's Usability Heuristics
[Nicole Chan](https://github.com/RileyHunter/best-worst-website/pull/8)

### Great Minds
#### Most like someone else's website
[Mathew Donley](https://github.com/RileyHunter/best-worst-website/pull/3) & [Riley Hunter](https://github.com/RileyHunter/best-worst-website/pull/4)

### This Feels Sadly Familiar
#### Not finishing on time, or not following the instructions
[Jagmeet Kaur](https://github.com/RileyHunter/best-worst-website/pull/6)

---


# best-worst-website

An arena for the "best worst" Hello World webpage you can think of

# Project Brief

## Overview

This repository contains code for a simple webpage - in fact, nearly the simplest webpage possible. All it does is print "Hello World" to the middle of the screen. Your mission, should you choose to accept it, is to submit a Pull Request to this repository containing the WORST possible contribution while preserving this functionality.

## Rules and Guidelines

1. Contributions MUST be made as pull requests from a new branch to this repo (see Getting Started).
   - Branches should be named identifiably (for example, with your name).
   - [An example PR has been made to the repo already for reference](https://github.com/RileyHunter/best-worst-website/pull/2)
1. The resulting webpage MUST render the words "Hello, World!" legibly in English on the current build of Google Chrome within a reasonable timeframe. You are otherwise completely free to decide how this happens, or what else might happen while doing it.
1. While this will not be strictly policed, this competition is intended to start on 2021-05-26 at 1530h NZST and comprise about 90 minutes work.
1. Collaboration is discouraged - this is intended to be an individual exercise in creativity.
1. Your branch should be simple to clone and run.
   - No 20GB `node_modules` folders please.
   - If instructions are required to clone/build/run your branch, please include them in place of this `README.md` file.

## Judging

For judging, we will checkout each contributor's branch and open `index.html`, observe the results, and encourage the contributor to brag about what they achieved and how. There will be a short discussion session about each page where code and developer tools will be available to all to inspect. Various prizes will be awarded by the judges for various reasons; for example, prizes may be awarded for:

- Most hideous
- Most convoluted or computationally complex
- Best idea that definitely should not be used like this
- Most reminiscent of [enterprise Java](https://github.com/EnterpriseQualityCoding/FizzBuzzEnterpriseEdition)

Additionally there will be, by consensus opinion, a grand prize of "Worst Website" awarded.

# Getting Started

To contribute, you will need [git](https://git-scm.com/downloads) installed.
Navigate to a sensible place to store source code (directly in C:/ #yolo), open Powershell/Bash, and run the following command:

`git clone https://github.com/RileyHunter/best-worst-website.git`

Then, create a new branch:

`git checkout -b <YOUR_BRANCH_NAME_HERE>`

Sync it to the remote repo:

`git push --set-upstream origin <YOUR_BRANCH_NAME_HERE>`

Make your changes, and frequently along the way (or at least at the end), commit your changes and sync:

```
git add .
git commit -m "<YOUR_COMMIT_MESSAGE_HERE>"
git push
```

Once you're all ready to go make sure you've done the above step, then start a pull request into `main` by going to [GitHub's branches page for the repo](https://github.com/RileyHunter/best-worst-website/branches), locating your branch by name, clicking "New pull request", then filling out and submitting the form.

# Disclaimer

I did stick to loosley to a timeframe on this as to not spend too much time on it. As such the current bugs are as follows:

1. SetIntervals stack ontop of each other everytime you press scramble - I need to go have a good look at how setInterval works in the callstack and the event loop.
2. The hack way in which i have squished the entities together means that zooming in and out of the page / going down below 600ish screen size leads to a 'MissingNo' effect, looks cool but not intentional.
