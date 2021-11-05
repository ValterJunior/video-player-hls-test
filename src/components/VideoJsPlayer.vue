<template>
    <div>
        <video ref="videoPlayer" class="video-js"></video>
    </div>
</template>

<script>
    import videojs from 'video.js';
    import 'videojs-contrib-quality-levels'
    import 'videojs-hls-quality-selector'

    export default {
        name: "VideoJsPlayer",
        props: {
            manifestUrl: {
                type: String,
                required: true
            },
            videoType: {
                type: String,
                default: 'application/x-mpegURL'
            }
        },
        data() {
            return {
                player: null
            }
        },
        mounted() {
            this.player = videojs(this.$refs.videoPlayer, {
                autoplay: true,
                controls: true,
                fluid: true,
                sources: [
                    {
                        src: this.manifestUrl,
                        type: this.videoType
                    }
                ]
            }, function onPlayerReady() {
                console.log('onPlayerReady', this);
            })

            this.player.hlsQualitySelector({
                displayCurrentQuality: true,
            });
        },
        beforeDestroy() {
            if (this.player) {
                this.player.dispose()
            }
        }
    }
</script>
<style src="video.js/dist/video-js.css"></style>
<style scoped>
    .video-js {
        /*width: 100% !important;*/
        /*height: 100% !important;*/
    }
</style>
