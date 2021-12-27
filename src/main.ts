import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import VueApollo from 'vue-apollo';
import { io, Socket } from 'socket.io-client';
import dotenv from 'dotenv'
dotenv.config()

// Apollo Clientは、ReactやAngularなどの統合機能を備えた、
// フル機能を備えたキャッシング用のGraphQLクライアントです。
// Apollo Boost は、設定不要で Apollo Client を使い始めることができます。
import ApolloClient from 'apollo-boost';

Vue.use(VueApollo);

Vue.config.productionTip = false;
Vue.prototype.$socket = io(process.env.SOCKET_URI || 'http://0.0.0.0:5000');

// Create Apollo Client
const client = new ApolloClient({
  uri: process.env.APOLLO_CLIENT_URI || 'http://localhost:5000/graphql',
});

// Create Apollo Provider
const apolloProvider = new VueApollo({
  defaultClient: client,
});

declare module 'vue/types/vue' {
  interface Vue {
    $socket: Socket;
  }
}

new Vue({
  store,
  router,
  vuetify,
  apolloProvider,
  render: (h) => h(App),
}).$mount('#app');
