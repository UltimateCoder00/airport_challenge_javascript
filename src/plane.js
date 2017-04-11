'use strict';

function Plane() {
  this._landed = true;
}

Plane.prototype.takeOff = function() {
  this._landed = false;
}

Plane.prototype.land = function() {
  this._landed = true;
}
