/// <reference types="cypress" />

describe('Tests', () => {
    it('Landing page looks good on desktop', () => {
        cy.viewport(1280, 720)
        cy.visit('http://localhost:3001/')
        cy.contains('Welcome to Takshshila').should('exist')
    })
    
    // it('login button working', () => {
    //     // cy.viewport(1280, 720)
    //     // cy.visit('http://localhost:3001/')
    //     cy.get('div.nav_right > button') .contains('LOG IN')
    //     cy.url().should('eq', 'http://localhost:3001/ask-share')
    //     // cy.contains('Ask').should('exist')
    // })

    it('Left menu at ask-share page working', () => {
        cy.viewport(1280, 720)
        cy.visit('http://localhost:3001/ask-share')
        cy.get('div.leftmenu_mid_elements > p').contains('Ask')
    })

    it('Left menu ask button working', () => {
        cy.viewport(1280, 720)
        cy.visit('http://localhost:3001/buy-sell')
        cy.get('div.leftmenu_mid_elements > p').contains('Ask').click()
        cy.url().should('eq', 'http://localhost:3001/ask-share')
    })

    it('Left menu share button working', () => {
        cy.viewport(1280, 720)
        cy.visit('http://localhost:3001/buy-sell')
        cy.get('div.leftmenu_mid_elements > p').contains('Ask').click()
        cy.url().should('eq', 'http://localhost:3001/ask-share')
    })

    it('Ask-share input field working', () => {
        cy.viewport(1280, 720)
        cy.visit('http://localhost:3001/ask-share')
        cy.get('div.feedmid_top_input > input').type("Input field testing")
    })

    it('Left menu at buy-sell page working', () => {
        cy.viewport(1280, 720)
        cy.visit('http://localhost:3001/buy-sell')
        cy.get('div.leftmenu_mid_elements > p').contains('Buy')
    })

    it('Left menu buy button working', () => {
        cy.viewport(1280, 720)
        cy.visit('http://localhost:3001/ask-share')
        cy.get('div.leftmenu_mid_elements > p').contains('Buy').click()
        cy.url().should('eq', 'http://localhost:3001/buy-sell')
    })

    it('Left menu sell button working', () => {
        cy.viewport(1280, 720)
        cy.visit('http://localhost:3001/ask-share')
        cy.get('div.leftmenu_mid_elements > p').contains('Sell').click()
        cy.url().should('eq', 'http://localhost:3001/buy-sell')
    })

    it('Sell button and sell form inputs working', () => {
        cy.viewport(1280, 720)
        cy.visit('http://localhost:3001/buy-sell')
        cy.get('div#blurr > button').click()
        cy.get('input.itemname_input').type("Macbook Air")
        cy.get('input.itemdesc_input').type("Perfect working condition")
        cy.get('input.itemprice_input').type(65000)
        cy.get('input.itemphone_input').type(9876768987)
        cy.get('input.itemimage_input').type("https://cnet4.cbsistatic.com/img/7btfz6GJRvV6uOLJOvjWtbFTHUQ=/2020/11/16/a8e0e691-035a-4298-8366-f3b74e1f3792/img-1759.jpg")
        cy.get('div.feedmid_top_btnn_right > button').click()
    })
    
})