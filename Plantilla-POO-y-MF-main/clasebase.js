class base {
    constructor(
        x,
        y,
        ancho,
        alto,
        angulo
    )
    {
        var carac = {
            restitution : 0.8,
            friction: 1
        } 
        this.body = cuerpo.rectangle(x,y,ancho,alto,carac)
        this.ancho = ancho
        this.alto = alto
        this.x = x
        this.y = y
        this.img = loadImage('./sprites/base.png')
        mundo.add(world, this.body)
    }
    mostrar(){
        var angulo = this.body.angle
        push()
        translate(this.body.position.x, this.body.position.y)
        rotate(angulo)
        imageMode(CENTER)
        image(this.img, 0, 0, this.ancho, this.alto)
        pop()
    }
  

}