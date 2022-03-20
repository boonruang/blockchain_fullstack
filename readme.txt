npm init -y
npm i jest --save-dev

npm i hex-to-binary@1.0.1 --save
npm i express@4.16.3 --save
npm i nodemon@1.18.4 --save-dev
npm i body-parser@1.18.3 --save-dev 

Github course
https://github.com/15Dkatz/cryptochain

npm i redis@2.8.0 --save

install redis-server on Windows OS
redis-server --service-install redis.windows.conf --loglevel verbose
redis-server --service-start
redis-server --service-stop
redis-server --service-uninstall

npm i pubnub@4.21.6 —save
npm i cross-env@5.2.0 --save-dev
npm i request@2.88.0 --save
npm i elliptic@6.4.1 --save
npm i uuid@3.3.2 --save 

sha256-hash-generator online
https://passwordsgenerator.net/sha256-hash-generator/

## React Frontend
npm i react react-dom
npm i parcel-bundler

npm run build-client
npm run dev

npm i babel-core@6.26.3 babel-plugin-transform-class-properties@6.24.1 babel-plugin-transform-object-rest-spread@6.26.0 babel-preset-env@1.7.0 babel-preset-react@6.24.1 --save

remove all babel related (above)
delete .babelrc

npm i @babel/core@7.2.2 --save-dev

npm i react-bootstrap
npm i react-router-dom@4.3.1 --save
npm i history@4.7.2 --save

deploy
heroku login
git init
heroku create
https://rocky-peak-35087.herokuapp.com/ | https://git.heroku.com/rocky-peak-35087.git
heroku addons:create heroku-redis:hobby-dev -a rocky-peak-35087

redis-rugged-72030 is being created in the background. The app will restart when complete...       
Use heroku addons:info redis-rugged-72030 to check creation progress
Use heroku addons:docs heroku-redis to view documentation

heroku addons:info redis-rugged-72030