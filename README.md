# Blog Uygulaması

Bu proje, Node.js ve Express kullanılarak geliştirilmiş basit bir blog uygulamasıdır. Kullanıcılar blog yazıları ekleyebilir, düzenleyebilir ve silebilir.

## Kurulum

### 1. Depoyu Klonlayın

```bash
git clone <repo-link>
cd <repo-adi>
```

### 2. Bağımlılıkları Yükleyin

```bash
npm install
```

## Kullanım

### 1. Geliştirme Modunda Çalıştırın

```bash
npm run dev
```

### 2. Üretim Modunda Çalıştırın

```bash
npm start
```

## Gereksinimler

Bu proje aşağıdaki bağımlılıkları kullanmaktadır:

### Bağımlılıklar (Dependencies)

```json
{
  "ejs": "^3.1.10",
  "express": "^4.21.2",
  "method-override": "^3.0.0",
  "mongoose": "^8.12.1"
}
```

### Geliştirme Bağımlılıkları (DevDependencies)

```json
{
  "nodemon": "^3.1.9",
  "prettier": "^3.5.3"
}
```

## Çevre Değişkenleri

`.env` dosyasında aşağıdaki çevre değişkenlerini tanımlamanız gerekmektedir:

```
MONGO_URI=<MongoDB Bağlantı Adresi>
PORT=3000
```

## Özellikler

- **MongoDB Kullanımı**: Blog yazıları MongoDB veritabanında saklanmaktadır. `mongoose` kütüphanesi ile veritabanı bağlantısı sağlanmıştır.
- **Blog İşlemleri**: Kullanıcılar blog yazıları ekleyebilir, düzenleyebilir ve silebilir.
- **Dinamik Şablonlar**: `ejs` kullanılarak dinamik HTML sayfaları oluşturulmuştur.
- **Method Override**: Tarayıcı formlarında `PUT` ve `DELETE` metodlarını kullanmak için `method-override` paketi eklenmiştir.
- **Geliştirme Aracı**: `nodemon` kullanılarak geliştirme sürecinde otomatik yeniden başlatma sağlanmıştır.

## Teknolojiler

Bu projede aşağıdaki teknolojiler kullanılmıştır:

- Node.js
- Express
- MongoDB
- HTML
- CSS
- JavaScript
- EJS

##

