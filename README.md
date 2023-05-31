# keycloak-demo
This is a demo for useing the keycloak authentication framework in an Angular project including a PostgreSQL database. Keycloak itself, as well as the database run on seperate docker container.
Beware: This is a Linux/Ubuntu 20.04.6 LTS test!

## Pre-requirements
The installation of the following prerequisites is not explained further. The respective version numbers only show with which this demo was performed and considered to be functional.
- Ubuntu (20.04.6)
- Docker (24.0.2)
- VSCode (1.78.2)

## Installation
### PostgreSQL
To store login information such as credentials, it is necessary to use a separate database. When Keycloak is running in dev mode, all data is stored only in the internal database of the container and is therefore lost when the container is stopped.
```bash
docker pull ubuntu/postgres
```
This pulls the least postgres container. (FYI: It is also possible to use a different version!)


### Keycloak
To use the keycloak service to retrieve data in our Angular project we need to install it via npm.
```bash
npm install keycloak-angular keycloak-js
```

### ANGULAR
Angular is used for this demo project. However, any other language can be used to create a frontend.

1. Install Node.js
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - &&\
sudo apt-get install -y nodejs
```
2. Update NPM
```bash
sudo npm install npm@latest -g
```
3. Install the Angular CLI
```bash
sudo npm install -g @angular/cli
```
4. Create a workspace and initial Angular app
```bash
ng new my-app
```
5. Run the application
```bash
cd my-app
ng serve --open
```

### Docker
There are 2 ways to use this project:
* a) Keycloak can be started directly as a container (data will be lost after stopping)
```bash
docker run -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=password quay.io/keycloak/keycloak start-dev
```
* b) Or via docker-compose (data will be stored via PostgreSQL). Make sure to cd into the directory of the *docker-compose.yml* file. The *app.sh* will start the compose and return a message if everything is up and running.
```bash
chmod +x ./app.sh
./app.sh
```


## Usage
After both containers are up keycloak should be reachable under following url:

[http://localhost:8080/]([http://localhost:8080/)

You can then login (with the credentials used in the *.env*) via the admin console and configure free at will.
For further information please use the offical documentation:

[https://www.keycloak.org/documentation](https://www.keycloak.org/documentation)

## License

[MIT](https://choosealicense.com/licenses/mit/)

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
