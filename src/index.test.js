const moduleName = require('.')
const { name } = require('../package.json')

describe('Main module', () => {
  it('should show module name', () => {
    expect(moduleName).toBe(name)
  })
})
