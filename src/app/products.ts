export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  productReleaseYear: number;
  stockStatus: boolean;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    productReleaseYear: 2022,
    stockStatus: false,
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    productReleaseYear: 2021,
    stockStatus: true,
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    productReleaseYear: 2020,
    stockStatus: true,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
