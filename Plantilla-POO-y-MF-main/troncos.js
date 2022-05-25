class tronco extends base{
    constructor(
        x,y,ancho,alto,angulo
    )
    {
        super(x,y,ancho,alto,angulo)
        this.img = loadImage('./sprites/wood2.png')
        Matter.Body.setAngle(this.body, angulo)
    }
}