import { HandleError } from "../../Errors";
import { VerifyServiceData } from "../../services/verify/verify";

export class VerifyService {
	constructor() {
		this._service = new VerifyServiceData();
	}

	async getSearch(req, handler) {
		try {
			const response = await this._service.GetSearch(req);
			return await handler.Success?.(response?.data);
		}
		catch (e) {
			return HandleError(e, handler);
		}
	}
}