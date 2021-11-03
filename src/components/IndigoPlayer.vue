<template>
    <div ref="container" id="player-container"></div>
</template>

<script>
    import * as IndigoPlayer from '@lxsmnsyc/indigo-player';

    export default {
        name: "IndigoPlayer",
        props: {
            manifestUrl: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                player: null
            }
        },
        mounted() {
            // const element = document.getElementById('player-container')
            this. player = IndigoPlayer.init(this.$refs.container, {
                sources: [
                    {
                        type: 'hls',
                        src: this.manifestUrl,
                    }
                ],
            });
        },
        beforeDestroy() {
            this.player.destroy();
        }
    }
</script>

<style scoped>

</style>
