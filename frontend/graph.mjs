const graphDiv = document.getElementById("graph");

// Using https://plotly.com/javascript/mapbox-county-choropleth/

fetch(
  "https://dssd-oa-backend.onrender.com" //use "http://localhost:3000" if running sample express backend locally, or replace with your own backend endpoint url
).then(async res => {
  const geojson = await res.json();

  const data = [{
    type: "choroplethmapbox",
    featureidkey: "properties.mun",
    locations: geojson.features.map(f => f.properties.mun),
    z: geojson.features.map(f => f.properties.pop2020),
    geojson: geojson,
    colorbar: { y: 0, yanchor: "bottom", title: { text: "Population in 2020", side: "right" } }
  }];
  
  const layout = {
    mapbox: {
      center: { lon: -63, lat: -16 },
      zoom: 3
    },
    width: 800,
    height: 800
  };
  
  // A local token that is only usable from origin http://localhost:5500
  const config = {mapboxAccessToken: "pk.eyJ1IjoiZ2VvZmZyZXl4dWUiLCJhIjoiY2xtZHcwM3ZrMW11cDNwbW53a3B3NXV1MiJ9.3N7O0yOCDV38hmlxLtwGWA"};
  
  Plotly.newPlot(graphDiv, data, layout, config);
  
  
})

