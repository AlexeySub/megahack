<template>
    <div>

      <hdr></hdr>

      <div class="container-fluid mt-4">
        <b-row>
          <b-col sm="8">
            <b-container class="container-fluid" style="border: 1px solid #4e555b;">
              <!--<h2>Content block</h2>-->
              <cnt></cnt>
            </b-container>
          </b-col>

          <b-col sm="4">
            <b-container class="container-fluid" style="border: 1px solid #4e555b;">
              <!--<h2>Side block</h2>-->
              <sideb></sideb>
            </b-container>
          </b-col>
        </b-row>
      </div>

      <mchat></mchat>


     <!--<ftr></ftr>-->


    </div>
</template>

<script>

    import Content from "./Content";
    export default {
        name: "Home",
      components: {Content},
      data() {
        return {
          text: "",
       /*   lang: ru-RU,
          voice: alyss,
          emotion: good,*/

        }
      },

      computed: {

      },

      methods: {
       /* bttxt: function () {
          console.log(this.text);

          axios.post('https://tts.api.cloud.yandex.net/speech/v1/tts:synthesize', {
            text: this.text,
            /!*lang: this.lang,
          voice: this.voice*!/
          })
            .then(response => {
              const auth_token = response.data.auth_token;
              console.log(auth_token);

              sessionStorage.setItem('auth_token', auth_token);

              console.log(response);
            })
            .catch(function (error) {

              console.log(error);
            });


        }*/


      }

    }

</script>

<style scoped>

</style>
