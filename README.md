# DevIT_Playwright

npx playwright test ./tests/adding_uses.spec.js --project chromium --headed //для відобреження тесту

npx playwright test --workers 3 //для зміни кількості вікон в яких буде проходити перевірка тесту

workers: process.env.CI ? 1 : undefined, щоб всі тести проходили в 3 або 4 вікнах одночасно потрібно зімінити значення 'undefined' на потрібне у файлі 'playwright.config.js'

