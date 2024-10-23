## Gating Started FURNITURE SHOPPING APP APIS

<!-- !-------------------------------- Token -------------------------------- -->
- {
   "user" : "JAYAN",
   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmRlNmI5MTcxNmQ0YjJlMDdiYzQyMjEiLCJpYXQiOjE3MjY4MDE3MjZ9.KLGY9x-2s-tEE3IcjttuxIv6LFDSDbi9YzVfHidJNrI"
}
- {
   "user" : "NIKHIL",
   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmUxZGI5NzFmOWMyOGFkMDlmYjVjNmMiLCJpYXQiOjE3MjY4MDM2MjF9.UoJsGUgYDOMlRG6s4HrEd_OMwGOBuPA1JNN58dnQkdU"
}

1. create All Cured API FOR USERS [working : Done]

- post = '/' => registerUser
- post = "/login" => loginUser
- get = "/" => showUserProfile [TokenOnly]
- put = "/updateUser" => updateProfile [TokenOnly]
- put = "/changePassword" => changePassword [TokenOnly]
- put = "/deleteUser" => deleteUser [TokenOnly]

(NOTE : IMAGE UPLOAD FUNCTIONS )

2. create All Cured API FOR CARTS [working : Testing]

- get = '/' => getAllCart [TokenOnly] - [Testing]
- post = "/" => addToCart [TokenOnly]
- post = "/updateCart" => updateToCart [TokenOnly]
- post = "/deleteCart" => deleteToCart [TokenOnly]

(NOTE : IMAGE UPLOAD FUNCTIONS )

3. create All Cured API FOR PRODUCTS [working : Done]

- get = '/' => GetAllProduct
- get = "/-q" => FindProduct (-q for find product base on sku field) [testing]
- post = "/" => CreateProduct
- put = "/" => UpdateProduct
- put = "/delete" => DeleteProductSoft

# Here’s the category list that was used in the provided objects: TOTAL OBJECT IS = 29

- lamps    [find : 0]      
- tables   [find : 6]             
- sofas    [find : 2]    
- chairs   [find : 7]      
- stands   [find : 2]      
- shelves  [find : 3]             
- ottomans [find : 1]                     
- dressers [find : 1]                     
- outdoor  [find : 1]                    
- beds     [find : 3]                 
- stools   [find : 1]                   
- storage  [find : 2]                    

(NOTE : add to admin TOKEN in this Products API & IMAGE UPLOAD FUNCTIONS )

4. create All Cured API FOR ORDER [working : pending]

- get = '/' => showAllOrder [TokenOnly]
- post = '/' => addNewOrder [TokenOnly] [Done]
- post = '/delete' => deleteOrder [TokenOnly]

(NOTE : add services Folder )

5. create All Cured API FOR REVIEWS [working : pending]
   (NOTE : Pending )

6. create Filter API FOR WORKING ALL CAllS [working : pending]
   (NOTE : Pending )
