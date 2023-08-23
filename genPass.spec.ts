it("generate password",()=>{
    expect(isAcceptAblePass('short')).toBe(false)
    expect(isAcceptAblePass('muchlonger')).toBe(true)
})
function isAcceptAblePass(pass) {
    return pass.length > 6
}
