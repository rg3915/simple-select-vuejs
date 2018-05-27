var app = new Vue({
  el: '#app',
  data: {
    items: [],
    preview_items: [],
    selected: [],
    selected_preview: [],
    selected_all: false,
    selected_all_preview: false,
    my_label: 'Select All',
    my_label_preview: 'Clear Filter',
    show_preview: true
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
    selectAll(){
      this.selected = [];
      this.preview_items = [];
      if (!this.selected_all) {
        for (let i in this.items) {
          // Insere os números no array selected
          // usado para saber quais os itens que foram selecionados.
          this.selected.push(this.items[i].number);
        }
        // Uma lista é cópia da outra.
        this.preview_items = this.items
        this.selected_all_preview = true
        this.my_label = 'Clear Filter'
        this.show_preview = false
      } else {
        this.my_label = 'Select All'
        this.show_preview = true
      }
    },
    selectAllPreview(){
      this.selected_preview = [];
      if (!this.selected_all_preview) {
        for (let i in this.preview_items) {
          // Insere os números no array selected_preview
          // usado para saber quais os itens que foram selecionados.
          this.selected_preview.push(this.preview_items[i].number);
        }
        this.my_label_preview = 'Clear Filter'
      } else {
        this.my_label_preview = 'Select All'
      }
    },
    savePreview(){
      window.alert('Save ' + this.selected_preview)
    }
  },
  watch: {
    // Copia os itens para a segunda lista um a um.
    selected(value){
      this.preview_items = this.items.filter(
        i => value.includes(i.number)
      );
      // Ao abrir o modal os itens estão ticados.
      this.selected_preview = this.selected
    }
  },
  mounted(){
    this.list_items()
  }
})
