import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import config from 'config';
import { string } from "zod";

export interface UserDocument extends mongoose.Document {
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updateAt: Date;
  comparePassword: (candidatePassword: string): Promise<boolean>; // The return value is one Promise<boolean>
}

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: string, required: true },
  password:{type: string, required: true } 
},{
  timestamps: true
});

userSchema.pre('save', async function(next: any){  // mongoose.HookNextFunction is not in mongoose, this function need to be check
  let user = this as unknown as UserDocument;

  if(!user.isModified('password')){
    return next()
  }
  
  const salt= await bcrypt.genSalt(config.get('saltWorkFactor'));
  
  const hash = await bcrypt.hashSync(user.password, salt);

  user.password = hash

  return next();
})

userSchema.methods.comparePassword = async (candidatePassword: string)=>{
  
  const user = this as unknown as UserDocument;
  
  return bcrypt.compare(candidatePassword, user.password).catch((e)=>false);
}

const User = mongoose.model('User', userSchema);

export default User;