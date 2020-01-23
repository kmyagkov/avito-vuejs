<template>
    <div>
        <Loader v-if="isLoading"/>
        <p v-if="!isLoading && ads.length === 0 && !isError">Объявления не найдены</p>
        <p v-if="!isLoading && isError">При загрузке объявлений произошла ошибка</p>
        <ul v-else
            class="ads"
        >
            <AdsItem v-for="ad of ads"
                     :key="ad.id"
                     :title="ad.title"
                     :address="ad.address"
                     :preview-image="ad.previewImage"
                     :price="ad.price"
                     :id="ad.id"
            />
        </ul>
    </div>
</template>

<script>
    import AdsItem from './AdsItem';
    import Loader from '@/components/Loader';

    export default {
        name: "AdList",
        components: {
            AdsItem,
            Loader
        },
        computed: {
            ads() {
                return this.$store.getters.ads
            },
            isLoading() {
                return this.$store.getters.loading;
            },
            isError() {
                return this.$store.getters.error;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .ads {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 20px;
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
</style>
