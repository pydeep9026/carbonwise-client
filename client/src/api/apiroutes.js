export const host="http://localhost:5000/api";


/*user routes*/
export const loginroute=`${host}/user/login`
export const registerroute=`${host}/user/register`
export const getuserwishlistroute=`${host}/user/wishlist`
export const addtocartroute=`${host}/user/cart`
export const getusercartroute=`${host}/user/cart`
export const removefromcartroute=`${host}/user/cart/delete-product-cart`
export const updatecartroute=`${host}/user/cart/update-product-cart`
/*user routes*/

/*product routes*/
export const getallproductsroute=`${host}/product`
export const getproductroute=`${host}/product`
export const addtowishlistroute=`${host}/product/wishlist`
/*product routes*/
 

/*contact routes*/
export const enquiryroute=`${host}/enq/create-enquiry`




/*blog routes*/
export const getallblogsroute=`${host}/blog`
export const getblogroute=`${host}blog/`
/*blog routes*/
