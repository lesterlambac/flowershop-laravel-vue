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

    Vue.prototype.$dashboard = {
      change(payload) {
        Detail.$emit('change', payload);
      },

      selectRowChange(payload) {
        Detail.$emit('selectRowChange', payload)
      }
    }

  }
}