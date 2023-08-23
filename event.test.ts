it('even should be true',()=>{
    expect(isEven(2)).toBe(true);
    expect(isEven(3)).toBe(false);
    expect(isEven(4)).toBe(true);
    expect(isEven(5)).toBe(false);
    expect(isEven(99)).toBe(false);
    expect(isEven(100)).toBe(true);
})

function isEven(number){
    if(number%2 == 1) 
        return false
    return true
}
