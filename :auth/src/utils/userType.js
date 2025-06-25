/**
 * Determines user type based on email address
 * @param {string} email - User's email address
 * @returns {string} - 'premium' or 'new'
 */
export const getUserType = (email) => {
  if (!email) {
    return 'new'; // Default to new user if no email
  }
  
  // Premium user email
  const premiumEmails = ['thackermeetkumar9033@gmail.com', 'kolharibhavish@gmail.com'];
  
  return premiumEmails.includes(email.toLowerCase()) ? 'premium' : 'new';
};

/**
 * Gets user type from Clerk user object
 * @param {Object} user - Clerk user object
 * @returns {string} - 'premium' or 'new'
 */
export const getUserTypeFromClerk = (user) => {
  if (!user || !user.primaryEmailAddress?.emailAddress) {
    return 'new';
  }
  
  return getUserType(user.primaryEmailAddress.emailAddress);
}; 