<template>
    <div class="w-100">
        <video
            controls
            autoplay
            width="100%"
            ref="videoPlayerRef">
              <source src="https://ypfs3.s3.us-west-2.amazonaws.com/videos/672a3944395d8.mp4" type="video/mp4" />
        </video>
    </div>
</template>
<script>
    import videojs from 'video.js';

    export default{
        props:{
            src: {
                type: String,
                default: null
            }
        },
        data() {
            return {
                player: null,
                isReady: false
            }
        },
        mounted(){
            // this.player = videojs(this.$refs.videoPlayerRef, {}, () => {
            //     this.player.log('onPlayerReady', this);
            //     this.player.play();
            // });
        }
    }
</script>