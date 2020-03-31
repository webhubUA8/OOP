class Rect extends DrawField {
   constructor(h, w, id) {
      super(h, w, id);
   }
   create(elem) {
      super.create(elem);
   }
   fillRect(elem, x, y, w, h) {
      if (document.querySelector('#one')) {
         let canvas = document.querySelector('#one');
         let ctx = canvas.getContext('2d');
         ctx.moveTo(x, y);
         ctx.strokeStyle = 'red';
         ctx.lineTo(50, 50);
         ctx.lineTo(150, 50);
         ctx.lineTo(200, 100);
         ctx.stroke();
      }
      
   }
}