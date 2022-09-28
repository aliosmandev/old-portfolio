export interface Large {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Small {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Medium {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Thumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Formats {
  large: Large;
  small: Small;
  medium: Medium;
  thumbnail: Thumbnail;
}

export interface ImageAttributes {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata?: any;
  createdAt: Date;
  updatedAt: Date;
}

export interface Data<T> {
  id: number;
  attributes: T;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  previewUrl: string;
  githubUrl: string;
  banner: {
    data: Data<ImageAttributes>;
  };
}

export interface Skill {
  id: number;
  name: string;
  image: {
    data: Data<ImageAttributes>;
  };
}

export interface Attributes {
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  projects: Project[];
}

export interface Meta {}

export interface Response<T> {
  data: Data<T>;
  meta: Meta;
}
