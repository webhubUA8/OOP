class SuperBox extends Box {
   constructor(x, y, z, color) {
      super(x, y, z, color);
   }
   inBox(x, y, z) {
      if (super.inBox(x, y, z)) {
         return true;
      }
      else if (this.x > x && this.y > y) {
         return true;
      }
      else if (this.x > x && this.z > z) {
         return true;
      }
      else if (this.y > y && this.z > z) {
         return true;
      }
      else {
         return false;
      }

   }
}