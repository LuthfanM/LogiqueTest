import { EP_SEARCH_TERM } from '../../Endpoints';
import { DataService } from '../config';

export class VerifyServiceData {
  GetSearch(req) {
    return DataService.get(`${EP_SEARCH_TERM}?term=${req}`);
  }
}