class UriBuilder {
  static build(baseUrl, user) {
    if (user !== undefined) {
      const url = `${baseUrl}/users/${user}/repos`;
      return url;
    }

    const url = `${baseUrl}/user/repos`;
    return url;
  }
}

module.exports = UriBuilder;