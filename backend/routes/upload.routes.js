
/*
// import in express
import express from 'express';
// import in multer
import multer from 'multer';
// create our router
const router = express.Router();
// import in the path module from node
import path from 'path';

// File Uploading Libraries: "There are several Node libraries available on NPM that can
// simplify the process of validating and uploading files to server. Among them, the most
// popular choice these days are Multer, Formidable, and Multiparty."

// ==============================
// 3 STEPS FOR THE MULTER CONFIG
// ==============================

// Step 1

// create the config for multer
// and let's initialize our storage engine, which will be " multer.diskStorage " and we will
// pass in an object with 2 functions
const storage = multer.diskStorage(

    {

        // from multer: " destination is used to determine within which folder the uploaded
        // files should be stored. "
        destination( req, file, cb ) {

            // we call the callback or cb and pass in " null " as the first argument because
            // there are no errors and the second argument will point to the location for image
            // uploads or " uploads/ "
            cb( null, 'uploads/' );

        },

        // from multer: " filename is used to determine what the file should be named inside
        // the folder. "
        filename( req, file, cb ) {

            // we call the callback and pass in null for the error or whatever we want to call
            // and the second argument will be composed of 3 parts:

            // (1) according to Multer: " .single( fieldname ) " so the fieldname is our case,
            // as indicated below, is " image "

            // (2) from w3schools: " The Date.now() method returns the number of milliseconds
            // since January 1, 1970 00:00:00 UTC. "

            // (3) and path.extname( file.originalname ) will add the proper extension to the
            // file

            // so we will end up with the following file format: fieldname-date.extension
            cb( null, `${ file.fieldname }-${ Date.now() }${ path.extname( file.originalname ) }` )

        }

    }

); // end of storage


// Step 2

// create the checkFileType function and this function will allow us to vaidate the type of image
// uploaded and either return true or return an error message
function checkFileType( file, cb ) {

    // create an expression that list the allowable files types

    // from Mozilla: " Using a regular expression literal, which consists of a pattern enclosed
    // between slashes, as follows: let re = /ab+c/; "
    const fileTypes = /jpg|jpeg|png/;

    // test() will give us a true or false value so if we pass in an extension that matches
    // fileTypes or matches jpg or jpeg or png then extname will be true
    const extname = fileTypes.test( path.extname( file.originalname ).toLowerCase() );

    // also, we want to check the mimetype

    // from Mozilla: " Browsers use the MIME type, not the file extension, to determine how to
    // process a URL, so it's important that web servers send the correct MIME type in the
    // response's Content-Type header. If this is not correctly configured, browsers are likely
    // to misinterpret the contents of files and sites will not work correctly, and downloaded
    // files may be mishandled. "

    // " type/subtype / The type represents the general category into which the data type falls,
    // such as video or text. The subtype identifies the exact kind of data of the specified type
    // the MIME type represents. "

    // " Files whose MIME type is image contain image data. The subtype specifies which specific
    // image file format the data represents. "

    // mimetypes for images could be " image/gif | image/jpeg | image/png | image/svg+xml |
    // image/webp "
    const mimetype = fileTypes.test( file.mimetype );

    // we want to make sure both extname and mimetype are true before we move on
    if ( extname && mimetype  ) {

        // we're good and we want to return our callback and pass in null for the error
        cb( null, true );

    } else {

        // this time we will pass in the error message
        cb( 'jpeg, jpg or png images only' );

    }

} // end of checkFileType function


// Step 3

// create the middleware function for our route
// inside the object we will pass in storage and this will allow us to upload any kind of file
// which we don't want so after storage we will pass in function called fileFilter that will limit
// the types of files that can be uploaded
const upload = multer(
    {
        storage,

        fileFilter : function( req, file, cb ) {

            checkFileType( file, cb );

        }

    }

);  // end of upload


// ==============================
// CREATE THE ROUTE
// ==============================

// Route 1
// upload an image
// and remember " / " equals " /api/upload "

// the first argument to router.post() will be the route or " / "

// the second argument to router.post() will be our middleware function or the upload function
// and let's do upload.single() so that we can only upload one image at a time and we will call
// " image " on the frontend

// the third argument will be our ( simple ) controller function, which in this case is just
// the server response and that reponse is the file pathname or the path to the iamge
router.post( '/', upload.single( 'image' ), ( req, res ) => {

    res.send( `/${ req.file.path }` );

} ); // end of router.post()


export default router;
*/























