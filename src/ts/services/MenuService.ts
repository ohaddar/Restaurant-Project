import ApiDataSource from '../data-sources/api-data-source';

class MenuService {
  static async getMenu() {
    return await ApiDataSource.get('https://chezbobo.onrender.com/products');
  }
  static async getDessert() {
    return (await this.getMenu()).filter((m: any) => m.type === 'dessert');
  }
}

export default MenuService;
