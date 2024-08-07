
    export type RemoteKeys = 'federation_consumer/App';
    type PackageType<T> = T extends 'federation_consumer/App' ? typeof import('federation_consumer/App') :any;