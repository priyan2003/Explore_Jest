test('truthy operators',() =>{
    var name = "algocamp";
    var n = null;
    expect(n).toBeNull();
    expect(name).not.toBeNull();
    expect(name).toBeTruthy();
    expect(n).toBeFalsy();
})