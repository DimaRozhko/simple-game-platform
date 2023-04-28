import { defineConfig } from 'cypress'
import { includes } from 'cypress/types/lodash'


export default defineConfig({
  
  e2e: {
    'baseUrl': 'http://localhost:4200'
  },
  
  
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts',
    // fileServerFolder: ''
    // supportFile: '**/component.ts'
    supportFile: './cypress/support/component.ts'
  }
})
