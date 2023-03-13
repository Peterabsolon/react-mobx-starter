/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import { ROUTES } from '~/constants'

describe('Login', () => {
  it('can redirect to signup', () => {
    cy.visit(ROUTES.LOGIN)
    cy.findByRole('link', { name: 'Signup' }).click()
    cy.url().should('include', ROUTES.SIGNUP)
  })
})
