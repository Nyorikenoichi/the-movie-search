import ResponseError from './responseError';
import Film from './film';

export default interface GetFilmsResults extends Partial<ResponseError> {
  Search?: Film[];
}
