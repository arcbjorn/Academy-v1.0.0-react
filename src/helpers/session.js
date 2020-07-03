// try to avoid double true, dobule false structures (make the code more concise and beautiful)
// it will help you take joy in writing it :)

export function checkCredentials(params) {
  if (
    params.userName.toLowerCase() !== 'student' ||
    params.password !== 'student'
  ) {
    return false
  }

  return true
}
