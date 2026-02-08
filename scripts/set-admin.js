/**
 * Set Admin Custom Claims
 *
 * Run this script ONCE to grant admin privileges to a Firebase user.
 *
 * Prerequisites:
 *   1. Create a Firebase project and enable Authentication
 *   2. Download your service account key from Firebase Console:
 *      Project Settings → Service Accounts → Generate New Private Key
 *   3. Save the key as `serviceAccountKey.json` in the scripts/ folder
 *   4. Get the UID of the user you want to make admin:
 *      - Go to Firebase Console → Authentication → Users
 *      - Copy the UID
 *
 * Usage:
 *   cd scripts
 *   npm install firebase-admin
 *   node set-admin.js YOUR_USER_UID
 *
 * Example:
 *   node set-admin.js abc123def456
 */

import { initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const uid = process.argv[2];

if (!uid) {
  console.error('\n❌ Error: Please provide a user UID as an argument.');
  console.error('   Usage: node set-admin.js <USER_UID>\n');
  process.exit(1);
}

try {
  const serviceAccount = JSON.parse(
    readFileSync(join(__dirname, 'serviceAccountKey.json'), 'utf8')
  );

  initializeApp({
    credential: cert(serviceAccount),
  });

  const auth = getAuth();

  await auth.setCustomUserClaims(uid, { admin: true });

  const user = await auth.getUser(uid);
  console.log('\n✅ Admin claims set successfully!');
  console.log(`   User: ${user.email || user.uid}`);
  console.log(`   Claims: ${JSON.stringify(user.customClaims)}`);
  console.log('\n📝 Note: The user needs to sign out and sign back in');
  console.log('   for the new claims to take effect.\n');
} catch (error) {
  if (error.code === 'ENOENT') {
    console.error('\n❌ Error: serviceAccountKey.json not found.');
    console.error('   Download it from Firebase Console:');
    console.error('   Project Settings → Service Accounts → Generate New Private Key');
    console.error('   Save it as scripts/serviceAccountKey.json\n');
  } else {
    console.error('\n❌ Error:', error.message, '\n');
  }
  process.exit(1);
}
