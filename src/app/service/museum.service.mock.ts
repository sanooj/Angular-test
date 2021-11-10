import { Albums, artWorkObjects, artWorkObjectsDetails, Departments } from '../interface/museum.interface';

export const mockDepartments: Departments = {
  departments: [
    {
      departmentId: 1,
      displayName: 'Test name',
    },
  ],
};

export const mockArtworkObjects: artWorkObjects = {
  objectIDs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  total: 1000,
};

export const mockArtworkObjectDetails: artWorkObjectsDetails = {
    objectID: 45734,
    "primaryImage": "https://images.metmuseum.org/CRDImages/as/original/DP251139.jpg",
    "primaryImageSmall": "https://images.metmuseum.org/CRDImages/as/original/DP251139.jpg",
    "title": "Quail and Millet",
};

export const mockAlbums: Albums = {
  src: "https://images.metmuseum.org/CRDImages/as/original/DP251139.jpg",
  caption: 'test caption',
  thumb: "https://images.metmuseum.org/CRDImages/as/original/DP251139.jpg"
};
