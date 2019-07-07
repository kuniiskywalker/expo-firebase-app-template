
## app.json

```app.json
{
  "expo": {
    "name": "e-vent",
    "slug": "e-vent",
    "privacy": "public",
    "sdkVersion": "32.0.0",
    "platforms": [
      "ios",
      "android"
    ],
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "extra": {
      "firebase": {
        "apiKey": "{FIREBASE API KEY}",
        "authDomain": "{FIREBASE AUTH DOMAIN}",
        "databaseURL": "{FIREBASE DATABASE URL}",
        "projectId": "{FIREBASE PROJECT ID}",
        "storageBucket": "{FIREBASE STORATE BUCKET}",
        "messagingSenderId": "{FIREBASE MESSAGING SENDER ID}"
      },
      "facebook": {
        "appId": "{FACEBOOK APP ID}"
      }
    }
  }
}
```