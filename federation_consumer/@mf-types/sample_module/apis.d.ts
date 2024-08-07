
    export type RemoteKeys = 'sample_module/App';
    type PackageType<T> = T extends 'sample_module/App' ? typeof import('sample_module/App') :any;