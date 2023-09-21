import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  getCategories(): string {
    return 'Siamo nelle categorie';
  }
}
