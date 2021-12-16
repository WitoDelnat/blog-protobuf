# Blog: TypeScript meets Protobuf, gRPC and Twirp

Read the blog at https://www.witodelnat.eu/blog/2021/protobuf-typescript.

## Try it yourself

### Twirp server

```
cd twirp-server
yarn install
buf generate --path proto/blog.proto
yarn dev
```

### gRPC server

```
cd grpc-server
yarn install
buf generate --path proto/blog.proto
yarn dev
```

Note: grpc-tools is currently not available on Darwin arm64 and you will receive a node-pre-gyp error (see [GitHub issue](https://github.com/grpc/grpc-node/issues/1405)).
