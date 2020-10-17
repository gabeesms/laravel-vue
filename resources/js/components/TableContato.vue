<template>
  <div>
    <b-table striped hover :items="contatos" :fields="cabecalhos"></b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        cabecalhos: [
            { key: 'nome', label: 'Nome'},
            { key: 'telefone', label: 'Telefone'},
            { key: 'acoes', label: 'Ações'},
        ],
      }
    },
    mounted () {
        axios.get('/contatos')
            .then((res) => {
                //this.contatos = res.data
                this.$store.commit('setContatos', res.data)
            })
            .catch((err) => {
                alert('erro ao listar os contatos')
            })
    },
    computed: {
      contatos () {
        return this.$store.state.contatos
      }
    }
  }
</script>