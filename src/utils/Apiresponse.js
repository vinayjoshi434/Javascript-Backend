class Apiresponse {
    constructor(statuscode, data, message = "success") {
        this.statuscode = statuscode
        this.message = message
        this.data = data
        this.success = statuscode < 400


        // client error response status code ranges (400-499)    Standard he!!!

    }
}