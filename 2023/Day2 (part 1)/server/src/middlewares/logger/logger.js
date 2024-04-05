// console logs the request medtod (GET, PATCH...) and the path (Ex: /posts/1)
const logger = (req, res, next)=>{
  console.log(`${req.method} ${req.url}`);

  return next();
}

export {logger};