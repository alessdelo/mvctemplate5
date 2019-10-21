// CLOUDINARY
// with credentials available on
// your Cloudinary account dashboard
cloudyConfig = { 
                cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
                api_key: process.env.CLOUDINARY_API_KEY, 
                api_secret: process.env.CLOUDINARY_API_SECRET 
              };


// export it
exports.cloudyConfig = cloudyConfig;

// ----------------------------------------------------

// JWT
// with credentials available on
// your Cloudinary account dashboard
jwtConfig = {
    connectionString: process.env.MONGODB_URI,
    secret: process.env.JWT_SECRET 
};

// export it
exports.jwtConfig = jwtConfig;

