import { createGrpcServer } from "./createGrpcServer";
import { BlogServiceService } from "./__generated__/proto/blog_grpc_pb";
import * as pb from "./__generated__/proto/blog_pb";

type Blog = { title: string; content: string };
let blogs: Blog[] = [{ title: "hello", content: "world" }];

const server = createGrpcServer({
  service: BlogServiceService,
  name: "BlogService",
  methods: {
    blogs: async (ctx) => {
      const blogsList = blogs.map((blog) =>
        new pb.Blog().setTitle(blog.title).setContent(blog.content)
      );

      ctx.res = new pb.BlogsResponse().setBlogsList(blogsList);
    },
    blogCreate: async (ctx) => {
      const newBlog = {
        title: ctx.req.getTitle(),
        content: ctx.req.getContent(),
      };

      blogs.push(newBlog);

      ctx.res = new pb.Empty();
    },
  },
});

server.start("0.0.0.0:8080");
