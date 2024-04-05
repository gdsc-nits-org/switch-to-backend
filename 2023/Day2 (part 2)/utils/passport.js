import passport from "passport";
import localStrategy from "passport-local";
import { prisma } from "./prisma.js";
import bcrypt from "bcrypt";

const initializePassport = () => {

    passport.use(new localStrategy(
        async (username,password,done) => {
            console.log(username,password);
            // const user=undefined;
            const user = await prisma.user.findFirst({
                where: {
                    username: username,
                }
            })

            if(!user){
                return done(null,false)
            }

            const res = await bcrypt.compare(password, user.password);

            if(!res){
                return done (null,false);
            }

            done(null,username);
        }
    ));

    passport.serializeUser((username,done) => {
        return done(null,username);
    })

    passport.deserializeUser((username,done) => {
        return done(null, username);
    })
}

export default initializePassport;