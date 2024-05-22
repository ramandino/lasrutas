var map = L.map('map').setView([14.06363,-87.1961],14)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var transportLayer = L.tileLayer('https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=41a1b3bdaf674761b259b94eeab1695c', {
    attribution: '&copy; <a href="https://www.thunderforest.com/">Thunderforest</a> contributors'
}).addTo(map);


// Definir las rutas
var routes = {
    '1': [
        [14.064132, -87.1719639], [14.0650478, -87.1714168], [14.0669419, -87.1701937], [14.0677328, -87.1696572], [14.0695541, -87.1675544], [14.0705948, -87.1663635], [14.0710006, -87.1660631], 
        [14.0716667, -87.1657734], [14.0723639, -87.1657305], [14.0728739, -87.1658592], [14.0754997, -87.1663957], [14.076362, -87.1666257], [14.0768745, -87.1666928], [14.0771113, -87.1666874], 
        [14.0776472, -87.1665453], [14.0780513, -87.1662941], [14.0788968, -87.1655296], [14.0796327, -87.164902], [14.0800828, -87.1644004], [14.0805411, -87.1637912], [14.0809547, -87.1629168], 
        [14.0810096, -87.162442], [14.0809368, -87.1620665], [14.0808223, -87.161927], [14.0804373, -87.1617125], [14.0798025, -87.1615247]
    ],
    '2': [
        [14.0833629,-87.1665147],[14.0836022,-87.1676986],[14.083904,-87.1691148],[14.0841329,-87.1703486],[14.0841329,-87.1721189],[14.0840289,-87.1741788],[14.0838311,-87.1759813],[14.0837895,-87.1769147]
        ,[14.0838207,-87.1773117],[14.0846532,-87.1817427],[14.0854174,-87.1855675],[14.0863851,-87.1909319],[14.086843,-87.1930026],[14.0873633,-87.194054],[14.0880814,-87.1951054]
    ]
};

// Variable para almacenar la capa de la ruta actual
var currentRouteLayer = null;

// Función para actualizar la ruta en el mapa
function updateRoute(routeId) {
    // Eliminar la capa de la ruta actual si existe
    if (currentRouteLayer) {
        map.removeLayer(currentRouteLayer);
    }

    // Verificar si la ruta seleccionada es válida
    if (routeId !== '-1') {
        // Crear una nueva capa de ruta y agregarla al mapa
        currentRouteLayer = L.polyline(routes[routeId], { color: 'blue' }).addTo(map);
        // Ajustar la vista del mapa para mostrar la ruta
        map.fitBounds(currentRouteLayer.getBounds());
    }
}

// Añadir el evento al elemento select
document.getElementById('ubicacionbus').addEventListener('change', function (e) {
    updateRoute(e.target.value);
});
