const bandas = [
    {banda: 'Coldplay', cancion: 'Viva la vida'},
    {banda: 'Keane', cancion: 'Somewhere only we know'},
    {banda: 'Los fabulosos Cadillacs', cancion: 'Vasos vacios'},
    {banda: 'Paramore', cancion: 'still into you'},
    {banda: 'Soda Stereo', cancion: 'Cuando pase el temblor'}
]


const app = Vue.createApp({
    data(){
        return {
            bandas,
            saludo: 'hola mundo'
        }
    },

    methods: {
        addSaludo(){
            this.bandas.push({
                banda: this.saludo
            })
        },
        addSaludoPrimero(){
            this.bandas.unshift({
                banda: this.saludo
            })
        },
        deleteSaludo(){
            this.bandas.pop({
                banda: this.saludo
            })
        }
    }

})

app.mount('.myapp')
