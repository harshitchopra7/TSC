/// <reference types="cypress" />

import { home, askShare, buySell } from './urls';

describe('Left Side Bar tests ', () => {
    context('Desktop Tests', () => {

        beforeEach(() => {
            cy.visit(askShare)
            cy.viewport(1440, 900)
        })

        it('Left menu at ask-share page should work', () => {
            cy.get('div.leftmenu_mid_elements > p').contains('Ask')
        })
    
        it('Left menu ask button should work', () => {
            cy.get('div.leftmenu_mid_elements > p').contains('Ask').click()
            cy.url().should('eq', askShare)
        })
    
        it('Left menu share button should work', () => {
            cy.get('div.leftmenu_mid_elements > p').contains('Ask').click()
            cy.url().should('eq', askShare)
        })
        it('Left menu at buy-sell page should work', () => {
            cy.get('div.leftmenu_mid_elements > p').contains('Buy')
        })
    
        it('Left menu buy button should work', () => {
            cy.get('div.leftmenu_mid_elements > p').contains('Buy').click()
            cy.url().should('eq', buySell)
        })
    
        it('Left menu sell button working', () => {
            cy.get('div.leftmenu_mid_elements > p').contains('Sell').click()
            cy.url().should('eq', buySell)
        })
    })

    context('Mobile Tests', () => {
        beforeEach(() => {
            cy.viewport('iphone-xr')
        })

        it('Left menu should hidden', () => {
            cy.get('div.leftmenu_mid_elements > p').should('be.hidden')
        })

    })
})