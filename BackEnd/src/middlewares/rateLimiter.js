import rateLimit from "express-rate-limit"

const limiter = rateLimit({
    windowMs:15*60*100,
    max:600,
    message:{
        status:429,
        error:"Too many request"
    }
})

export default limiter