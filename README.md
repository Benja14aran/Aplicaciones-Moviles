Buenas noches profesora, en el CMD de entrega Experiencia 3 ahi un txt con los install igual

Codigo para CMD
json-server --watch almacen.json --host 0.0.0.0 --port 3000
ionic server

Link del Render
Render: https://apitestdata-6o09.onrender.com

Install necesarios
npm install -g @ionic/cli
ionic start MyApp blank --type=angular
ng update @angular/core@18 @angular/cli@18
npm install @angular/common @angular/forms @angular/router --save --legacy-peer-deps
npm install tslib --save
npm install swiper@latest
npm install @capacitor/camera
npx cap sync
npm install angularx-qrcode@18.0.1 qrcode

Install de JSON
npm init –y
npm install node
npm install json-server@0.17.4
npm install cors

git status
git add .
git commit -m "TestApiDeploy“
git push -u origin main

Install de Android Studio
ionic build
npm install @capacitor/android
npx cap add android
ionic capacitor sync android
Ionic capacitor copy android
Ionic capacitor open android
