// Configure Cloudinary
// with credentials available on
// your Cloudinary account dashboard
cloudyConfig ={ 
                cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
                api_key: process.env.CLOUDINARY_API_KEY, 
                api_secret: process.env.CLOUDINARY_API_SECRET 
              };


// export it
exports.cloudyConfig = cloudyConfig;
