export default class Controller{
    constructor(game, view) {
        this.game = game;
        this.view = view;
        this.isGameStarted = false;
        this.isGamePaused = false;
        this.intervalId = null;

        document.addEventListener('keydown', this.handelKeyDown.bind(this));

        this.view.renderStartScreen();
    }
    update(){

        if(this.game.gameOver){
            this.view.renderEndScreen(window.game);
            clearInterval(this.intervalId);
            this.intervalId = null;
            return;
        }

        const speed = 1000 - this.game.getState().level * 100;
        this.intervalId = setInterval(() => {
            this.game.movePieceDown();
            this.view.renderMainScreen(this.game.getState());
        },speed > 0 ? speed : 100);
    }

    pause(){
        this.isGamePaused = true;
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.view.renderPauseScreen();
    }

    resume(){
        this.isGamePaused = false;
        this.update();
    }

    handelKeyDown(event){

        switch (event.key) {
            case 'Enter':
                if(!this.game.gameOver) {
                    if (!this.isGameStarted) {
                        this.update();
                        this.isGameStarted = true;
                    } else {
                        if (!this.isGamePaused) {
                            this.pause();
                        } else {
                            this.resume();
                        }
                    }
                }
                break;

            case 'ArrowLeft':
                this.game.movePieceLeft();
                this.view.renderMainScreen(game.getState());
                break;

            case 'ArrowUp':
                this.game.rotatePiece();
                this.view.renderMainScreen(game.getState());
                break;

            case 'ArrowRight':
                this.game.movePieceRight();
                this.view.renderMainScreen(game.getState());
                break;

            case 'ArrowDown':
                this.game.movePieceDown();
                if(!this.game.gameOver) {
                    this.view.renderMainScreen(game.getState());
                }
                break;
        }
    }
}