// These scopes are required to close/reopen issues
// own self-owned and public repos. However, some public
// repos do not allow closing issues.

const authScopes = [
    'read:user', 
    'repo', 
    'public_repo'
];

export default authScopes;