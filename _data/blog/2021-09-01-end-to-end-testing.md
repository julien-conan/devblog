---
template: BlogPost
path: /end-to-end-testing-with-cypress
date: 2021-08-25T08:35:30.125Z
title: 'End to end testing with Cypress'
thumbnail: /assets/2021-09-01-end-to-end-testing-cypress-react.png
metaDescription: 
---

# What is smoke testing?

Maybe have you heard about confidence testing, sanity testing, build verification test or build acceptance test. They all refers to smoke testing, which consists in covering a software most important functionalities. They are a subset of test cases, used to aid assessment of whether main functions appear to work correctly.

Smoke tests answers basic questions like: "_Is the homepage opened?_", "_Does the page footer appears in the window?_".

Being kept simple, they can be run quickly and provide **fast feedback** rather than running more extensive test suites.

A daily build and smoke test is among industry best practices. Microsoft claims that after code reviews, "**_smoke testing is the most cost-effective method for identifying and fixing defects in software_**".

# What is Cypress?

Cypress is a front end testing tool built for modern application development.

Compared to Selenium, Cypress is executed in the same run loop as the tested application. There is a Node server process behind Cypress, which renders constant communication, synchronization and tasks performance on behalf of the application code source. Browser tasks are being executed with Chromium and computer tasks are being executed by the Node server in background, which makes the tests run faster and with all actions available from Cypress in the same context.

> Cypress operates at the network layer by reading and altering web traffic on the fly. This enables Cypress to not only modify everything coming in and out of the browser, but also to change code that may interfere with its ability to automate the browser.

It has to be considered from the developer or the CI (Continuous Integration) sides, both of them being usefull at different stages of production. You can also go further from E2E (End-To-End) testing with component mocking for example. Report could be generated on both sides, also with Cypress Studio which can run dashboard and parallel jobs. It can also take screenshots, record videos, operate on file system and network operations.

# Setup

```Javascript
npm install cypress --save-dev
```
<br />

# Write

```Javascript
describe('ToDoMVC', function () {
  beforeEach(function () {
    cy.visit('http://localhost:8888/')

    cy.get('.new-todo')
      .type('buy some cheese {enter}')
      .type('feed the cat {enter}')
      .type('book a doctors appointment {enter}')
  })

  it.only('hides "Clear Completed" with nothing checked', function () {
    cy.get('.todo-list li').eq(1).find('.toggle').check()
    cy.get('.clear-completed').should('be.visible').click()
    cy.get('clear-completed').should('not-exist')
  })
})
```
<br />

# Run

```Javascript
npm run cypress:open
```
<br />

# Debug

Debug your tests directly in the browser with Cypress UI, use Inspection to see HTML components in details and how to fix them.

# Ask for help

Don't hesitate to get in touch with me if you need any help to configure or analyse Cypress results, I will be glad to try to help you.

<br />

**More infos**

[Cypress in a Nutshell](https://www.youtube.com/watch?v=LcGHiFnBh3Y)  
[Cypress Official Documentation](https://docs.cypress.io)  
[Snapshot Testing: Benefits and Drawbacks](https://www.sitepen.com/blog/snapshot-testing-benefits-and-drawbacks)
