import { Controller, Get } from '@nestjs/common';
import { PostService } from './post.service';
@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}
  @Get()
  allPost(): string {
    return this.postService.getPost();
  }
}
