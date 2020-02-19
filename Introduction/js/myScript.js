
         var img = document.getElementById('myImage')
         var msg = document.getElementById('msg')
         var esconde = document.getElementById('esc')

         img.addEventListener("click",ligaDesliga())

         function ligaDesliga(){
             msg.innerText == 'Desligada'?this.ligar():this.desligar()
         }

         function ligar(){
             img.src = "Imagens/pic_bulbon.gif"
             msg.innerText = "Ligada"
         }

         function desligar(){
             img.src = "Imagens/pic_bulboff.gif"
             msg.innerText = "Desligada"
         }

         function escoderAparecer(){

            msg.innerText == 'Escondida'?this.aparecer():this.escoder()
             
         }
         function escoder(){
             msg.innerText = "Escondida"
             img.style.display = "none";
         }

         function aparecer(){
             ligar()
             img.style.display = "block";
             msg.innerText = "Não escondida"
         }
