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

// JWT
// with credentials available on
// your Cloudinary account dashboard
jwtConfig = {
    "connectionString": "mongodb://localhost/node-mongo-registration-login-api",
    "secret": "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING"
};

// export it
exports.jwtConfig = jwtConfig;

