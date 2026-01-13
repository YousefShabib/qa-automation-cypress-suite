describe('Task 1: Selectors', () => {

    describe('Task 1 - Best Selectors', () => {

        beforeEach(() => {
          cy.visit('https://demo.productionready.io/#/register')
        })
      
        it('Check conduit logo ', () => {
          cy.get('a.navbar-brand').should('contain.text', 'conduit')
        })
        
        it('Check home button ', () => {
            cy.get('a.nav-link').should('contain.text', 'Home')
          })

        it('Check Sign Up button - nav', () => {
            cy.get('.nav-link.active').should('contain.text', 'Sign up')


        })

        it('Check Sign up Tittle- Mid screen', () => {
          cy.get('.text-xs-center').first().should('contain.text', 'Sign up')
            
        });
        
        it('Check have an account', () => {
          cy.get('.text-xs-center').should('contain.text', 'Sign up')
            
        });

        it('Check username box', () => {
          cy.get('input[placeholder="Username"]').should('be.visible').and('have.attr', 'type', 'text')   
        });

        it('Check Email box', () => {
          cy.get('input[placeholder="Email"]').should('be.visible')
            
        });

        it('Check Password input', () => {
          cy.get('input[type="password"]').should('be.visible')
        });

        it('Check Sign up button - done', () => {
          cy.contains('button', 'Sign up').should('be.visible')
            
        });

        it('Check Conduit logo-footer', () => {
          cy.get('footer').find('a.logo-font').should('contain.text', 'conduit')
        });

        it('Check footer attribution text', () => {
          cy.get('footer').find('span.attribution').should('be.visible')
        });        
        

    });
      
    });