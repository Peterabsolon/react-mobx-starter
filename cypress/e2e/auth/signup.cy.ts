/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import { ROUTES } from '~/constants'

describe('Signup', () => {
  it('can redirect to login', () => {
    cy.visit(ROUTES.SIGNUP)
    cy.findByRole('link', { name: 'Login' }).click()
    cy.url().should('include', ROUTES.LOGIN)
  })
})
