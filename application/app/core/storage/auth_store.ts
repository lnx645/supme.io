class AuthStore {
  private jwt_token_key = "axdsdYiydsOO(@*";
  
  public get jwtToken() : string|null {
    return localStorage.getItem(this.jwt_token_key)
  }
  
  setJwtToken(token: string) {
    localStorage.setItem(this.jwt_token_key, token);
  }
}

export const authStore = new AuthStore();
