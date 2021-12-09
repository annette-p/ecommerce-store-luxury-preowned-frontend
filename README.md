# Luxury Preowned Platform

# Demo

A live website of the application can be found here:

* **Frontend** (React framework): https://reverent-pasteur-680936.netlify.app
* **Admin** (node.js/Express, HBS): https://annette-p-luxury-preowned-adm.herokuapp.com
* **Backend** (node.js/Express, MySQL, Postgresql): https://annette-p-luxury-preowned-api.herokuapp.com

Setup instructions: [Frontend](DEVELOPMENT.md) | [Admin](https://github.com/annette-p/ecommerce-store-luxury-preowned-admin/blob/main/docs/DEVELOPMENT.md) | [Backend](https://github.com/annette-p/ecommerce-store-luxury-preowned-backend/blob/main/docs/DEVELOPMENT.md)


## Luxury Resale Market Analysis

Click [here](docs/luxury-resales-market-analysis-report.pdf) to view the report

## Executive Summary

### Company and Product summary

Luxury Pre-owned is a resale luxury eCommerce stores that sell top edged consumer products and allow consignment of luxury consumer products through platform, promote sustainable luxury through circular fashion (shop, sell and repeat) and help reduce waste in fashion industry.

### Company and User Goal

|   |Key stakeholders|Goals|
|---|---|---|
|**Company**|Owner|• Operate eCommerce store, consign-sell luxury products, made most process happen online and automated as much as possible. <br>• Promote circular fashion through shop, sell, repeat. <br>• Provide channels for consumer to purchase trusted, reliable source of authentic luxury products. <br>• Provide channels to accommodate seller who want to sell their luxury products. <br>• Channels to gather feedback data and collect user transaction data for future business expansion|
|**Company**|Admin|• To management and perform order processing <br>• To manage product listing and recording|
|**Customers**|Buyer|• To buy authentic resale luxury products online at convenience. <br>• Needed trusted and reliable since there are many counterfeit products out there. To reduce a risk of buying unauthentic items. <br>• Need transparency and reasonable price as per market trend. <br>• Purchase a rare, limited edition and vintage items that hard to come by and easily available in the market.|
|**Company**|Owner|• Looking for trusted site/brand to sell or consign their authentic luxury products. <br>• Want to finance new luxury purchases and empty the wardrobe <br>• To get ride of items that are no longer in trendy anymore|

### Product Goal

Provide secured platform for consumer to purchase and sell their authentic luxury consumer products, made the process transparent and visible to them. Ability to view their order transactions, history and as well as manage their account.

### Product & Features


|Features|Benefits to Users|Benefits to Company|
|---|---|---|
|**Listing** /<br>**Product Details** /<br>**Shopping Cart**|<h4>Listing</h4>▪ List of all products on the first page of the site application <br><ul><li>Display the image with function to hover image changes, provide quick views and idea how it looks like when using the products <li>Name if the brand or designer display o Details of the products <li>Price <li>Estimate retail price</ul><br>▪ Ability to click on any area of the product to view more details about that respective product <br>▪ Login is not required makes it easy for customers who just new to the page and has yet to have account to explore the product and the site around <h4>Product Details</h4>▪ Details of the products <br>▪ Ability to add to cart and to perform quick checkout to complete the payment ▪ Collapse and expandable of the product information such as description, specification, condition and etc <br>▪ Option to sell the same product if customer who are viewing the page is having the similar products. <br>▪ Indication of the product being authenticated and the return/refund are allowed. <br>▪ Login is not required makes it easy for customers who just new to the page and has yet to have account to explore the product and the site around. <h4>Shopping Cart</h4>▪ Accumulated the items that intended to purchase <br>▪ It provides the quick summary details of the product (brand/designer name, product type, price, condition, quantity) <br>▪ Ability to add more quantity or reduce and remove the item from shopping cart.|▪ Provide a complete features of eCommerce store to display products, with its details to allow customer to make to purchase decision, shopping cart and secured payment process via the platform. The sales transactions can happen without human interaction and customer self-service. <br>▪ Indication and assuring of product authenticity being authenticated by the company, giving the customer peace of mind that they are buying an authentic product. Answer their pain point of buying authentic products online. <br>▪ Ability to attract any customers who are viewing the products and are having the same product to consign their product through the platform. <br>▪ UX/UI design in such a way that within 3 click, customers are able to complete the checkout and payment process. With this allow sales to happen quicker than needed to navigate more click to complete the transactions. <br>▪ No login required for listing page, product page, and even add to cart. This allows customers who just want to browse around or new to the site to view the products and add some of them into shopping cart to comeback later for actual purchase. It helps increase UX and user stickiness which will lead to account creation later when customers want to actually purchase it.|
|**Consignment Page**|▪ Provide information of how to consign the product with the platform <br>▪ Consignment rates are provided in the collapse table, easy to navigation and collapse when no longer needed. <br>▪ Easy steps to consign with the platform and that’s being summaries in carousel of the page. <br>▪ Product consignment form or request for appointment to check products to consign are available on the page, with easily collapse or expand as wish.|▪ Make consignment easy for customer who wish to sell their products online and ensure that their luxury items are being taken care of. <br>▪ The more consignment received via platform, the more product listing the company will have. <br>▪ More consignment means more business transactions to the company from consignment rate <br>▪ More listing means more sales to company which return increasing in revenue.|
|**Search and filtering** /<br><br>**Filtering section for limited edition items, vintage items and others**|▪ Ability to perform search on the product listing by any key words. The system will match those key words to existing products in database across all categories, designers and brand <br>▪ Quick filtering by selecting the pre-defined filtering provided by platform (e.g. by categories, by designer, new arrival, limited edition, vintage). <br>▪ Make filtering or search to desired information with specific product easier for customers.|▪ Provide better UX/UI of the products. <br> ▪ With easy navigation, quick to filter to get the specific information, makes decision easier for customers and in return, in crease sales transaction to company|
|**Feedback Form**|▪ Customers can send feedback to the site owner on whatever suggestion or new request they might have or wish to improve the usability.|▪ Ability to collect more data through feedback and suggestion (this includes the data of customers deciding to delete the account) for any future improvement to any features or new business idea.|
|**Account and Order Management**|▪ Users who have transactions and account with the site, can view their profile via platform <br>▪ Allow customers to self-manage their profile, help reduce the work to admin staff. <br>▪ Ability to view orders (both purchase and sell) made they them, with different status, tracking their orders via platform. <br>▪ Ability to manage their own profile (account update, change account details, change password)|▪ Customers can track their orders, view status of their orders (purchase, consignment) without send query to customers service of the site.|
|**Account and profile creation**|▪Super easy for account creation with the platform. Just name, username, email and set password then customers are up to make a purchase on the site.|▪ Easy creation yet secured allow customers to have quick account setup to make a purchase transaction through platform.|
|**Deletion of the account and the listing**|▪ Customers can delete their account anytime when they decided not to use the platform for any reason.|▪ The account will be removed from the platform DB, no record of customer will be kept on the platform (old orders will be re-assigned to fake users account for business audit trail purpose) <br>▪ The data provided for the reason to leave the platform will be collected and stored separately for future revision.|

See [attached document](docs/testing-manual-project3.pdf) for more details on each product features.

## UX/UI

### Strategy

#### Users

|Consumer Demographic|Characteristic behavioural|
|---|---|
|**Gen Z / Millennials**|<ul><li>High interest in collaboration pieces, <li>consider resale value when purchasing, <li>influence by sustainability (in trend but not practically into it), <li>high on social media interaction, <li>shift spending from traditional luxury to premium luxury</ul>|
|**Gen X**|<ul><li>Interest in traditional luxury</ul>|
|**True-luxury consumers**|Status seeker, fashionista, Rich up-starter, absolute luxurer, social wearer (majority are millennial tribe) <ul><li>Seeking extravagance <li>Runway collections <li>New creativity ((new wave luxury value) <li>Very high interest in limited edition and rate items<ul>|


|Users||
|---|---|
|**Customer (buy)**|<p>Customers (Gen Z, millennials, Gen X, true-luxury consumers) who buy the authentic luxury products on the platform</p><p>individual customers who are looking to buy trusted, authentic resale luxury products online, who need assuring and guarantee the authenticity of the products their purchased.</p>|
|**Customer (consign)**|<p>Customers (Gen Z, millennials, Gen X, true-luxury consumers) who are looking to sell their authentic luxury products on the platform</p><p>Individual customers who are looking for trusted site to sell their authentic items online with less effort, has transparency to trace the status and what’s going on with their consignment.</o>|

### User needs and pain points

||Needs|Pain Points|
|---|---|---|
|**Customer (buy)**|<ul><li>Looking for vintage, limited edition, rare items that are not easily available on retail.<li>Looking to purchase on trusted, reliable source of authentic luxury products <li>Need affordable authentic luxury items <li>Transparency on the price, authenticity with guarantee <li>Need federated login ties to their social media account as they are super high on social media interaction</ul>|<ul><li>Rare items, limited edition or vintage pieces are hard to come by<li>Unsure of the authenticity of the product purchase (be it online of in store) unless purchase directly from the actual brand store which is the first- hand item. <li>Need to manage several login accounts for different website instead of just using their social media to login as user authentication|
|**Customer (sell)**|<ul><li>To sell their authentic luxury items with no effort (to either their wardrobe, financing new luxury items of desired, to recycle or change a new in trend luxury item)<li>Need to sell on legitimated and trusted site.<li>Transparent process, can track the status an know what’s going on with the process.<li>Need federated login ties to their social media account as they are super high on social media interaction<ul>|<ul><li>The selling process are too complicated and no transparency <li>Afraid of being switch from the authentic products to counterfeit from the store (untrusted site) <li>Need to manage several login accounts for different website instead of just using their social media to login as user authentication </ul>|
|**Admin (staff)**|<ul><li>To manage and perform order (purchase and consignment) processing as flowless as possible<li>To manage product and listing on the site</ul>|<ul><li>Need the order flow correctly with less complication or unnecessary step to perform their task or reducing efficiently in managing orders and products.</ul>|


