import { AxiosClient } from '@/utils/AxiosClient';
import { HttpResponse } from '@/utils/AxiosClient.defs';

export class PetRegistrationService {
    private axiosClient: AxiosClient;

    public constructor() {
        this.axiosClient = new AxiosClient();
    }

    public async getPetTypes(): Promise<HttpResponse<string[]>> {
        return await this.axiosClient.get<string[]>('/api/types');
    }

    public async getPetBreeds(type: string): Promise<HttpResponse<string[]>> {
        return await this.axiosClient.get<string[]>(`/api/types/${type}/breeds`);
    }
}
