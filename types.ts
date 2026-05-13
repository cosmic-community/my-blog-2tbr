export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicFile {
  url: string;
  imgix_url: string;
}

export interface Author extends CosmicObject {
  type: 'authors';
  metadata: {
    name?: string;
    bio?: string;
    photo?: CosmicFile;
    expertise?: string;
  };
}

export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    name?: string;
    description?: string;
  };
}

export interface TeachingMaterial extends CosmicObject {
  type: 'teaching-materials';
  metadata: {
    title?: string;
    description?: string;
    material_type?: string;
    file?: CosmicFile;
    preview_image?: CosmicFile;
  };
}

export interface Post extends CosmicObject {
  type: 'posts';
  metadata: {
    title?: string;
    content?: string;
    featured_image?: CosmicFile;
    activity_photos?: CosmicFile[];
    author?: Author;
    category?: Category;
    teaching_materials?: TeachingMaterial[];
    tags?: string[];
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}