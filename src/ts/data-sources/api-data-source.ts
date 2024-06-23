class ApiDataSource {
  static async get(url: string) {
    const result = await fetch(url, {
      method: 'GET',
    });

    if (!result.ok) {
      throw new Error(`HTTP error! status: ${result.status}`);
    }

    const jsResult = await result.json();
    return jsResult;
  }

  static send(data: any, method: string, url: string) {
    fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }
}

export default ApiDataSource;
