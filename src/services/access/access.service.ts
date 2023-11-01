class AccessService {
  constructor() {}

  async signUp(email: string, password: string) {
    return { email, password }
  }
}

export default AccessService