// ===============================






















/*
// at the beginning of lecture 80, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in express
import express from 'express';
// import in multer
import multer from 'multer';
// create our router
const router = express.Router();
// import in the path module from node
import path from 'path';
// import in sharp
import sharp from 'sharp';


// File Uploading Libraries: "There are several Node libraries available on NPM that can
// simplify the process of validating and uploading files to server. Among them, the most
// popular choice these days are Multer, Formidable, and Multiparty."

// ==============================
// 3 STEPS FOR THE MULTER CONFIG
// ==============================


// Step 1

// create the config for multer
// and let's initialize our storage engine, which will be " multer.diskStorage " and we will
// pass in an object with 2 functions
const multerStorage = multer.diskStorage(

    {

        // from multer: " destination is used to determine within which folder the uploaded
        // files should be stored. "
        destination( req, file, cb ) {

            // we call the callback or cb and pass in " null " as the first argument because
            // there are no errors and the second argument will point to the location for image
            // uploads or " uploads/ "
            cb( null, 'uploads/' );

        },

        // from multer: " filename is used to determine what the file should be named inside
        // the folder. "
        filename( req, file, cb ) {

            // we call the callback and pass in null for the error and the second argument
            // will be composed of 3 parts:

            // (1) according to Multer: " .single( fieldname ) " so the fieldname is our case,
            // as indicated below, is " image " so our files will look like the following
            // " image-1619313302410.jpg "

            // (2) from w3schools: " The Date.now() method returns the number of milliseconds
            // since January 1, 1970 00:00:00 UTC. "

            // (3) and path.extname( file.originalname ) will add the proper extension to the
            // file

            // and remmber file.originalname is " Name of the file on the user's computer "

            // so we will end up with the following file format: fieldname-date.extension
            cb( null, `${ file.fieldname }-${ Date.now() }${ path.extname( file.originalname ) }` )

        }

    }

); // end of storage




// Step 1

// instead of saving the file to disk ( see above ) we will save the file in memory and then
// later save the file to disk
// const multerStorage = multer.memoryStorage();


// Step 2

// create the checkFileType function and this function will allow us to vaidate the type of image
// uploaded and either return true or return an error message
function checkFileType( file, cb ) {

    
    // create an expression that list the allowable files types

    // from Mozilla: " Using a regular expression literal, which consists of a pattern enclosed
    // between slashes, as follows: let re = /ab+c/; "
    const fileTypes = /jpg|jpeg|png/;

    // test() will give us a true or false value so if we pass in an extension that matches
    // fileTypes or matches jpg or jpeg or png then extname will be true
    const extname = fileTypes.test( path.extname( file.originalname ).toLowerCase() );

    // also, we want to check the mimetype

    // from Mozilla: " Browsers use the MIME type, not the file extension, to determine how to
    // process a URL, so it's important that web servers send the correct MIME type in the
    // response's Content-Type header. If this is not correctly configured, browsers are likely
    // to misinterpret the contents of files and sites will not work correctly, and downloaded
    // files may be mishandled. "

    // " type/subtype / The type represents the general category into which the data type falls,
    // such as video or text. The subtype identifies the exact kind of data of the specified type
    // the MIME type represents. "

    // " Files whose MIME type is image contain image data. The subtype specifies which specific
    // image file format the data represents. "

    // mimetypes for images could be " image/gif | image/jpeg | image/png | image/svg+xml |
    // image/webp "
    const mimetype = fileTypes.test( file.mimetype );

    // we want to make sure both extname and mimetype are true before we move on
    if ( extname && mimetype  ) {

        // we're good and we want to return our callback and pass in null for the error
        cb( null, true );

    } else {

        // this time we will pass in the error message
        cb( 'jpeg, jpg or png images only' );

    }
    

    /*
    // the regex came from Andrew Mead's node course lecture 124
    if ( !file.originalname.match( /\.(jpg|jpeg|png)$/ ) ) {

        // remember the return keyword will stop the function execution and then set our error
        // message
        return cb( new Error( 'Please upload a jpeg, jpg or png image' )  )

    }

    // we're good to go so let's pass in null for the error and pass in true as the second
    // argument, which will accept the file upload
    cb( null, true )


} // end of checkFileType function


// Step 3

// create the middleware function for our route
// inside the object we will pass in storage and this will allow us to upload any kind of file
// which we don't want so after storage we will pass in function called fileFilter that will limit
// the types of files that can be uploaded
const upload = multer(
    {
        // storage
        storage : multerStorage,

        // restrict the file size that can be uploaded to the server to 10 MB or 10
        // million bytes
        limits : {

            fileSize : 10000000

        },

        // limit by file extension
        // multer will provide us with 3 arguments: req, file and cb or callback and req
        // contains information about the request being made, file contains information about
        // the file being uploaded and we use cb to tell multer when were done filtering the
        // file
        fileFilter : function( req, file, cb ) {

            checkFileType( file, cb );

        }

    }

);  // end of upload


// ==============================
// CREATE THE ROUTE
// ==============================

// Route 1
// upload an image
// and remember " / " equals " /api/upload "

// the first argument to router.post() will be the route or " / "

// the second argument to router.post() will be our middleware function ( i.e. the upload
// function ) and upload.single( 'avatar' ) " means we accept a single file with the field
// name 'avatar'. File upload will be handled by Multer. "

// let's do upload.single() so that we can only upload one image at a time
// and " image " will be our fieldname

// the third argument will be our ( simple ) controller function, which in this case is just
// the server response and that reponse is the file pathname or the path to the image and the
// server will use that pathname to retrieve the image and then display the image in the
// application

// and remember req.file.path will look like the following:
// " /uploads/image-1619399184958.jpg "

// we are going to use the npm module called sharp to process the images before we save
// them in the uploads folder and sharp will allow us to resize images

// #19
// sharp: " Home@Rogers-iMac brad_traversy % npm i sharp "
// and this will install sharp in our application
// lecture 80: Front End Image Upload

// import in sharp above
router.post( '/', upload.single( 'image' ), ( req, res ) => {

    // check the file object and make sure we see file.buffer
    // console.log( 'file', req.file );

    // to resize the images we need to save the file in memory and then save the file to
    // disk as shown below

    // first, save the file in memory and this means the file will be stored as a buffer

    // and we can retrieve the buffer at req.file.buffer

    // and " sharp( req.file.buffer ) " will create an object and we can chain mulitple
    // methods to this object and these methods will do our image processing
/*
    // create the file name and then save it to " filename " or " req.file.filename " and
    // req.file.filename will save a new key value pair on the file object ( which could
    // be useful in the future ) or " filename : 'image-1619487279173.jpg' "
    req.file.filename = `${ req.file.fieldname }-${ Date.now() }${ path.extname( req.file.originalname ) }`;
    
    // do our image processing
    sharp( req.file.buffer )
        .resize( { width : 640, height : 510 } )     // resize
        // .toFormat( 'png' )                        // format ext
        // .png( { quality : 100 } )                 // set quality level
        .toFile( `uploads/${ req.file.filename }` ); // where to save the uploaded image

    // send the image file path to the browser
    res.send( `uploads/${ req.file.filename }` );

}, ); // end of router.post()


export default router;
*/























