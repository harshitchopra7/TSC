/// <reference types="cypress" />

import { home, askShare, buySell } from './urls';

describe('Right Side Bar tests', () => {

    context('Desktop Tests', () => {

        beforeEach(() => {
            cy.visit(askShare)
            cy.viewport(1440, 900)
        })

        it('Right side bar should be visible', () => {
            cy.get('div.rightmenu').should('be.visible')
        })

        it('Right menu image and its text should be visible', () => {
            cy.get('div.rightmenu_top > img').should('be.visible')
            cy.get('div.rightmenu_top > p').should('be.visible')
        })

        it('Right menu address and phone number should be visible', () => {
            cy.get('p.rightmenu_add').should('be.visible')
            cy.get('p.rightmenu_add_desc').should('be.visible')
        })

    })

    context('Mobile Tests', () => {
        beforeEach(() => {
            cy.viewport('iphone-xr')
        })

        it('Left menu should be hidden', () => {
            cy.get('div.rightmenu').should('be.hidden')
        })
        
    })

})