import { db, getCurrentUser } from './index'

export async function saveToken(expoToken) {
  const currentUser = await getCurrentUser()
  db.collection('tokens')
    .doc(currentUser.uid)
    .set(
      {
        expoToken,
      },
      { merge: true }
    )
}
