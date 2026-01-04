# Asset Placement Instructions

The site expects assets to be placed in `public/assets/` folder. 

## Required Assets

Copy your assets folder structure to `public/assets/`:

```
public/
└── assets/
    ├── black-logo.png
    ├── white-logo.png
    ├── black-product-logo-salve.png
    ├── white-product-logo-salve.png
    ├── icons/
    │   └── favicon.png
    ├── img/
    │   ├── berries-bottle.jpg
    │   ├── berries-bouquet.jpg
    │   ├── berries-jar.jpg
    │   ├── berries-jar1.jpg
    │   ├── berries-jar2.jpg
    │   ├── berry-handbag.jpg
    │   ├── berry-paintbrush.jpg
    │   ├── berry-rubber-ring-pool.jpeg (large - not used in default hero)
    │   ├── champagne-caviar.jpg
    │   ├── cherries-coffee.jpg
    │   ├── cream.jpeg (very large - not used)
    │   ├── female-berry-dress.jpg
    │   ├── female-cream.jpg
    │   ├── female-cream1.jpg
    │   ├── female-eating.jpg
    │   ├── female-male-eating.jpeg
    │   ├── male-berry-suit.jpg
    │   └── male-drinking.jpg
    ├── video/
    │   └── cream.mp4
    └── font/
        ├── Ballet-Regular.ttf
        ├── SnellRoundhand.ttc
        ├── Inter.ttf
        ├── Inter-Italic.ttf
        └── Body-Baskerville.ttc
```

## Performance Notes

- `cream.jpeg` (~22MB) and `berry-rubber-ring-pool.jpeg` (~4MB) are very large
- The site uses the video (`cream.mp4`) as the hero background instead of large images
- All images are lazy-loaded for better performance

## Font Notes

- Ballet is used for the "C" in the wordmark
- SnellRoundhand is used for "elvia" in the wordmark
- The site falls back to the white-logo.png image if fonts don't load properly
- Inter is used for body text with Montserrat as a web font fallback
