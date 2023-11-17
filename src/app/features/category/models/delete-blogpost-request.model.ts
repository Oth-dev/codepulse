export interface DeleteBlogPostRequest{
  title: string;
  shortDescription: string;
  content: string;
  featuredImageUrl: string;
  urlHandle: string;
  publishedDate: Date;
  isVisible: boolean;
  author: string;

}
