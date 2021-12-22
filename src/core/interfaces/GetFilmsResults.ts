import ResponseError from './responseError';

interface GetFilmsResults<T extends Object[]> extends Partial<ResponseError> {
  Search?: T;
}

export default GetFilmsResults;
