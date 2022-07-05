import mongoose, { mongo } from "mongoose";
import config from 'config';
import log from './logger';

async function connect(){
  const dbUri = config.get<string>('dbUri');
  
  try{
    await mongoose.connect(dbUri);
    log.info('database is connected');
  }catch(err){
    log.error('Cannot connect to Db');
    process.exit(1)
  }
}

export default connect