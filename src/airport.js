function Airport(capacity) {

  var defaultCapacity = 10;

  this._planes = []

  if (capacity == null) {
    this._capacity = defaultCapacity;
  } else {
    this._capacity = capacity;
  }

}

Airport.prototype.accept = function(plane) {
  if (this._planes.length >= this._capacity) {
    throw Error("Airport Full!");
  }
  else {
    plane.land();
    this._planes.push(plane);
  }
}

Airport.prototype.release = function(plane) {
  plane.takeOff();
  this._planes.pop();
}



// class Airport
//   attr_reader :capacity, :weather
//   DEFAULT_CAPACITY = 10
//
//   def initialize(capacity = DEFAULT_CAPACITY)
//     @capacity = capacity
//     @planes = []
//     @weather = Weather.new
//   end
//
//   def land(plane)
//     fail 'Airport capacity is full' if full?
//     fail 'The plane has already landed' if in_airport?(plane)
//     fail 'The weather is too stormy to land' if is_sunny?
//     plane.land
//     @planes << plane
//   end
//
//   def take_off(plane)
//     fail 'The plane has already taken off' unless in_airport?(plane)
//     fail 'The weather is too stormy to take off' if is_sunny?
//     plane.take_off
//     @planes.delete(plane)
//   end
//
//   def in_airport?(plane)
//     @planes.include?(plane)
//   end
//
//   def is_sunny?
//     weather.is_sunny?
//   end
//
//   private
//   attr_reader :planes
//
//   def full?
//     @planes.count >= capacity
//   end
//
// end
