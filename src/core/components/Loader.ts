import Component from "../component";

export default abstract class Loader extends Component<{}> {
  abstract show(): void
  abstract hide(): void
}
