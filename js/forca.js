var tela = document.querySelector('canvas');
var tabuleiro = tela.getContext('2d');

function desenhaForca(parte){
    tabuleiro.lineWidth = 6
    tabuleiro.lineCap = 'round'
    tabuleiro.lineJoin = "round"
    tabuleiro.strokeStyle = '#0A3871'
    tabuleiro.beginPath()
    var eixo = tela.width/2  //599,5
    var x
    var y
        
    if(parte == 0){   //base da forca
        y = Math.floor(eixo*0.583)
        x = Math.floor(eixo*0.417)
        tabuleiro.moveTo(eixo,y)
        tabuleiro.lineTo(eixo+x, y)

    }else if(parte == 1){  //traço vertical
        y = Math.floor(eixo*0.583)
        x = Math.floor(eixo*0.0834)
        tabuleiro.moveTo(eixo+x, y)
        tabuleiro.lineTo(eixo+x, eixo*0.166)

    }else if(parte == 2){  //traço horizontal
        y = Math.floor(eixo*0.166)
        x = Math.floor(eixo*0.0834)
        tabuleiro.moveTo(eixo+x, y)
        tabuleiro.lineTo(eixo+x+y, y)

    }else if(parte == 3){  //segundo traço vertical
        y = Math.floor(eixo*0.166)
        x = Math.floor(eixo*0.250)
        tabuleiro.moveTo(eixo+x, y)
        tabuleiro.lineTo(eixo+x, x+10)

    }else if(parte == 4){  //cabeça
        y = Math.floor(eixo*0.316)
        x = Math.floor(eixo*0.250)
        tabuleiro.arc(eixo+x, y,30,0,2*3.14)
        tabuleiro.stroke()
        tabuleiro.closePath()
        desenhaCara('#0A3871')

    }else if(parte == 5){      //torax
        y = Math.floor(eixo*0.366)
        x = Math.floor(eixo*0.250)
        tabuleiro.moveTo(eixo+x, y)
        tabuleiro.lineTo(eixo+x, y+(eixo*0.083))

    }else if(parte == 6){   //perna esquerda
        y = Math.floor(eixo*0.450)
        x = Math.floor(eixo*0.250)
        tabuleiro.moveTo(eixo+x, y)
        tabuleiro.lineTo(eixo+(eixo*0.200),eixo*0.533)

    }else if(parte == 7){  //perna direita
        y = Math.floor(eixo*0.450)
        x = Math.floor(eixo*0.250)
        tabuleiro.moveTo(eixo+x, y)
        tabuleiro.lineTo(eixo+(eixo*0.300), eixo*0.533)

    }else if(parte == 8){    //braço esquerdo
        y = Math.floor(eixo*0.400)
        x = Math.floor(eixo*0.250)
        tabuleiro.moveTo(eixo+x, y)
        tabuleiro.lineTo(eixo+(eixo*0.200), eixo*0.450)

    }else if(parte == 9){  //braço direito
        y = Math.floor(eixo*0.400)
        x = Math.floor(eixo*0.250)
        tabuleiro.moveTo(eixo+x, y)
        tabuleiro.lineTo(eixo+(eixo*0.300), eixo*0.450)
        tabuleiro.font = 'bold 25px Arial'
        //desenhaCara('white')
        tabuleiro.fillText('x', eixo+(eixo*0.221),eixo*0.311)
        tabuleiro.fillText('x', eixo+(eixo*0.255),eixo*0.311)
        //tabuleiro.fillText('x', eixo+143,206)
    }
    tabuleiro.stroke()
    tabuleiro.closePath()

}

function desenhaCara(cor){
    y = Math.floor(eixo*0.300)
    x = Math.floor(eixo*0.233)
    tabuleiro.lineWidth = 3
    var eixo = tela.width/2
    tabuleiro.strokeStyle = cor
    tabuleiro.beginPath()
    tabuleiro.arc(eixo+x, y, 5, 0, 2*3.14)
    tabuleiro.stroke()
    tabuleiro.closePath()
    tabuleiro.beginPath()
    tabuleiro.arc(eixo+(eixo*0.266), y, 5, 0, 2*3.14)
    tabuleiro.stroke()
    tabuleiro.closePath()
    tabuleiro.beginPath()
    tabuleiro.moveTo(eixo+(eixo*0.241),eixo*0.333)
    tabuleiro.lineTo(eixo+(eixo*0.258),eixo*0.333)
    tabuleiro.stroke()
    tabuleiro.closePath()
}