it('func should be all upper',()=>{
    expect(chkUpperCase('Yes')).toBe(false);
    expect(chkUpperCase('YES IT IS')).toBe(true);
    expect(chkUpperCase('')).toBe(true);
    expect(chkUpperCase('555')).toBe(true);
})
function chkUpperCase(word){ 
}