// ===============================























// at the beginning of lecture 81, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in express
import express from 'express';
// import in multer
import multer from 'multer';
// create our router
const router = express.Router();
// import in the path module from node
import path from 'path';
// import in sharp
import sharp from 'sharp';


// File Uploading Libraries: "There are several Node libraries available on NPM that can
// simplify the process of validating and uploading files to server. Among them, the most
// popular choice these days are Multer, Formidable, and Multiparty."

// ==============================
// 3 STEPS FOR THE MULTER CONFIG
// ==============================


// Step 1

// instead of saving the file to disk ( see above ) we will save the file in memory and then
// later save the file to disk
const multerStorage = multer.memoryStorage();


// Step 2

// create the checkFileType function and this function will allow us to vaidate the type of image
// uploaded and either return true or return an error message
function checkFileType( file, cb ) {

    // the regex came from Andrew Mead's node course lecture 124
    if ( !file.originalname.match( /\.(jpg|jpeg|png)$/ ) ) {

        // remember the return keyword will stop the function execution and then set our error
        // message
        return cb( new Error( 'Please upload a jpeg, jpg or png image' )  )

    }

    // we're good to go so let's pass in null for the error and pass in true as the second
    // argument, which will accept the file upload
    cb( null, true )


} // end of checkFileType function


