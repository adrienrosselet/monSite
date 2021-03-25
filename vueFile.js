var app = new Vue({
    el: '#app',
    data: {
        headerTitres: [
            {href:'#', name: 'Home'},
            {href:'./about.html', name: 'About'},
            {href:'#', name: 'Portfolio'},
            {href:'#', name: 'Contact'},
        ],
        hashtags: [
          'None',
          'Electronics',
          'Woodworking',
          'Recycling',
          '3D Printing',
          'Programming',
          'Energy harvesting'
        ],
        selected: 'None',
        apiResponse: [
          {hashIDs: [0,1,2,3,5], imageName: 'sorting robot', imagePath: 'img/sortingrobotVign.jpg', url: 'https://www.instructables.com/Screw-Sorting-Machine/'},
          {hashIDs: [0,2], imageName: 'wooden bike', imagePath: 'img/woodenbikeVign.jpg', url: 'https://www.instructables.com/Reproducible-Wooden-Bike/'},
          {hashIDs: [0,1,2,5], imageName: 'Bulb box', imagePath: 'img/bulbboxVign.jpg', url: 'https://www.instructables.com/Bulb-Box/'},
          {hashIDs: [0,2,4], imageName: 'Articulated Fingers', imagePath: 'img/articulVign.jpg', url: 'https://www.instructables.com/Articulated-Finger-Extensions/'},
          {hashIDs: [0,2], imageName: 'wooden structure', imagePath: 'img/woodenstrucVign.jpg', url: 'https://www.instructables.com/Participative-Wooden-Structure/'},
          {hashIDs: [0,3], imageName: 'Backpack', imagePath: 'img/backpackVign.jpg', url: 'https://www.instructables.com/Messenger-Backpack-From-Recycled-Tarp/'},
          {hashIDs: [0,1,4,6], imageName: 'Bikelightning', imagePath: 'img/bikelightVign.jpg', url: 'https://www.instructables.com/3D-Printed-Bike-Headlight/'},
          {hashIDs: [0,1,4,5], imageName: 'Electric bike', imagePath: 'img/electricbikeVign.jpg', url: 'https://www.instructables.com/Super-Light-Electric-Fixie-Bike/'},
          {hashIDs: [0,1,5], imageName: 'Electric skate', imagePath: 'img/electroskateVign.jpg', url: 'https://www.instructables.com/Three-wheel-Electric-Longboard/'},
          {hashIDs: [0,1,5,6], imageName: 'mppt', imagePath: 'img/mpptVign.jpg', url: 'https://www.instructables.com/MPPT-Charge-Controller-for-Small-Wind-Turbines/'},
          {hashIDs: [0,3], imageName: 'plastic pedals', imagePath: 'img/pedalVign.jpg', url: 'https://www.instructables.com/Recycled-Plastic-Pedals-and-Grips/'},
          {hashIDs: [0,1,5], imageName: 'pid controller', imagePath: 'img/pidcontrollerVign.jpg', url: 'https://www.instructables.com/PID-Temperature-Controller/'},
          {hashIDs: [0,2], imageName: 'wooden skis', imagePath: 'img/woodenskiVign.jpg', url: 'https://www.instructables.com/Wooden-Skis/'},
          {hashIDs: [0,1,5], imageName: 'moisture sensor', imagePath: 'img/moistureVign.gif', url: 'https://www.instructables.com/The-Simplest-Capacitive-Moisture-Sensor/'},
          {hashIDs: [0,1,4,5,6], imageName: 'meteo station', imagePath: 'img/stationmeteoVign.jpg', url: 'https://www.instructables.com/Wind-Speed-and-Solar-Radiation-Recorder/'},
          {hashIDs: [0,6], imageName: 'wind turbine', imagePath: 'img/windturbVign.jpg', url: 'https://www.instructables.com/Pivoting-Blades-Vertical-Axis-Wind-Turbine/'},
      ]
    },
    computed: {
      apiResponseFiltered: function () {
        let tagNumber = this.hashtags.indexOf(this.selected);
        return this.apiResponse.filter(el => el.hashIDs.includes(tagNumber) == true);
      }
    }
  })