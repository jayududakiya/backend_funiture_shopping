## Gating  Started FURNITURE SHOPPING APP APIS 

1. create All Cured API FOR USERS  [working : Done]
- post = '/'                 => registerUser 
- post = "/login"            => loginUser
- get  = "/"                 => showUserProfile [TokenOnly]
- put  = "/updateUser"       => updateProfile [TokenOnly]
- put  = "/changePassword"   => changePassword [TokenOnly]
- put  = "/deleteUser"       => deleteUser [TokenOnly]

(NOTE  : IMAGE UPLOAD FUNCTIONS )

2. create All Cured API FOR CARTS [working : Testing] 
- get  = '/'                 => getAllCart [TokenOnly] - [Testing]
- post = "/"                 => addToCart [TokenOnly]
- post  = "/updateCart"      => updateToCart [TokenOnly]
- post  = "/deleteCart"       => deleteToCart [TokenOnly]

(NOTE  : IMAGE UPLOAD FUNCTIONS )

3. create All Cured API FOR PRODUCTS [working : Done]
- get  = '/'                 => GetAllProduct 
- get  = "/-q"               => FindProduct (-q for find product base on sku field)
- post = "/"                 => CreateProduct 
- put  = "/"                 => UpdateProduct 
- put  = "/delete"           => DeleteProductSoft

(NOTE  : add to admin TOKEN in this Products API & IMAGE UPLOAD FUNCTIONS )

4. create All Cured API FOR ORDER [working : pending]
- get  = '/'                 => showAllOrder [TokenOnly]
- post = '/'                 => addNewOrder [TokenOnly] [Done]
- post = '/delete'           => deleteOrder [TokenOnly]


(NOTE  : add services Folder )

5. create All Cured API FOR REVIEWS [working : pending]
(NOTE  : Pending )

6. create Filter API FOR WORKING ALL CAllS [working : pending]
(NOTE  : Pending )


