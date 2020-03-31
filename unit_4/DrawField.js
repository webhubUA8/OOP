class DrawField {
   constructor(h, w, id) {
      this.h = h;
      this.w = w;
      this.id = id;
   }
   create(elem) {
      let canvaz = document.createElement('canvas');
      canvaz.setAttribute('id', this.id);
      canvaz.style.border = '1px solid black';
      canvaz.width = this.w;
      canvaz.style.width = this.w + 'px';
      canvaz.height = this.h;
      canvaz.style.height = this.h + 'px';
      elem.append(canvaz);
      return canvaz;
   }
}