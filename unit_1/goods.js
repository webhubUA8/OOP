let goods = {
   "price": 255.3,
   "title": 'drywall',
   "image": 'https://tssd.com.ua/upload/iblock/36c/36c6a192137bcdc01ced561fc81e8805.png',
   "producer": 'knauf',
   "country": 482,
   "description": ' ГКПВ 12,5 мм Влагостойкие строительные плиты КНАУФ применяются во всех сферах для внутренней отделки помещений как экономичная обшивка в системах сухого строительства в умеренно влажных помещениях.',
   "weight": 25,
   "height": 1200,
   "width": 3000,
   "depth": 12.5,
   "unit": 'sheet',
   "art": 12134456,
   "getCost": function (count) {
      return this.price * count;
   }
}
