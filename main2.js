var app = new Vue({
  el: '#app',
  data: {
    items: [],
    selected: [],
    selected2: [],
    selected_items: [],
    selectedAll: false,
  },
  methods: {
    list_items(){
      axios.get('https://api.github.com/repos/rg3915/django-experience/issues')
      .then((result) => {
        this.items = result.data.map((item) => {
          return {number: item.number, id: item.id, title: item.title, state: item.state, url: item.url}
        })
      })
    },
    addToPreview(){
      // Copia os itens selecionados para a outra lista.
      this.selected_items = this.items.filter(item => item.selected)
      // Desativa a seleção da lista principal.
      // this.selected_items.map(item => {
      //   item.selected = false
      // })
    },
    removeFromPreview(){
      window.alert('Exercicio pro Regis')
    },
    select(id){
      // field number is id.
      this.selected.push(id)
    },
    selectAll(){
      this.selected = [];
      // this.selected_items = [];
      if (!this.selectedAll) {
        for (let i in this.items) {
          // Insere os números no array selected
          // usado para saber quais os itens que foram selecionados.
          this.selected.push(this.items[i].number);
          // Marca todos os checkbox
          this.items[i].selected = true;
        }
        // for (let j in this.all_items) {
        //   this.selected_items.push(
        //     {number: this.all_items[j].number, id: this.all_items[j].id, title: this.all_items[j].title, state: this.all_items[j].state, url: this.all_items[j].url}
        //   );
        // }
      } else {
        for (let i in this.items) {
          // Insere os números no array selected
          // usado para saber quais os itens que foram selecionados.
          // this.selected.push(this.items[i].number);
          // Desmarca todos os checkbox
          this.items[i].selected = false;
        }
      }
    }
  },
  watch: {
    // selected(value){
    //   this.selected_items = this.items.filter(
    //     i => value.includes(i.number)
    //   );
    // }
  },
  mounted(){
    this.list_items()
  }
})
