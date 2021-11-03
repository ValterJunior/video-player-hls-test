<template>
    <div ref="videoContainer" class="shadow-lg mx-auto max-w-full size">
        <video
            id="video"
            ref="videoPlayer"
            class="w-full h-full"
            :poster="posterUrl"
        ></video>
    </div>
</template>

<script>
    import * as shaka from 'shaka-player/dist/shaka-player.ui.js';

    export default {
        name: "ShakaPlayer",
        props: {
            manifestUrl: {
                type: String,
                required: true
            },
            // licenseServer: {
            //     type: String,
            //     required: true
            // },
            posterUrl: {
                type: String,
                required: false,
                default: ''
            }
        },
        mounted() {
            const player = new shaka.Player(this.$refs.videoPlayer);
            const ui = new shaka.ui.Overlay(
                player,
                this.$refs.videoContainer,
                this.$refs.videoPlayer
            );
            ui.getControls();
            // console.log(Object.keys(shaka.ui));
            // player.configure({
            //     drm: {
            //         servers: { 'com.widevine.alpha': this.licenseServer }
            //     }
            // });
            player
                .load(this.manifestUrl)
                .then(() => {
                    // This runs if the asynchronous load is successful.
                    console.log('The video has now been loaded!');
                })
                .catch(this.onError); // onError is executed if the asynchronous load fails.
        },
        methods: {
            onError(error) {
                console.error('Error code', error.code, 'object', error);
            }
        }
    }
</script>

<style src="shaka-player/dist/controls.css"></style>
<style scoped>
.size {
    width: 800px;
}
</style>
