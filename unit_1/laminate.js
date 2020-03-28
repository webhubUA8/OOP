let laminate = {
   "color": 'beige',
   "thickness": 10,
   "suitable": 'ok',
   "finish": 'gloss',
   "flitting_mechanism": 'drop loc',
   "guaranteed": 1000,
   "resistance": 33,
   "unit_coverage": 2.047,
   __proto__: goods,
   
   "getBoard": function (m) {
      
      return Math.ceil(m / ((this.size_x * this.size_y)/1000000));
      
   },
   "getUnitCount": function (m2) {
      return Math.ceil(m2 / this.unit_coverage);
   }
}



