
it('input width,height',()=>{
    expect(rectanglePerimeter(2,4)).toBe(12);
    expect(rectanglePerimeter(2, 4)).toBe(12);
expect(rectanglePerimeter(3, 5)).toBe(16);
expect(rectanglePerimeter(10, 20)).toBe(60);
expect(rectanglePerimeter(7, 2)).toBe(18);
expect(rectanglePerimeter(1, 1)).toBe(4);
expect(rectanglePerimeter(1, 5)).toBe(12);
expect(rectanglePerimeter(4, 1)).toBe(10);
expect(rectanglePerimeter(100, 100)).toBe(400);
expect(rectanglePerimeter(0.5, 2)).toBe(5);
})
function rectanglePerimeter(width,heigth){
    return (width*2)+(heigth*2)
}