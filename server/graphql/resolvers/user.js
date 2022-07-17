const User = require('../../models/User');
const bcrypt = require('bcrypt');
const { UserInputError, AuthenticationError } = require('apollo-server');
const { generateAuthToken } = require('../../utils/check-auth');
const logger = require('../../utils/logger');

const loginUser = async (parent, args) => {
  const user = await User.findOne({ email: args.email });
  try {
    if (!user) throw new Error('User does not exists.');
    const correctPassword = await bcrypt.compare(args.password, user.password);
    if (correctPassword) {
      const token = generateAuthToken(user);
      user.token = token;
      return user;
    } else {
      throw new Error('Incorrect user credentials.');
    }
  } catch (error) {
    logger.error({ message: 'User logging in error :', error });
    throw new UserInputError(error);
  }
};

const registerUser = async (parent, args) => {
  const existingUser = await User.findOne({
    $or: [{ username: args.username }, { email: args.email }],
  });
  if (existingUser)
    throw new Error('User already exists with following name or email.');
  let user = new User({
    ...args,
  });
  try {
    user = await user.save();
    return user;
  } catch (error) {
    logger.error({ message: 'User registration failed.', error });
    throw new UserInputError(error);
  }
};

const googleContinue = async (parent, args) => {
  const existingUser = await User.findOne({
    googleId: args.googleId,
  });
  try {
    if (!existingUser){ 
      return await registerUser(parent, args);}
    else{
       return await loginUser(parent, args);}
  } catch (error) {
    logger.error({ message: 'Google auth error', error });
    throw new AuthenticationError(error);
  }
};

module.exports = { registerUser, loginUser, googleContinue };
