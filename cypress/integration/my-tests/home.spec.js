/// <reference types="cypress" />

import { home, askShare, buySell } from './urls';

describe('Homepage Tests', () => {
    var x = () => {
        it('Homepage should be visible', () => {
            cy.get('div.homepage').should('be.visible')
        })

        it('A circular image should be visible', () => {
            cy.get('div.banner_right > img').should('be.visible')
        })

        it('Heading should be visible', () => {
            cy.get('p.homepage_title1').should('be.visible')
            cy.get('p.homepage_title1').contains('Welcome to Takshshila')
        })

        it('Subheading should be visible', () => {
            cy.get('p.homepage_title2').should('be.visible')
            cy.get('p.homepage_title2').contains('Keep up with all')
        })

        it('Description should be visible', () => {
            cy.get('p.homepage_title3').should('be.visible')
            cy.get('p.homepage_title3').contains('Communicate, Share knowledge')
        })

        it('Footer should be visible', () => {
            cy.get('div.footer').should('be.visible')
            cy.get('div.footer').contains('Made with')
        }
    )}

    context('Desktop tests', () => {
        beforeEach(() => {
            cy.visit(home)
            cy.viewport(1440, 900)
        })
        x();
    })

    context('Mobile Tests', () => {
        beforeEach(() => {
            cy.visit(home)
            cy.viewport('iphone-xr')
        })
        x();
    })

})