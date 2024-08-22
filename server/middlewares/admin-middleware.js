
const adminMiddleWare = async (req, res, next) => {
  try {
    
    console.log(req.user.isAdmin);

    const adminRole = req.user.isAdmin ;

    if(!adminRole){
      return res.status(403).json({error : "Access Denied User is not admin"})
    }

    // res.status(200).json({msg : "Access Denied User is not admin"})
    next()
  } catch (error) {
      next(error)
  }
}

module.exports = adminMiddleWare ;