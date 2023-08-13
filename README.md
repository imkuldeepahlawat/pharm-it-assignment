
# PHARMIT

The Inventory Management System



## Deployment

Frontend Deploy on [Vercel](https://vercel.com/).

[Frontend Link](https://pharm-it-assignment-icjidjc4g-imkuldeepahlawat.vercel.app/)

Backend Deploy on [Render](https://render.com/).

- [Backend Link](https://babeljs.io/)


## Screenshots

### Home
![](https://github.com/imkuldeepahlawat/pharm-it-assignment/assets/84150035/55bf5ca0-eea2-4960-b4c0-890aa5a61950)

### Add/Delete Product
![](https://github.com/imkuldeepahlawat/pharm-it-assignment/assets/84150035/3617c7e1-3ee2-4cd1-990d-3e4f4bf951a5)

### +/- Product Qty
![](https://github.com/imkuldeepahlawat/pharm-it-assignment/assets/84150035/c173a680-e885-4fd8-a107-b44a1735f253)

![](https://github.com/imkuldeepahlawat/pharm-it-assignment/assets/84150035/a7ec836b-6d9d-4dee-be0a-6fc5d56899db)




## API Reference

#### To retrieve a list of all products.

```http
  GET /products
```


#### To retrieve a specific product by its ID.

```http
  GET  /products/${productId}
```

#### To add a new product.

```http
  POST /products
```

#### To update the details of an existing product.

```http
  PUT /products/${productId}
```
#### To delete a product.
```http
  DELETE /products/${productId}
```




## Tech Stack

**Client:** React, TailwindCSS, MUI Icons

**Server:** Node, Express, MongoDB, Joi,

