# Marvel Comics App

Welcome to the best comics app you'll ever find!

This is an app created with React Native 0.62.2, following some principles of the [Atomic Design Pattern](https://bradfrost.com/blog/post/atomic-web-design/).

![](gifexample.gif)

## Requirements

In order to run this project, make sure you have the following:

- [NodeJS](https://nodejs.org/en/)
- [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12)
- [Cocoapods](https://cocoapods.org/)
- [Git](https://git-scm.com/)

## Features

- Simple Onboarding
- Hero search by exact name
- Comics listing (Name, price, issue number, cover)
- Map showing nearby stores (IOS only, check troubleshooting)

## Installation

- `git clone` this repo
- cd project folder
- `npm install` or `yarn` -> to install dependencies

### IOS only

- `cd ios`
- `pod install` -> in order to install pod dependencies

## Running

From projects root run:

- `npx react-native run-ios`

or

- `npx react-native run-android`

### Disclaimers

Due to the nature of the test and lack of time, i've tested IOS only and using simulators, because of that for now Android doesn't have Maps support.

If you face any problems using the Map feature on the simulator, just follow this steps:

- Simulator > Features > Location > Custom Location

### TODO's

My plan is to keep evolving this project and scaling, so, the next steps are:

- Improve search feature to support search by terms and not exact name.
- Add Android support for maps feature
- Profile page for heroes and save previous searchs as 'favorites'
- Add tab navigation
- Add recoiljs to manage global state
- Make a truly login flow apart from onboarding
- Improve onboarging and images
- Improve and test Maps feature.
