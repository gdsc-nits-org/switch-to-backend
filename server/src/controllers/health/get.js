// health checks are done too see that your server is responding properly to a client's request

const checkHealth = (_req, res)=>{
  return res.status(200).json({msg:"Health Check OK"});
};


export {checkHealth}