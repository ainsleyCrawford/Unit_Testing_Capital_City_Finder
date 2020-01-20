const returnCapital = require('./app')

test('Returns the capital of a given European country or region.', () => {
    expect(returnCapital("Bosnia and Herzegovina")).toBe("Sarajevo")
    expect(returnCapital("Cyprus")).toBe("Nicosia")
    expect(returnCapital("Lithuania")).toBe("Vilnius")
})
test('Returns the capital of a given North American country or region.', () => {
    expect(returnCapital("Cuba")).toBe("Havana")
    expect(returnCapital("Jamaica")).toBe("Kingston")
    expect(returnCapital("Quebec")).toBe("Quebec City")
})
test('Returns the capital of a given South American country or region.', () => {
    expect(returnCapital("Guyana")).toBe("Georgetown")
    expect(returnCapital("Quebec")).toBe("Quebec City")
    expect(returnCapital("Suriname")).toBe("Paramaribo")
})
test('Returns the capital of a given African country or region.', () => {
    expect(returnCapital("Liberia")).toBe("Monrovia")
    expect(returnCapital("Mozambique")).toBe("Maputo")
    expect(returnCapital("Senegal")).toBe("Dakar")
})
test('Returns the capital of a given Asian country or region.', () => {
    expect(returnCapital("Kyrgyzstan")).toBe("Bishkek")
    expect(returnCapital("South Korea")).toBe("Seoul")
    expect(returnCapital("Taiwan")).toBe("Taipei")
})
test('Returns the capital of a given Oceanian country or region.', () => {
    expect(returnCapital("Australia")).toBe("Canberra")
    expect(returnCapital("New Zealand")).toBe("Wellington")
    expect(returnCapital("Vanuatu")).toBe("Port Vila")
})