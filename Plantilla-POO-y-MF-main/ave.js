class bird extends base{
    constructor(
        x,
        y,
        ancho,
        alto
    )
    {
        super(x,y,ancho,alto)
        this.img = loadImage('./sprites/bird.png')
    }
    mostrar(){
        super.mostrar()
        this.body.position.x = mouseX
        this.body.position.y = mouseY
    }
}