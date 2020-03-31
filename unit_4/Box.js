class Box {
   constructor(x, y, z, color) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.color = color;
   }
   inBox(x, y, z) {
      if (this.x > x && this.y > y && this.z > z) {
         return true;
      }
      return false;
   }  
}