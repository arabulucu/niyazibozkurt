# Proje Adı: Özdemir Avukatlık Web Sitesi

Bu proje, React kullanarak oluşturduğum bir web sitesidir. Özdemir Avukatlık isimli bir hukuk firmasına aittir. Bu web sitesi, hukuk firmasının sunduğu hizmetleri ve çalışanları tanıtmak için tasarlanmıştır.
<br>
<br>

# Proje Özellikleri
<br>

## Ana Bileşen: App.js ve Yükleme Ekranı
<br>

![Alt Text](./gifs/loadingbar.gif)

App componenti, web sitesinin ana componentidir. Bu component ile web sitesinin tüm alt componentleri bir araya getirilerek bir bütün haline getirilmektedir. Kodda, React, Bootstrap ve CSS kullanılmıştır. Kodda, öncelikle web sitesinin diğer componentleri import edilmiştir. Bunlar Navbar, Services, Parallax, Team, Contact, Portfolio ve Sidebar componentleridir. Sonra, App componenti bir class component olarak tanımlanmıştır. Bu componentin constructorında bir state tanımlanmıştır. Bu state, isLoading adında bir boolean değer içermektedir. Bu değer, web sitesinin yüklenme durumunu belirtmektedir. ComponentDidMount metodunda ise bir setTimeout fonksiyonu ile 2.5 saniye sonra isLoading değeri false olarak değiştirilmektedir. Bu sayede, web sitesinin yüklenmesi için bir loading bar gösterilmektedir. Loading bar elementi içinde avukatlık bürosunun logosu, adı ve bir loading bar inner elementi yer almaktadır. Render metodunda ise web sitesinin tüm alt componentleri sırasıyla div elementleri içinde yerleştirilmiştir. App componenti, web sitesinin tüm alt componentlerini yöneten ve koordine eden bir componenttir.
<br>
<br>

## Navbar: Ana menü
<br>

![Alt Text](./gifs/navbar.gif)

 Navbar componenti, web sitesinin üst kısmında yer alan ve web sitesinin diğer bölümlerine kolayca erişim sağlayan bir componenttir. Bu component ile web sitesinin kullanıcı dostu ve şık bir tasarıma sahip olması amaçlanmıştır. Kodda, React, Bootstrap ve CSS kullanılmıştır. Kodda, web sitesinin logosu ve adını içeren bir navbar-brand elementi tanımlanmıştır. Bu elemente tıklandığında, web sitesinin ana sayfasına yönlendirilmektedir. Ayrıca, navbar-collapse elementi ile web sitesinin portfolyo, hakkımızda, hizmetlerimiz ve iletişim bölümlerine giden bağlantılar oluşturulmuştur. Bu bağlantılar, navbar-nav elementi içinde yer almaktadır. Navbar componenti, web sitesinin profesyonel ve kullanışlı görünmesine katkıda bulunmaktadır.
 <br>
 <br>

## Parallax: Görsel Zenginleştirme
<br>

![Alt Text](./gifs/parallax.gif)

 Parallax componenti, web sitesinin görsel açıdan çarpıcı ve ilgi çekici olmasını sağlayan bir componenttir. Bu component ile web sitesinin ana sayfasında bir paralaks efekti oluşturulmuştur. Paralaks efekti, arka planın ön plandakilerden daha yavaş hareket etmesiyle oluşan bir optik yanılsamadır. Bu sayede, web sitesine derinlik ve hareket katılmıştır. Kodda, React Hooks, CSS ve JavaScript kullanılmıştır. Kodda, useRef ve useEffect hookları ile paralaks efektini gerçekleştiren bir fonksiyon tanımlanmıştır. Bu fonksiyon, window.scrollY değerine göre arka planın ve ön plandaki resimlerin konumlarını değiştirmektedir. Ön plandaki resimler arasında adalet tanrıçası, mahkeme çekici ve masa bulunmaktadır. Ayrıca, web sitesinin adını ve sloganını içeren bir metin de ön planda yer almaktadır. Parallax componenti, web sitesinin dinamik ve modern görünmesine katkıda bulunmaktadır.
 <br>
 <br>

## Services: Hukuk Firmasının Sunduğu Hizmetlerin Listesi
<br>

![Alt Text](./gifs/services.gif)

 Services componenti, web sitesinin en önemli bölümlerinden biridir. Bu component ile avukatlık bürosunun sunduğu hizmetlerin çeşitliliği ve kalitesi gözler önüne serilmektedir. Kodda, hizmetlerin başlıkları, ikonları ve içerikleri bir dizi olarak tanımlanmıştır. Bu dizi, map fonksiyonu ile ServiceCard componentine gönderilerek, her bir hizmet için dinamik bir şekilde bir kart oluşturulmuştur. Kartların tasarımında Bootstrap ve CSS kullanılmıştır. Kartlara tıklandığında, hizmetin detaylarını gösteren bir modal açılmaktadır. Modal için React-Bootstrap kütüphanesinden Modal componenti kullanılmıştır. Modal içinde hizmetin başlığı, resmi ve içeriği yer almaktadır. İçerikte, hizmetin kapsamı ve sunulan danışmanlık hizmetlerinin listesi bulunmaktadır. Bu sayede, potansiyel müşterilerin ilgisini çekmek ve onlara güven vermek amaçlanmıştır. Services componenti, web sitesinin profesyonel ve etkileyici görünmesine katkıda bulunmaktadır.
 <br>
 <br>

