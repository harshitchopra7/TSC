/// <reference types="cypress" />

import { home, askShare, buySell } from './urls';

describe('Ask-Share input form test', () => {

    var inputWorking = () => {
        it('Sell button and sell form inputs should work', () => {
            cy.get('div#blurr > button').click()
            cy.get('input.itemname_input').type("Macbook Air")
            cy.get('input.itemdesc_input').type("Perfect working condition")
            cy.get('input.itemprice_input').type(65000)
            cy.get('input.itemphone_input').type(9876768987)
            cy.get('input.itemimage_input').type("https://cnet4.cbsistatic.com/img/7btfz6GJRvV6uOLJOvjWtbFTHUQ=/2020/11/16/a8e0e691-035a-4298-8366-f3b74e1f3792/img-1759.jpg")
            cy.get('div.feedmid_top_btnn_right > button').click()
        })
    }

    context('Desktop tests', () => {
        beforeEach(() => {
            cy.viewport(1440, 900)
            cy.visit(buySell)
        })
        inputWorking();
    })

    context('Desktop tests', () => {
        beforeEach(() => {
            cy.viewport('iphone-xr')
            cy.visit(buySell)
        })
        inputWorking();
    })

})