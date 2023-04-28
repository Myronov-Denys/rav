# DevIT_Playwright


## // Run tests

    // Run all tests
`npx playwright test `

    // Run only 1 spec (for example socialMedia) 
`npx playwright test socialMedia.spec.js`

    // Run with visual browser
`npx playwright test --headed`

    // Run debug
`npx playwright test --debug`

    // To change the number of windows in which the test will be checked
`npx playwright test --workers 3`
Or change on the "playwright.config.js" document

## // The number of windows of parallel tests changes in the "playwright.config.js" document

## // To change the maximum waiting time for actions or completion of 1 test, see the "playwright.config.js" document


workers: process.env.CI ? 1 : undefined, in order for all tests to run in 3 or 4 windows at the same time, you need to change the value 'undefined' to the required amount in the file 'playwright.config.js'

## Choosing an environment for running the test

To run tests on different envs, change
`this.env = ENV.dev`; on a "testValue.js"

Where value
- `.dev` - run tets on the Dev env 
`this.env = ENV.dev`
- `.stage` - run tets on the Staging env 
`this.env = ENV.stage`
- `.live` - run tets on the Prod env
`this.env = ENV.live`