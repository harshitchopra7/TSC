/// <reference types="cypress" />

import { home, askShare, buySell } from './urls';

describe('Navbar Tests', () => {

    context('Desktop Tests', () => {

        beforeEach(() => {
            cy.visit(home)
            cy.viewport(1440, 900)
        })

        it('TSC in nav should be visible', () => {
            cy.contains("TSC").should('be.visible')
        })

        it('Login and other elements should be visible', () => {
            cy.get('div.nav_right > button > span').should('be.visible')
        })

    })

    context('Mobile Test', () => {

        beforeEach(() => {
            cy.viewport('iphone-xr')
            cy.visit(home)
        })

        it('TSC in nav should be visible', () => {
            cy.contains("TSC").should('be.visible')
        })

        it('Login and other elements should be hidden', () => {
            cy.get('div.nav_right > button > span').should('not.be.visible')
        })

    })
})