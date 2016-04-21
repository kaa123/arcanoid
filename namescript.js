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
					boardHeight: 10,
					fieldWidth:600,
					fieldHeight: 400,
					ballWidth: 50,
					ballHeight: 50,
					step:25,
					interval:10,
					dirx:1,
					diry:1,
					intervalId:null

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
				},
				onClick: function(){
					var self=this;
					if(this.intervalId===null){
						this.intervalId = setInterval(function(){
							self.ballx+=self.step*self.dirx;
							self.bally+=self.step*self.diry;
							if(self.ballx>=self.fieldWidth-self.ballWidth||self.ballx<=0){
								self.dirx=self.dirx*(-1);
							}if(self.bally<=0){
								self.diry=self.diry*(-1);
							}if(self.bally>=self.fieldHeight-self.ballHeight){
								var ballPosition=self.ballx+self.ballWidth/2;
								if(ballPosition>=self.boardPosition && ballPosition<=self.boardPosition+self.boardWidth){
									self.diry=self.diry*(-1);
								}else{
									clearInterval(self.intervalId);
								}
							}
						},100)
					}
					
				}

			}
			

		})
	})