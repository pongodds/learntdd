it("input number should be return length",()=>{
    expect(numLength(1)).toBe(1);
    expect(numLength(10)).toBe(2);
})
function numLength(num){
    return num.toString().length;
}