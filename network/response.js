exports.success = (req, res, message, status) => {
    res.status(status||200).send({
        error: false,
        status: status,
        body: message || '',
    })
}

exports.error = (req, res, message, status) => {
    res.status(status||500).send({
        error: true,
        status: status,
        body: message || 'Internal server error',
    }) 
}