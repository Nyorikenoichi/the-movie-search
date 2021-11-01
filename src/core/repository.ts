export default abstract class Repository {
  public requestURL: string;

  public abstract setRequestURL(requestURL: string): void;

  public abstract getData(): Promise<any>;
  // idk what type should i use. looks like i need to make some class/interface for this purpose
}
