# Authentication Flow Testing Guide

## Testing Steps

### 1. Test Sign Up Flow
1. Go to `http://localhost:3000`
2. You should be redirected to `/login`
3. Click "Sign up here" link
4. Fill out the sign up form:
   - Name: Test User
   - Email: test@example.com
   - Phone: +1234567890
   - Password: TestPass123!
   - Confirm Password: TestPass123!
5. Click "Create Account"
6. Should redirect to dashboard

### 2. Test Settings Page
1. In the dashboard, click "Settings" in the sidebar (⚙️)
2. Should open settings page without errors
3. Test Profile tab:
   - Update name, email, phone
   - Click "Update Profile"
   - Should show success message
4. Test Password tab:
   - Enter current password: anypassword
   - New password: NewPass123!
   - Confirm password: NewPass123!
   - Click "Change Password"
   - Should show success message
5. Test Notifications tab:
   - Toggle various notification settings
   - Click "Save Preferences"
   - Should show success message

### 3. Test Logout Functionality
1. In the dashboard, click the "Logout" button (🚪) in the sidebar
2. Should immediately redirect to `/login` page
3. Try to access `/dashboard` directly - should redirect back to login
4. Check browser console for logout messages

### 4. Test Sign In Flow
1. On login page, enter:
   - Email: test@example.com
   - Password: TestPass123!
2. Click "Sign In"
3. Should redirect to dashboard

## Expected Console Messages

When testing logout, you should see these console messages:
```
Logout button clicked
Logging out user
Logout completed successfully
Logout successful, redirecting to login
User not authenticated, redirecting to login
```

## Troubleshooting

### If Settings Page Shows Error:
- Check browser console for specific error messages
- Ensure all imports are correct
- Verify AuthContext is properly set up

### If Logout Doesn't Work:
- Check browser console for error messages
- Verify localStorage is being cleared
- Check if navigation is working properly

### If Redirects Don't Work:
- Check if ProtectedRoute is working
- Verify AuthContext state is being updated
- Check browser console for navigation errors

## Browser Testing

Test in different browsers:
- Chrome
- Firefox
- Safari
- Edge

## Mobile Testing

Test responsive design:
- Open browser dev tools
- Toggle mobile device simulation
- Test on actual mobile devices

## Expected Behavior

✅ **Settings Page**: Should load without errors, all tabs functional  
✅ **Logout**: Should clear auth state and redirect to login  
✅ **Protected Routes**: Should redirect unauthenticated users to login  
✅ **Persistent Login**: Should remember login state across page refreshes  
✅ **Form Validation**: Should show proper error messages for invalid inputs  
✅ **Loading States**: Should show loading indicators during operations  