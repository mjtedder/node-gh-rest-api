const retrievePRNumbers = (data) => {
    return data.map(pr => pr.number).sort((a,b) => a - b);
}

module.exports = {
    retrievePRNumbers
}