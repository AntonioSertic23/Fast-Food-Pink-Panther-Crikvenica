<template>
  <div class="container p-0">
    <p class="text-center mb-4 section-header">Pronađite nas</p>
    <div class="map-section row justify-content-center m-4">
      <div class="p-0">
        <div id="map"></div>
      </div>
    </div>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default {
  name: "Map",
  data() {
    return {
      center: [37, 7749, -122, 4194],
    };
  },
  methods: {
    setupLeafletMap: function () {
      let mapOptions = {
        center: [45.174586468460035, 14.692800115098791],
        zoom: 16,
      };
      let map = new L.map("map", mapOptions);
      let layer = new L.TileLayer(
        "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      );
      map.addLayer(layer);
      let marker = new L.Marker([45.174586468460035, 14.692800115098791]);
      marker.addTo(map);
    },
  },
  mounted() {
    this.setupLeafletMap();
  },
};
</script>

<style scoped>
.map-section {
  height: 300px;
}

#map {
  height: 100%;
  border-radius: 20px;
}
</style>
