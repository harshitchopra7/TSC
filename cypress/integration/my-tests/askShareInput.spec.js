/// <reference types="cypress" />

import { home, askShare, buySell } from './urls';

describe('Ask-Share input form test', () => {

    var inputWorking = () => {
        it('Ask-share input field should work', () => {
            cy.viewport(1440, 900)
            cy.visit(askShare)
            cy.get('div.feedmid_top_input > input').type("Input field testing")
        })
    }

    context('Desktop tests', () => {
        beforeEach(() => {
            cy.visit(askShare)
            cy.viewport(1440, 900)
        })
        inputWorking();
    })

    context('Desktop tests', () => {
        beforeEach(() => {
            cy.visit(askShare)
            cy.viewport('iphone-xr')
        })
        inputWorking();
    })

})