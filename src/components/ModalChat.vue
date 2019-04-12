<template>


</template>

<script>
    export default {
        name: "ModalChat",
      data() {
        return {
          name: '',
          names: []
        }
      },
      methods: {
        clearName() {
          this.name = ''
        },
        handleOk(bvModalEvt) {
          // Prevent modal from closing
          bvModalEvt.preventDefault()
          if (!this.name) {
            alert('Please enter your name')
          } else {
            this.handleSubmit()
          }
        },
        handleSubmit() {
          this.names.push(this.name)
          this.clearName()
          this.$nextTick(() => {
            // Wrapped in $nextTick to ensure DOM is rendered before closing
            this.$refs.modal.hide()
          })
        }
      }
    }
</script>

<style scoped>


</style>
