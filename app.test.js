const returnCapital = require('./app')

test('Returns the capital of a given country or region.', () => {
    expect(returnCapital("Jamaica")).toBe("Kingston")
    expect(returnCapital("Guyana")).toBe("Georgetown")
    expect(returnCapital("Trinidad and Tobago")).toBe("Port of Spain")
    expect(returnCapital("Guyana")).toBe("Georgetown")
    expect(returnCapital("Jamaica")).toBe("Kingston")
    expect(returnCapital("Guyana")).toBe("Georgetown")
})