 jQuery.noConflict();
  jQuery(function(){
    var $ = jQuery;
    $('#dataTable').DataTable();
    $('#covid19map').vectorMap({
      map: 'world_mill_en',
      series: {
        regions: [{
          values: countryData,
          scale: ['#faafb3', '#ed2d18'],
          normalizeFunction: 'polynomial'
        }]
      },
      onRegionTipShow: function(e, el, code){
        el.html('<h3>' + el.html() + '</h3>' + '<br/>Total Cases - ' + countryData[code]);
      }
    });
  })