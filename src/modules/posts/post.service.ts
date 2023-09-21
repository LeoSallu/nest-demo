import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  getPost(): string {
    return 'Sono stupido';
  }
}
