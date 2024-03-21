    ENGLISH: 

    *In the admin route we prepared, there will be only CRUD operations. In order for CRUD operations to occur in the admin route, you must be logged in with the admin person we added to the db. (You can use cookie-session for this. And when the request comes, you can check whether there is session information or not.)

    *User transactions will only involve login and logout. You can use the admin person in sync operations.

    *In the search process, it will be checked whether the incoming query is included in the title or description, as in dummyjson.

    *Cors operation will only allow GET request for the public part. It will only allow POST requests for the user section. There will be no cors permission for the admin section. (Optionally, frontend can be prepared for admin)

    *Do not forget to take advantage of BlogApp courses.

    *Detailed information about route operations is available in the postman collection in the readme.

    *No authorization is required for the public part.

    *Those who wish can also prepare frontend. You can perform a mock login-logout operation in the frontend.

    *You can use dummyjson for products and category information.

    TURKISH: 

    *Hazırladığımız admin routeunda sadece ve sadece CRUD işlemleri olacak. Admin routeunda CRUD işlemlerinin olabilmesi için yine db ye eklediğimiz admin kişisiyle login olunmuş olması lazım.(Bunun için cookie-session kullanabilirsiniz. Ve istek geldiğinde session bilgisi var mı yok mu kontrol edebilirsiniz.)

    *User işlemlerinde sadece login ve logout olacak. Admin kişisini sync işlemlerinde gerçekleştirebilirsiniz.

    *Search işleminde dummyjsonda olduğu gibi gelen querynin title veya description içerisinde yer alıyor almıyor mu ona bakılacak.

    *Cors işlemi public kısım için sadece GET isteğine izin verecek. User kısmı için de sadece POST isteğine izin verecek. Admin kısmı için cors izni olmayacak. (isteğe göre admin için de frontend hazırlanabilir)

    *BlogApp derslerinden yararlanmayı ihmal etmeyiniz.

    *Route işlemleri için ayrıntılı bilgi readme içerisinde bulunan postman collectionda mevcut.

    *Public kısım için authorizationa ihtiyaç yok.

    *Arzu edenler frontend de hazırlayabilirler. Frontend kısmında göstermelik login-logout işlemi yapabilirsiniz. Örnek frontend için tıklayınız.

    *Products ve category bilgileri için dummyjsondan yararlanabilirsiniz.