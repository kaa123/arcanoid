document.addEventListener("DOMContentLoaded", 
	function(){
		new Vue({
			el:"#game",
			data:function(){
				return {
					ballx:0,
					bally:0,
					boardPosition:0,
					boardWidth:100,
					fieldWidth:600

				}
			},
			methods:{
				onMouse:function(e){
					this.boardPosition=e.clientX-(this.boardWidth/2);
					if(this.boardPosition<0){
						this.boardPosition=0;
					}if(this.boardWidth+this.boardPosition>this.fieldWidth){
						this.boardPosition=this.fieldWidth-this.boardWidth;

					}
				}
			}
			

		})
	})