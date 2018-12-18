export default function ({ store, redirect }) {
  if (store.state.user.accessToken) {
    return redirect('/ems')
  }
}
