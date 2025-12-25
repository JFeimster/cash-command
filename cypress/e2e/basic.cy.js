describe('Moonshine Capital Smoke Test', () => {
  
  beforeEach(() => {
    // Start at the homepage before each test
    cy.visit('/');
  });

  it('loads the homepage successfully', () => {
    // 1. Check Page Title
    cy.title().should('include', 'Moonshine Capital');
    
    // 2. Check Hero Section
    cy.get('h1').should('contain', 'Compare funding options');
    
    // 3. Verify CTA Buttons exist
    cy.contains('Find My Best Options').should('be.visible');
  });

  it('navigates to the directory page', () => {
    // 1. Click the main CTA
    cy.contains('Find My Best Options').click();

    // 2. Verify URL changed
    cy.url().should('include', '/directory');

    // 3. Verify Directory Header
    cy.get('h1').should('contain', 'Provider Directory');
  });

  it('loads providers in the directory', () => {
    cy.visit('/directory');

    // 1. Check if the grid exists
    // (Assuming ProviderGrid component renders with specific class or elements)
    // We check for at least one provider card by looking for the "Apply Now" text which is common
    cy.contains('Apply Now', { timeout: 10000 }).should('exist');
  });

  it('can navigate to the About page', () => {
    // 1. Find nav link
    cy.get('nav').contains('About').click();
    
    // 2. Verify URL
    cy.url().should('include', '/about');
    
    // 3. Verify content
    cy.get('h1').should('contain', 'Distilling the Complex');
  });

  it('has a working mobile menu', () => {
    // 1. Set Viewport to mobile
    cy.viewport('iphone-x');
    
    // 2. Click Toggle Button (using aria-label or identifying class)
    cy.get('button[aria-label="Toggle menu"]').click();
    
    // 3. Check if menu is visible
    cy.contains('Get Funded').should('be.visible');
  });
});