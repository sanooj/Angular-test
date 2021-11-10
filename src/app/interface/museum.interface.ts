/**
 * Interface for departments
 */
export interface Departments {
  departments: Department[];
}

/**
 * Interface for each department
 */
export interface Department {
  departmentId: number;
  displayName: string;
}

/**
 * Interface for Art work Object
 */
export interface artWorkObjects {
  objectIDs: number[];
  total: number;
}

/**
 * Interface for Artwork Details
 */
export interface artWorkObjectsDetails {
  objectID: number;
  primaryImage: string;
  primaryImageSmall: string;
  title: string;
}


/**
 * Interface for lightbox album
 */
export interface Albums {
  src: string;
  caption: string;
  thumb: string;
}
