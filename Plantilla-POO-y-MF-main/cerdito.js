class pig extends base {
    constructor(
        x,
        y,
        ancho,
        alto,
    )
    {
        super( x,
            y,
            ancho,
            alto,)
            this.img = loadImage('./sprites/enemy.png'),
            this.visibilidad = 255
    }
    mostrar(){
        
        if(this.body.speed < 8){
            super.mostrar()
        } else  {
            mundo.remove(world, this.body)
            push()
            this.visibilidad = this.visibildad -0.5;
            tint(255, this.visibilidad)
            image(this.img, this.body.position.x, this.body.position.y, this.ancho, this.alto)
            pop()
        }
    }
}