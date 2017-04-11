describe('Plane', function() {

  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  describe('initial attribute', function() {
    it('it is on the ground', function() {
      expect(plane._landed).toEqual(true);
    });
  });

  describe('take off', function() {
    it('it is no longer landed after take off', function() {
      plane.takeOff();
      expect(plane._landed).toEqual(false);
    });
  });

  describe('land', function() {
    it('lands after landing', function() {
      plane.takeOff();
      plane.land();
      expect(plane._landed).toEqual(true);
    });
  });

})
