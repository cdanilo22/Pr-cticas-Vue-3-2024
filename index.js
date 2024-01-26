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
            mensaje: 'Hola mundo'
        }
    },

    methods: {
        addMensaje() {
            this.bandas.unshift({
                banda: this.mensaje
            })
        }
    },
})

app.mount('#myapp')