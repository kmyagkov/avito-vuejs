<template>
    <router-link :to="`/${id}`"
                 class="ads-item__link"
    >
        <li class="ads-item">
            <div class="ads-item__image">
                <img :src="previewImage"
                     :alt="title"
                     class="ads-item__image"
                >
            </div>
            <div class="ads-item__content">
                <h2 class="ads-item__title">{{ title }}</h2>
                <address class="ads-item__address">{{ address }}</address>
                <span class="ads-item__price">{{ price }}</span>
            </div>
        </li>
    </router-link>
</template>

<script>
    export default {
        name: "AdsItem",
        props: ['title', 'address', 'preview-image', 'price', 'id']
    }
</script>

<style lang="scss" scoped>
    .ads-item {
        border: 1px solid lightgrey;
        border-radius: 8px;
        cursor: pointer;
    }

    .ads-item__image {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        overflow: hidden;
    }

    .ads-item__content {
        display: flex;
        flex-direction: column;
        height: 280px;
        padding: 12px;
    }

    .ads-item__title {
        margin: 0;
        margin-bottom: 12px;
        line-height: 32px;
    }

    .ads-item__image {
        width: 100%;
        height: auto;
    }

    .ads-item__price {
        margin-top: auto;
        font-weight: bold;
    }

    .ads-item__link {
        color: black;
        text-decoration: none;
    }
</style>
