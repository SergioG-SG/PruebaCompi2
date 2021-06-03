import express, { Application } from  'express';

class Server {

    public app: Application;

    constructor(){
        this.app = express();
        this.config();
    }

    config(): void {
        this.app.set('port', 3000);
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.static(__dirname + '/web'));
    }

    

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}

const server = new Server();

server.start()