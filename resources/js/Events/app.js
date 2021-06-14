import Detail from './Detail.js';

export default {
  install (Vue, options = {}) {

    Vue.prototype.$detail = {
      open(payload) {
        Detail.$emit('open', payload);
      },

      close(payload) {
        Detail.$emit('close', payload);
      }
    }

  }
}