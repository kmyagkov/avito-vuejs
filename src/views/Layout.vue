<template>
    <div class="container">
        <header class="header">
            <Nav class="header__nav"/>
        </header>
        <main>
            <slot/>
        </main>
        <footer class="footer">
            @ Kirill Myagkov 2020
        </footer>
    </div>
</template>

<script>
    import Nav from '@/components/Nav'

    export default {
        name: "layout",
        components: {
            Nav
        }
    }
</script>

<style lang="scss">
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        line-height: 24px;
    }

    main {
        grid-area: content;
        padding: 24px 0;

        @media (max-width: 768px) {
            padding-left: 16px;
            padding-right: 16px;
        }

        @media (min-width: 769px) and (max-width: 1160px) {
            padding-left: 64px;
            padding-right: 64px;
        }
    }

    .container {
        display: grid;
        grid-template-areas:
                "header header header"
                ". content ."
                "footer footer footer";

        grid-template-columns: 200px 1fr 200px;
        grid-template-rows: auto 1fr auto;
        grid-gap: 10px;
        height: 100vh;

        @media (max-width: 1160px) {
            grid-template-areas:
                    "header"
                    "content"
                    "footer";

            grid-template-columns: 1fr;
            grid-template-rows:
                    auto
                    1fr
                    auto;
            width: 100%;
            margin: 0;
        }
    }

    .header {
        grid-area: header;
        padding: 12px;
        box-shadow: 0 10px 10px 0 rgba(#000, 0.2);
    }

    .footer {
        grid-area: footer;
        padding: 12px;
        color: white;
        background: #FF6163;
    }
</style>
