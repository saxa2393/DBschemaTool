module.exports = mongoose => {
    const protos = mongoose.model('Protos', {
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
    return protos;
};