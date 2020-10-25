(function(window, document) {
  libreria.getID('vista')
    .enrutar()
    .ruta('/', 'views/home.html', null, null)
    .ruta('/home-view', 'views/home.html', 'home', function() {
      _.getID('crearSearch');
    })
})(window, document);
