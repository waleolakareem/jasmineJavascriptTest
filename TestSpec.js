describe("A suite", function() {
  it("returns an array", function() {
    var data = [4,2,[1,3]];
    var result = flatten(data)

    expect(result).toEqual(jasmine.any(Array))
  });

  describe("when given a string", function() {
    it("should throw an error", function () {
      var data = "[4,3,5,6]";

      expect(function(){
        flatten(data)
      }).toThrowError("Arrays only");
    });
  });

  it("flattens a nested array", function() {
    var data = [5,6,7,[3,4],9]
    var expected = [5,6,7,3,4,9]

    var result = flatten(data);

    expect(result).toEqual(expected);
  });
});
