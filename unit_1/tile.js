let tile = {
   "material": 'porcelain tile',
   "type": 'floor',
   "size_x": 420,
   "size_y": 420,
   "outdoor": true,
   "color": 'beige',
   "cover": 'matte',
   "images": [
      'https://keramasvit.com.ua/image/cache/catalog/Cersanit/Otis/1SUAROCErsanitfoto2-820x820.jpg', 'https://keramasvit.com.ua/image/cache/catalog/Cersanit/Otis/1SUAROCErsanitfoto3-820x820.jpg'
   ],
   "imperialSize": function () {

      let sizes = [];
      sizes.push(parseFloat((this.size_x / 25.4).toFixed(2)));
      sizes.push(parseFloat((this.size_y / 25.4).toFixed(2)));

      return sizes;
       
   },
   "isSquare": function () {
      if (this.size_x == this.size_y) {
         return true;
      } 
      else {
         return false;
      }
   },
   __proto__: goods
}

