# Portfolio Constants Guide

This guide explains how to easily update your portfolio information by editing the constants file.

## 📁 File Location

All your personal information, publications, and content are stored in:
```
src/constants.js
```

## 🔧 How to Update Your Information

### 1. Contact Information
Update your personal details in the `CONTACT` object:
```javascript
export const CONTACT = {
  name: "Your Name",
  title: "Your Title",
  phone: "Your Phone",
  email: "your.email@domain.com",
  // ... etc
};
```

### 2. Research Statement
Update your research objective in the `OBJECTIVE` constant:
```javascript
export const OBJECTIVE = "Your research statement here...";
```

### 3. Publications
Add new publications to the `PUBLICATIONS` array:
```javascript
export const PUBLICATIONS = [
  { 
    id: 1, 
    year: "2025", 
    authors: "Author names", 
    title: "Publication title", 
    journal: "Journal name", 
    doi: "DOI number",
    featured: true // Set to true for featured publications
  },
  // ... add more publications
];
```

### 4. Education
Update your academic background in `PREPARATION`:
```javascript
export const PREPARATION = [
  { 
    inst: "Institution Name", 
    degree: "Degree Title", 
    period: "Time Period", 
    loc: "Location" 
  },
  // ... add more degrees
];
```

### 5. Work Experience
Update your work history in `APPOINTMENTS`:
```javascript
export const APPOINTMENTS = [
  { 
    role: "Job Title", 
    org: "Organization", 
    period: "Time Period", 
    loc: "Location" 
  },
  // ... add more positions
];
```

### 6. Awards & Honors
Update your achievements in `HONORS`:
```javascript
export const HONORS = [
  { 
    year: "Year", 
    title: "Award Title", 
    org: "Organization" 
  },
  // ... add more awards
];
```

### 7. Conference Presentations
Update your presentations in `POSTERS`:
```javascript
export const POSTERS = [
  { 
    title: "Presentation Title", 
    event: "Conference Name", 
    loc: "Location", 
    date: "Date" 
  },
  // ... add more presentations
];
```

### 8. Service & Outreach
Update your service activities in `SERVICE`:
```javascript
export const SERVICE = [
  { 
    category: "Category Name", 
    items: ["Activity 1", "Activity 2", "Activity 3"] 
  },
  // ... add more categories
];
```

### 9. Certifications
Update your certifications in `LICENSES`:
```javascript
export const LICENSES = [
  { 
    title: "Certificate Title", 
    org: "Organization", 
    date: "Date",
    id: "Certificate ID" // Optional
  },
  // ... add more certificates
];
```

## 🚀 After Making Changes

1. Save the `constants.js` file
2. The development server will automatically reload
3. Your changes will be visible immediately in the browser

## 💡 Tips

- **Featured Publications**: Set `featured: true` for publications you want to highlight
- **Contact Links**: Update the links object in CONTACT for social media profiles
- **Consistent Formatting**: Keep the same structure when adding new items
- **Testing**: Always check your portfolio after making changes to ensure everything displays correctly

## 🆘 Need Help?

If you encounter any issues:
1. Check the browser console for errors
2. Ensure all JavaScript syntax is correct (commas, quotes, brackets)
3. Make sure you haven't accidentally deleted any required fields

Happy updating! 🎉
