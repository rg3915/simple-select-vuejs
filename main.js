var app = new Vue({
  el: '#app',
  data: {
    all_items: [],
    selected: [],
    selected2: [],
    selected_items: [],
    selectAll: false,
  },
  methods: {
    list_items(){
      axios.get('https://api.github.com/repos/rg3915/django-experience/issues')
      .then((result) => {
        this.all_items = result.data.map((item) => {
          return {number: item.number, id: item.id, title: item.title, state: item.state, url: item.url}
        })
      })
    },
    addToPreview(){
      // Copia os itens selecionados para a outra lista.
      this.selected_items = this.all_items.filter(item => item.selected)
      // Desativa a seleção da lista principal.
      // this.selected_items.map(item => {
      //   item.selected = false
      // })
    },
    removeFromPreview(){
      window.alert('Exercicio pro Regis')
    },
    select(){
      this.selected = [];
      this.selected_items = [];
      if (!this.selectAll) {
        for (let i in this.all_items) {
          this.item.selected.push(this.items[i].number);
        }
        // for (let j in this.all_items) {
        //   this.selected_items.push(
        //     {number: this.all_items[j].number, id: this.all_items[j].id, title: this.all_items[j].title, state: this.all_items[j].state, url: this.all_items[j].url}
        //   );
        // }
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
