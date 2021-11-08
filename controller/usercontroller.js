const User = require('../model/User')


exports.adduser = async (req, res) => {
  // console.log(req.body)
  try {
    let new_user = await new User(req.body)
    await new_user.save()
    return res.status(200).send({
      data: new_user,
      message: "User added successfully",
    })
  } catch (err) {
    return res.status(400).send({
      data: null,
      message: "Error while fetching data",
      error: err.message
    })
  }
};

exports.addcolumn = async (req, res) => {
  try {
    // let col = await User.aggregate([
    //   {
    //     $addFields: {
    //       "User.newfield": req.body.col
    //     }
    //   }
    // ])
    // await User.schema.add({location: String});
    let value = req.body.value
    
    // let new_data= await User.updateMany({},{$set : {new_field: value}},{new:true})
    let new_data= await User.updateMany({}, [{ $set: { new_field: value } }])
    return res.status(200).send({
      data:new_data,
      message: "column added"
    })
  } catch (err) {
    return res.status(400).send({
      data: null,
      message: "Error while adding column",
      error: err.message
    })
  }
}

exports.updateuser = async (req, res) => {
  let id = req.params.id;

  try {
    let updated_user = await User.findByIdAndUpdate(id, req.body, { new: true })
    return res.status(200).send({
      error: null,
      data: updated_user,
      message: "User updated successfully"
    })
  } catch (err) {
    return res.status(400).send({
      error: err.message,
      data: null,
      message: "Error while updating data"
    })
  }
}

exports.remove = async (req, res) => {
  let id = req.params.id;
  try {
    const removed_user = await User.findOneAndDelete({ _id: id });
    return res.status(200).send({
      message: "User removed"
    })
  } catch (err) {
    return res.status(400).send({
      error: err.message
    })
  }
}

exports.updatefield = async (req, res) => {
  try {
    let updated_data = await User.updateMany( {}, { $rename: { "user_name": "name" } } ,{new:true})

    return res.status(200).send({
      data: updated_data,
      message: "field updated"
    })
  } catch (err) {
    return res.status(400).send({
      error: err.message
    })
  }
}

exports.removefield = async (req,res) => {
 
  try {
    await User.updateMany({}, {$unset: ["email"]} , {multi: true});
    // await User.updateMany( {}, [{ $unset: ["email"] }])
    // await User.update({}, {$unset: {new_field:1}} , {multi: true});

    return res.status(200).send({
      message: "field removed"
    })
  } catch (err) {
    return res.status(400).send({
      error: err.message
    })
  }
}








