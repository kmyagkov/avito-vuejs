<template>
    <div>
        <Loader v-if="isLoading"/>
        <p v-if="!isLoading && !detailedAd && !isError">Объявление не найдено</p>
        <p v-if="!isLoading && isError">При загрузке объявления произошла ошибка</p>

        <article class="ad"
                 v-if="!isLoading && detailedAd"
        >
            <h1>{{ detailedAd.title }}</h1>
            <p>{{ detailedAd.description }}</p>
            <div class="ad__photos-inner">
                <div class="ad__native-scroll">
                    <ul class="ad__photos">
                        <li class="ad__photos-item"
                            v-for="(src, index) of detailedAd.images"
                            :key="index"
                        >
                            <img :src="src"
                                 @click="openGallery(index)"
                            >
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <b>Контактное лицо: </b>{{ detailedAd.sellerName }}
            </div>
            <LightBox :images="getLightboxOptions"
                      ref="lightbox"
                      :show-light-box="false"
            />
        </article>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Loader from '@/components/Loader';
    import LightBox from 'vue-image-lightbox';
    import VueLazyLoad from 'vue-lazyload';

    import 'vue-image-lightbox/dist/vue-image-lightbox.min.css';

    Vue.use(VueLazyLoad);

    export default {
        name: "Ad",
        data() {
            return {
                lightbox: false
            }
        },
        props: ['id'],
        components: {
            Loader,
            LightBox
        },
        computed: {
            detailedAd() {
                return this.$store.getters.detailedAd;
            },
            isLoading() {
                return this.$store.getters.loading;
            },
            isError() {
                return this.$store.getters.error;
            },
            getLightboxOptions() {
                return this.detailedAd.images.map(src => ({
                    thumb: src,
                    src
                }));
            }
        },
        methods: {
            openGallery(index) {
                this.$refs.lightbox.showImage(index)
            }
        },
        created() {
            this.$store.dispatch('fetchDetailedAd', this.id);
        }
    }
</script>

<style lang="scss" scoped>
    .ad__photos {
        display: flex;
        padding: 0;
        margin: 0;
        list-style-type: none;
    }

    .ad__photos-item {
        width: 170px;
        height: 170px;
        padding: 10px;

        img {
            width: 150px;
            height: 150px;
            object-fit: cover;
        }
    }

    .ad__native-scroll {
        padding-bottom: 30px;
        margin-bottom: -30px;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }

    .ad__photos-inner {
        width: calc(100vw - 420px);
        margin-bottom: 16px;
        overflow: hidden;

        @media (max-width: 768px) {
            width: calc(100vw - 32px);
        }

        @media (min-width: 769px) and (max-width: 1160px) {
            width: calc(100vw - 128px);
        }
    }
</style>
