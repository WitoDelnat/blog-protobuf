import * as http from "http";
import { Blog } from "./__generated__/proto/blog";
import { createBlogServiceServer } from "./__generated__/proto/blog.twirp";

let blogs: Blog[] = [{ title: "hello", content: "world" }];

const server = createBlogServiceServer({
  Blogs: () => {
    return Promise.resolve({ blogs });
  },
  BlogCreate: (_ctx, request) => {
    blogs.push({ ...request });
    return Promise.resolve({});
  },
});

http.createServer(server.httpHandler()).listen(8080);
