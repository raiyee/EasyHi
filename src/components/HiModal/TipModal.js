import ModalItem from 'components/HiModal/ModalItem'

import classes from './tip-modal.styl'

export default require('./tip-modal.pug')({
  name: 'tip-modal',
  props: {
    backdrop: Boolean,
    tipText: String,
    confirm: Function,
    close: Function,
    confirmText: String,
    cancelText: String,
    type: Number,
    timeout: Number,
    promptText: String,
    placeholder: String
  },
  data() {
    return {
      classes,
      text: this.promptText
    }
  },
  mounted() {
    this.setToast()
  },
  watch: {
    type() {
      this.setToast()
    }
  },
  methods: {
    setToast() {
      this.type || setTimeout(() => {
        this.closeModal()
      }, this.timeout || 2000)
    },
    closeModal() {
      this.close ? this.close(...arguments) : this.$modal.close(this.$util.TIP_ID)
    },
    confirmModal() {
      this.confirm ? this.confirm(...this.type === 3 ? [this.text, ...arguments] : arguments)
        : this.$util.error('you should handle the click event on the confirm btn by yourself!')
    }
  },
  components: {
    ModalItem
  }
})
