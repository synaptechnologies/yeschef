# YesChef Restaurant Website

## Overview
This is the official website for YesChef Restaurant, featuring authentic Ghanaian cuisine. The website includes online ordering capabilities, location-based services, and time-based ordering restrictions.

## Features
1. **Time-Based Ordering Restriction**: Automatically checks if the restaurant is open based on the current time and prevents ordering during closed hours.
2. **Location-Based Branch Suggestion**: Finds the customer's location and suggests the nearest restaurant branch for pickup or delivery.
3. **Online Ordering**: Customers can add items to their cart and place orders via WhatsApp.
4. **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices.
5. **SEO Optimized**: Includes proper meta tags, structured data, and sitemap for search engines.

## Restaurant Information
- **Founded**: 2017
- **Website**: https://orderyeschef.com
- **Cuisine**: Authentic Ghanaian
- **Specialties**: Kenkey, Jollof Rice, Peppered Chicken

## Opening Hours
- Monday-Friday: 8:00 AM - 10:00 PM
- Saturday-Sunday: 10:00 AM - 10:00 PM

## Branches
Currently, there is one branch:
- **Osu La Crescent**: Nyaniba Estates Park, Osu La Crescent, Accra

### Adding a New Branch
To add a new branch:
1. Locate the `branches` array in `script.js`
2. Uncomment the example branch and update its details:
   ```javascript
   {
       name: "Branch Name",
       address: "Full Address",
       lat: latitude,
       lng: longitude
   }