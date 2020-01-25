
const dbService = require('../../services/db.service')
const reviewService = require('../review/review.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    getByEmail,
    remove,
    update,
    add,
    getUsersByEmail
}

async function query(filterBy = {}) {
    const criteria = _buildCriteria(filterBy)
    const collection = await dbService.getCollection('user')
    try {
        const users = await collection.find(criteria).toArray();
        users.forEach(user => delete user.password);

        return users
    } catch (err) {
        console.log('ERROR: cannot find users')
        throw err;
    }
}

async function getById(userId) {
    const collection = await dbService.getCollection('user')
    try {
        const user = await collection.findOne({"_id":ObjectId(userId)})
        delete user.password

        user.givenReviews = await reviewService.query({byUserId: ObjectId(user._id) })
        user.givenReviews = user.givenReviews.map(review => {
            delete review.byUser
            return review
        })


        return user
    } catch (err) {
        console.log(`ERROR: while finding user ${userId}`)
        throw err;
    }
}
async function getByEmail(email) {
    const collection = await dbService.getCollection('user')
    try {
        const user = await collection.findOne({email})
        return user
    } catch (err) {
        console.log(`ERROR: while finding user ${email}`)
        throw err;
    }
}
//   const users = await collection.find({$and:[criteria,{"_id":{ $nin:[ObjectId("5e29d6d35cb677824c26c931"),ObjectId("5e2b5a25e180460e309fad36")] }}] }).toArray();
//,{$nin:[emails]}
//db.getCollection('user').find({ _id: { $nin: [ObjectId("5e29d6d35cb677824c26c931"),ObjectId("5e2b5a25e180460e309fad36")] }  }) 
async function getUsersByEmail(emails,input){
    const criteria = {};
    criteria.email = {$regex:`${input}` }
    console.log(emails,input)
    const collection = await dbService.getCollection('user')
    try {
        const users = await collection.find({$and:[criteria,{"email":{ $nin:emails }}] }).toArray();
        return users
    } catch (err) {
        console.log('ERROR: cannot find users')
        throw err;
    }

}

async function remove(userId) {
    const collection = await dbService.getCollection('user')
    try {
        await collection.deleteOne({"_id":ObjectId(userId)})
    } catch (err) {
        console.log(`ERROR: cannot remove user ${userId}`)
        throw err;
    }
}

async function update(user) {
    const collection = await dbService.getCollection('user')
    user._id = ObjectId(user._id);

    try {
        await collection.replaceOne({"_id":user._id}, {$set : user})
        return user
    } catch (err) {
        console.log(`ERROR: cannot update user ${user._id}`)
        throw err;
    }
}

async function add(user) {
    const collection = await dbService.getCollection('user')
    try {
        await collection.insertOne(user);
        return user;
    } catch (err) {
        console.log(`ERROR: cannot insert user`)
        throw err;
    }
}

function _buildCriteria(filterBy) {
    const criteria = {};
    if (filterBy.txt) {
        criteria.username = filterBy.txt
    }
    if (filterBy.minBalance) {
        criteria.balance = {$gte : +filterBy.minBalance}
    }
    return criteria;
}


