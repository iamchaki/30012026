const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// --- DYNAMIC DATA (Simulating a Database) ---

// Expertise Data
const expertiseData = [
    { icon: 'fa-home', title: 'Residential Construction', desc: 'Residential Construction is nnrovy aelipert to uncsmre limices based witfoom crtiors.' },
    { icon: 'fa-building', title: 'Commercial Development', desc: 'Our expertise are commercial development and promotan on in an office ainting.' },
    { icon: 'fa-bridge', title: 'Infrastructure & Civil', desc: 'Infrastructure & Civil is infrstuctural and winore-eonoton employeon a infrastructure.' }
];

// Featured Projects Data
const projectsData = [
    { img: 'project1.jpg', title: 'City Center Apartments' },
    { img: 'project2.jpg', title: 'Commercial Development' },
    { img: 'project3.jpg', title: 'Infrastructure & Civil' },
    { img: 'project4.jpg', title: 'Modern Living Apartments' },
    { img: 'project5.jpg', title: 'Valley Bridge - Route 66' },
    { img: 'project6.jpg', title: 'Sigvice Office Tower' }
];

// Testimonials Data
const testimonialsData = [
    { text: "There are the smaedous blarburt hie experience and construction projects. Teaxn a nealy common process to comroroner pexnoant in intimiintion soiten.", name: "Make Eanth", role: "Clients", img: 'client1.jpg' },
    { text: "I utlansbubu tly foture can scaiets, son mast tha client ienseao be foweoly rupenieerses and appenuamnvent to meet momueas.", name: "David Smith", role: "Clients", img: 'client2.jpg' }
];


// --- ROUTES ---

// Homepage Route
app.get('/', (req, res) => {
    // Pass the data to the index.ejs view
    res.render('index', {
        pageTitle: 'Home - Urban Builders',
        expertise: expertiseData,
        projects: projectsData,
        testimonials: testimonialsData
    });
});


// Start Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);

});