// Step 3

// create the middleware function for our route
// inside the object we will pass in storage and this will allow us to upload any kind of file
// and we don't want this so after storage we will pass in 2 functions: one function to limit the
// size of the file that can be uploaded and another function called fileFilter that will limit
// the types of files that can be uploaded
const upload = multer(
    {
        // storage
        storage : multerStorage,

        // restrict the file size that can be uploaded to the server to 10 MB or 10
        // million bytes
        limits : {

            fileSize : 10000000

        },

        // limit by file extension
        // and multer will provide us with 3 arguments: req, file and cb or callback and req
        // contains information about the request being made, file contains information about
        // the file being uploaded and we use cb to tell multer when were done filtering the
        // file
        fileFilter : function( req, file, cb ) {

            checkFileType( file, cb );

        }

    }

);  // end of upload


// ==============================
// CREATE THE ROUTE
// ==============================

// Route 1
// upload an image
// and remember " / " equals " /api/upload "

// the first argument to router.post() will be the route or " / "

// the second argument to router.post() will be our middleware function ( i.e. the upload
// function ) and upload.single( 'avatar' ) " means we accept a single file with the field
// name 'avatar'. File upload will be handled by Multer. "

// let's do upload.single() so that we can only upload one image at a time and " image "
// will be our fieldname

// the third argument will be our ( simple ) controller function, which in this case is just
// the server response and that reponse is the file pathname or the path to the image and the
// server will use that pathname to retrieve the image and then display the image in the
// application

// and remember req.file.path will look like the following:
// " /uploads/image-1619399184958.jpg "

// we are going to use the npm module called " sharp " to process the images before we save
// them in the uploads folder and sharp will allow us to resize images

// #19
// sharp: " Home@Rogers-iMac brad_traversy % npm i sharp "
// and this will install sharp in our application
// lecture 80: Front End Image Upload

// import in sharp above
router.post( '/', upload.single( 'image' ), ( req, res ) => {

    // check the file object and make sure we see file.buffer
    // console.log( 'file', req.file );

    // to resize the images we need to save the file in memory and then save the file to
    // disk as shown below

    // first, save the file in memory and this means the file will be stored as a buffer

    // and we can retrieve the buffer at req.file.buffer

    // and " sharp( req.file.buffer ) " will create an object and we can chain mulitple
    // methods to this object and these methods will do our image processing

    // create the file name and then save it to " filename " or " req.file.filename " and
    // req.file.filename will save a new key value pair on the file object ( which could
    // be useful in the future ) or " filename : 'image-1619487279173.jpg' "
    req.file.filename = `${ req.file.fieldname }-${ Date.now() }${ path.extname( req.file.originalname ) }`;
    
    // Important => 2 things to remember below:
    // (1) we have to put a forward slash in front of uploads or " /uploads " inside res.send();
    // otherwise, the image paths inside the application may not be correct
    // (2) we can't put a forward slash or " / " before uploads inside toFile(); otherwise,
    // we will get an error messgage

    // do our image processing
    sharp( req.file.buffer )
        .resize( { width : 640, height : 510 } )     // resize
        // .toFormat( 'png' )                        // format ext
        // .png( { quality : 100 } )                 // set quality level
        .toFile( `uploads/${ req.file.filename }` ); // where to save the uploaded image

    // send the image file path to the browser
    res.send( `/uploads/${ req.file.filename }` );

} ); // end of router.post()


export default router;

