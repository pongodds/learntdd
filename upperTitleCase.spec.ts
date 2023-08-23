it("input word should return upper first character",()=>{
    expect(upperFirstWord('THE Quick BROWN Fox')).toBe('The Quick Brown Fox');
    expect(upperFirstWord(' ')).toBe(' ');
})
function upperFirstWord(word){
    if (word == ' ' ){return ' ' }
    let words = word.split(' ')
    let result = words.map((item)=>{
        
        let firstWord = item[0].substring(0,1).toUpperCase()
        let append = item.substring(1,item.length).toLowerCase()
        item = firstWord+append
        return item
    })
    return String(result.join(' '))
}