const mapping: Record<string, string> = {
  menus: 'menu',
  'menu-items': 'menu_item',
  restaurants: 'restaurant',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
