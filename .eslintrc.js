module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "env": { //para o eslint reconhecer o mocha
      "mocha": true,
      "browser": true
    },
    "rules": {
      "no-unused-expressions": 0, // to reseto do chai friendly
      "chai-friendly/no-unused-expressions": 2, // to reseto do chai friendly,
      "no-unused-vars": [
        "error",
        {
          "varsIgnorePattern": "should|assert" //slint ignora o should e o asset também
        }
      ],
        "import/no-extraneous-dependencies":
        ["error", {
            "devDependencies": true},
        ]
    },
    "plugins": [ // to work with chai
      "chai-friendly"
    ]

};
