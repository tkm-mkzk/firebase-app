import { Button } from 'reactstrap'
import { getAuth, signOut } from 'firebase/auth'
import { useAuth } from '../context/AuthContext'

const Header = () => {
  const { currentUser } = useAuth()

  const doLogout = () => {
    const auth = getAuth()

    signOut(auth)
      .then(() => {
        alert('ログアウト完了！')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div style={{ padding: '1rem 0' }}>
      {currentUser ? (
        <div suppressHydrationWarning={true}>
          <div style={{ paddingBottom: '1rem' }}>
            {currentUser.email} でログインしています。
          </div>
          <div>
            <Button
              onClick={() => {
                doLogout()
              }}
            >
              ログアウト
            </Button>
          </div>
        </div>
      ) : (
        <div suppressHydrationWarning={true}>ログインしていません。</div>
      )}
    </div>
  )
}

export default Header
