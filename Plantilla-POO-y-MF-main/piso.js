class piso{
    constructor(
        x,
        y,
        ancho,
        alto,
    )
    {
       var carac = {
           isStatic: true,
       }
        this.body = cuerpo.rectangle(x, y, ancho, alto,carac)
        this.ancho = ancho
        this.alto = alto
        this.x = x
        this.y = y
        this.img = loadImage('./sprites/base.png')
        mundo.add(world, this.body)
    }
    mostrar(){
        imageMode(CENTER)
        image(this.img, this.body.position.x, this.body.position.y, this.ancho, this.alto)
    }
}