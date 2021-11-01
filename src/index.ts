import "./style.css";
import Controller from "./components/controller";
import View from "./components/view";

function init(initURL) : void{
  let controller = new Controller();
  controller.getFilms(initURL)
    .then( () => console.log(controller.films));
  let view = new View();
}

init("https://www.omdbapi.com/?s=dream&page=2&apikey=9b67fc54");