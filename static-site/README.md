# SecureHire - Static Website

A professional background screening website built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Contact Form**: Interactive contact form with validation and feedback
- **Dynamic Effects**: Scroll animations, hover effects, and smooth transitions
- **Professional Styling**: Color scheme and typography optimized for business use

## File Structure

```
static-site/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## How to Use

1. **Local Development**: 
   - Open `index.html` in any modern web browser
   - Or serve using a local server (e.g., `python -m http.server` or Live Server extension)

2. **Deployment**:
   - Upload all files to your web hosting service
   - Ensure all files are in the same directory
   - Access via your domain

## Customization

### Colors
Edit the CSS variables in `styles.css` to change the color scheme:
```css
:root {
    --primary: #2563eb;        /* Main brand color */
    --primary-dark: #1d4ed8;   /* Darker shade */
    --primary-light: #3b82f6;  /* Lighter shade */
    /* ... more variables ... */
}
```

### Content
- Edit text content directly in `index.html`
- Update contact information in the contact section
- Replace placeholder images with your own

### Contact Form
The contact form currently simulates form submission. To make it functional:
1. Replace the simulation in `script.js` with your actual API endpoint
2. Update the form action and method as needed
3. Configure server-side form handling

## Dependencies

- **Font Awesome**: Icons (loaded from CDN)
- **Google Fonts**: Automatically loads Inter font family
- No other external dependencies required

## Browser Support

- Chrome (latest)
- Firefox (latest) 
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+ (with reduced animations)

## Performance

- Optimized images from Unsplash
- Minimal JavaScript for fast loading
- CSS animations using hardware acceleration
- Responsive images for different screen sizes

## Contact Information

The website includes the following contact details (update as needed):
- **Phone**: +1 (555) 123-4567
- **Email**: contact@securehire.com
- **Address**: 123 Business District, Suite 100, New York, NY 10001

## License

This is a template/example website. Feel free to modify and use for your own projects.