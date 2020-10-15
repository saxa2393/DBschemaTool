module.exports = mongoose => {
    // const userSchema = new mongoose.Schema({});
    // const listingsAndReviews = mongoose.model('listingsAndReviews', userSchema, 'listingsAndReviews');
    // const {
    //     Schema
    // } = mongoose;
    // const protosSchema = new Schema({
    //     action: Number,
    //     schemaCreate: {
    //         schemaName: String,
    //         description: String,
    //         properties:[{
    //             name: String,
    //             description: String,
    //             dataType:Number,
    //             required:Boolean,
    //             structProperties:[{
    //                 name: String,
    //                 description: String,
    //                 dataType:Number,
    //                 required:Boolean,
    //                 structProperties:[{}]
    //             }]
    //         }]
    //     }
    // });

    // {
    //     "action": 1,
    //     "schemaCreate": {
    //       "schemaName": "teset",
    //       "description": "dfdsfds",
    //       "properties": [{
    //         "name": "dsfds",
    //         "description": "fdsf",
    //         "dataType": 6,
    //         "required": true,
    //         "structProperties": [{
    //           "name": "sdf",
    //           "description": "dsf",
    //           "dataType": 7,
    //           "required": false
    //         }, {
    //           "name": "dsf",
    //           "description": "dsfsd",
    //           "dataType": 7,
    //           "required": false
    //         }]
    //       }, {
    //         "name": "fdsf",
    //         "description": "sdfdsf",
    //         "dataType": 6,
    //         "required": false,
    //         "structProperties": [{
    //           "name": "dsfdsf",
    //           "description": "dsf",
    //           "dataType": 6,
    //           "required": false,
    //           "structProperties": []
    //         }]
    //       }]
    //     }
    //   }
    // const listingsAndReviews = mongoose.model('Protos', userSchema);
    const listingsAndReviews = mongoose.model('Protos', {
        action: Number,
        schemaCreate: {
            schemaName: String,
            description: String,
            properties:[ {
                name: String,
                description: String,
                dataType:Number,
                required: Boolean,
                structProperties:[{
                    name: String,
                    description: String,
                    dataType:Number,
                    required: Boolean,
                    structProperties:[{
                        name: String,
                        description: String,
                        dataType:Number,
                        required: Boolean
                    }]
                }]
            }]
        }
    })
    return listingsAndReviews;
};