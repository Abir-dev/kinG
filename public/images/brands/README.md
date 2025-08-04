# Brand Logos

This folder contains brand partner logos for the moving cards section on the homepage.

## How to Add Brand Logos

1. **Add your brand logo files** to this folder with the following naming convention:
   - `microsoft.svg` or `microsoft.png`
   - `google.svg` or `google.png`
   - `amazon.svg` or `amazon.png`
   - etc.

2. **Recommended specifications:**
   - Format: SVG (preferred) or PNG
   - Size: 120x60px or similar aspect ratio
   - Background: Transparent
   - Colors: Use brand colors or white/light colors for dark theme compatibility

3. **Current placeholder files:**
   - `placeholder.svg` - Generic placeholder used as fallback
   - `microsoft.svg` - Sample Microsoft-style logo
   - `google.svg` - Sample Google-style logo
   - `amazon.svg` - Sample Amazon-style logo
   - `apple.svg` - Sample Apple-style logo
   - `meta.svg` - Sample Meta-style logo

4. **To update the logos:**
   - Replace the existing files with actual brand logos
   - Or update the logo paths in `/client/pages/HomePage.tsx` in the `brandPartners` array

## Features

The moving cards section includes:
- ✅ Smooth horizontal scrolling animation
- ✅ Pause on hover functionality
- ✅ Premium card design with neon effects
- ✅ Responsive layout
- ✅ Fallback to placeholder if logo fails to load
- ✅ Dynamic gradient backgrounds per brand
- ✅ Enhanced hover effects with particles
- ✅ Partnership statistics section

## Notes

- The cards will automatically use the placeholder.svg if a brand logo fails to load
- All logos should work well on both light and dark themes
- The animation automatically pauses when any card is hovered
- Cards have a premium glass-morphism design with neon accents