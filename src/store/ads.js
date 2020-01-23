export default {
    state: {
        ads: [],
        currentAd: null
    },

    mutations: {
        loadAds(state, payload) {
            state.ads = payload;
        },
        loadDetailedAd(state, payload) {
            state.currentAd = payload;
        }
    },

    actions: {
        async fetchAds({commit}) {
            try {
                commit('clearError');
                commit('setLoading', true);

                const response = await fetch('http://134.209.138.34/items');
                const json =  await response.json();

                commit('setLoading', false);
                commit('loadAds', json);
            } catch (error) {
                commit('setLoading', false);
                commit('setError', error.message);
                throw error;
            }
        },

        async fetchDetailedAd({commit}, payload) {
            try {
                commit('clearError');
                commit('setLoading', true);

                const response = await fetch(`http://134.209.138.34/item/${payload}`);
                const json =  await response.json()
                    .then((value) => value[0]);

                commit('loadDetailedAd', json);
                commit('setLoading', false);
            } catch (error) {
                commit('setLoading', false);
                commit('setError', error.message);
                throw error;
            }
        }
    },

    getters: {
        ads(state) {
            return state.ads;
        },
        detailedAd(state) {
            return state.currentAd;
        }
    }
};
