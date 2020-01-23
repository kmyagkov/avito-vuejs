<template>
  <Layout>
    <router-view/>
  </Layout>
</template>

<script>
import Layout from './views/Layout';

export default {
  name: 'App',
  components: {
    Layout,
  }
};
</script>
