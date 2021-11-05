<template>
  <div id="app">
      <b-container fluid>
          <b-row>
              <b-col>
                  <h1>Video Players test with HLS</h1>
              </b-col>
          </b-row>
          <b-row>
              <b-col>
                  <b-tabs content-class="mt-3">
                      <b-tab title="Shaka Player" active>
                          <shaka-player
                              :manifest-url="manifestUri"
                          />
                      </b-tab>
                      <b-tab title="Video.js">
                          <video-js-player :manifest-url="manifestUri"></video-js-player>
                      </b-tab>
                      <b-tab title="Indigo Player">
                          <indigo-player :manifest-url="manifestUri"></indigo-player>
                      </b-tab>
                  </b-tabs>
              </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
    import ShakaPlayer from "@/components/ShakaPlayer";
    import VideoJsPlayer from "@/components/VideoJsPlayer";
    import IndigoPlayer from "@/components/IndigoPlayer";

export default {
  name: 'App',
  components: {
      ShakaPlayer,
      VideoJsPlayer,
      IndigoPlayer
  },
    data () {
      return {
          manifestUri: 'https://d1i8dj24b1a9li.cloudfront.net/b73736e325724ae9847f8379b2cf85cf/playlist.m3u8'
      }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