## Team: Hukuk Firmasında Çalışanların Tanıtımı
<br>
Team componenti, web sitesinin avukatlık bürosunun kurucusu ve çalışanlarını tanıtan bir componenttir. Bu component ile web sitesinin güvenilir ve deneyimli bir ekibe sahip olduğu vurgulanmaktadır.
<br>
<br>

## Contact: İletişim Bilgileri
<br>

![Alt Text](./gifs/contact.gif)

 Contact componenti, web sitesinin avukatlık bürosu ile iletişime geçmek isteyen potansiyel müşterilere kolaylık sağlayan bir componenttir. Bu component ile web sitesinin erişilebilir ve müşteri odaklı bir hizmet verdiği belirtilmektedir. Kodda, React, Bootstrap, CSS ve Google Maps API kullanılmıştır. Kodda, iletişim bölümünün başlığı ve alt başlığı tanımlanmıştır. Sonra, avukatlık bürosunun e-posta, adres, sabit hat ve cep numarası gibi iletişim bilgileri bir dizi olarak tanımlanmıştır. Bu dizi, map fonksiyonu ile div elementleri içinde gösterilmiştir. Ayrıca, e-posta, WhatsApp ve arama gibi etkileşimli logolar da tanımlanmıştır. Bu logolara tıklandığında, ilgili uygulamalara yönlendirilmektedir. Bunların yanında, avukatlık bürosunun konumunu gösteren bir Google Maps haritası da iframe elementi ile yerleştirilmiştir. Contact componenti, web sitesinin müşterilerine kolay ve hızlı bir şekilde ulaşma imkanı sunduğunu göstermektedir.
<br>
<br>

## Portfolio: Hukuk Firmasının Tecrübesi
<br>

![Alt Text](./gifs/portfolio.gif)

Portfolio componenti, web sitesinin avukatlık bürosunun sunduğu hizmetlerin kapsamını ve tecrübesini gösteren bir componenttir. Bu component ile web sitesinin geniş bir hukuk alanında uzmanlaşmış ve başarılı bir çalışma geçmişine sahip olduğu ifade edilmektedir. Sonra, avukatlık bürosunun sunduğu hizmetlerin adları ve ilgili resimleri bir dizi olarak tanımlanmıştır. Ayrıca, bu componentte her bir hizmetin verilen sayısı da bir project-count elementi ile gösterilmektedir. Bu sayılar, useEffect hooku ile scroll eventine bağlı olarak artarak belirlenen değere ulaşmaktadır. Portfolio componenti, web sitesinin etkileyici ve güven verici bir portfolyoya sahip olduğunu göstermektedir.
<br>
<br>

## Sidebar: Sayfa İçinde İletişim İçin Erişim Kolaylığı
<br>

![Alt Text](./gifs/sidebar.gif)

 SideBar componenti, web sitesinin sağ alt köşesinde yer alan ve web sitesinin avukatlık bürosu ile iletişime geçmek için alternatif bir yol sunan bir componenttir. Bu component ile web sitesinin her zaman ulaşılabilir ve yardıma hazır olduğu gösterilmektedir. Kodda, React, Bootstrap ve CSS kullanılmıştır. Kodda, iletişim yazısını içeren bir button elementi tanımlanmıştır. Bu buttona tıklandığında, offcanvas elementi ile bir sidebar açılmaktadır. Sidebar içinde, e-posta, WhatsApp ve arama gibi etkileşimli logolar yer almaktadır. Bu logolara tıklandığında, ilgili uygulamalara yönlendirilmektedir. SideBar componenti, web sitesinin müşterilerine kolay ve hızlı bir şekilde ulaşma imkanı sunduğunu göstermektedir.
<br>
<br>

## Gereksinimler
Bu projenin çalışması için aşağıdaki gereksinimlerin yüklü olması gerekmektedir:
- Node.js
- React

## Kaynaklar
Bu proje, avukatlık bürosunun hizmetlerini, portfolyosunu, ekibini ve iletişim bilgilerini gösteren modern ve profesyonel bir web sitesi oluşturmak için aşağıdaki teknolojileri kullanarak geliştirilmiştir:

- [React.js](https://reactjs.org/docs/getting-started.html): Bir JavaScript kütüphanesi olarak web arayüzlerini oluşturmak için kullanılmıştır. React.js, web sitesinin performansını ve kullanıcı deneyimini artırmak için bileşen tabanlı bir yapı sunar. Bu sayede web sitesinin içeriği ve tasarımı kolayca yönetilebilir ve güncellenebilir.
- [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/): Bir CSS çatısı olarak web sitesinin tasarımını ve duyarlılığını sağlamak için kullanılmıştır. Bootstrap, web sitesinin farklı cihaz ve ekran boyutlarında uyumlu ve estetik görünmesini sağlar. Ayrıca, Bootstrap, web sitesine animasyon, modal, offcanvas gibi çeşitli özellikler eklemek için hazır bileşenler sunar.
- [Google Maps API](https://developers.google.com/maps/documentation): Bir web servisi olarak web sitesinde harita göstermek ve konum bilgisi vermek için kullanılmıştır. Google Maps API, web sitesine interaktif ve güncel bir harita eklemek için kolay bir yöntem sağlar. Bu sayede, web sitesi ziyaretçileri avukatlık bürosunun adresini kolayca bulabilir ve yol tarifi alabilirler.