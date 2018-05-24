var app = new Vue({
  el: '#app',
  data: {
    all_items: [],
    // selected: [],
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
      this.selected_items = this.all_items.filter(item => item.selected)
      this.all_items = this.all_items.filter(item => !item.selected)
      this.selected_items.map(item => {
        item.selected = false
      })
    },
    removeFromPreview(){
      window.alert('Exercicio pro Regis')
    }
    // select(){
    //   this.selected = [];
    //   this.selected_items = [];
    //   if (!this.selectAll) {
    //     for (let i in this.items) {
    //       this.selected.push(this.items[i].number);
    //     }
    //     for (let j in this.items) {
    //       this.selected_items.push(
    //         {number: this.items[j].number, id: this.items[j].id, title: this.items[j].title, state: this.items[j].state, url: this.items[j].url}
    //       );
    //     }
    //   }
    // }
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
