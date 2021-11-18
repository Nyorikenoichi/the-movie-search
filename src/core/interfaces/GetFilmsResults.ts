import ResponseError from './responseError';
import Film from './film';
import FilmModel from '../../models/filmModel';

interface GetFilmsResults extends Partial<ResponseError> {
  Search?: Film[] | FilmModel[];
}

export default GetFilmsResults;
